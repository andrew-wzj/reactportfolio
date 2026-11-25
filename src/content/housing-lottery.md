# We Built the Form. We Never Built the Lottery.

*A 2023 capstone project, revisited in 2026: redefining the problem, designing the rules,
and testing them with simulation.*

---

In 2023–24, my senior capstone team built a housing lottery application for the Office
of Residence Life and Housing at Gordon College. Students liked it. Reviewers called the
interface "clean," "professional," and "consistent with 360." We shipped a student
application form and an administrator table with CSV export, both inside the college's
Gordon 360 portal.

The app never decided who lives where.

This case study goes back to the question we skipped. I redefine the problem, write down
the rules, design an assignment algorithm, and test the rules on 1,000 simulated
lotteries. Some results confirmed my instincts. One proved me wrong.

## The original project

**The customer.** The Director of Residence Life and Housing ran the annual lottery by
hand. Students filled out a Google Form with their hall preferences; staff sorted the
responses, assigned lottery numbers by class year, and placed students one by one.
Commercial housing software existed, but it was beyond the budget.

**What they asked for.** Our problem statement listed four needs: move the application
into Gordon 360, assign lottery numbers by class year (seniors first), let students list
roommates easily and correctly, and "implement an algorithm to sort collected housing data
automatically."

**What we built.** I was one of four student developers. I finalized our problem
statement, led most of the front-end design, built the administrator interface with a
teammate, and ran our user studies. I also worked with the back end on the data model and on converting
application data to and from JSON between the interface and the API. Over two semesters,
the team built:

- a student application: add roommates by college email, rank up to six halls, answer
  roommate-preference questions, and accept the housing agreements;
- an administrator view: a table of every application, with CSV export and a due-date
  setting;
- a random lottery number for each application, with late applications marked so they
  sort last (built by teammates);
- the database tables and API endpoints behind both, following Gordon 360's conventions.

**How we tested it.** We ran two rounds of user studies (the second with eight
participants, including a resident assistant) and presented at three demo reviews. The
feedback was specific and useful: add an "agree to all" button, don't force students to
rank all six halls, make the admin table easier to scan, and stop one student from adding
another without their knowledge.

## What we missed

The fourth need, the algorithm, was only partly built. Each application got a random
lottery number, but nothing in the app ordered students by class year or placed anyone in
a hall. The assignment itself still happened by hand, starting from the CSV file we
exported.

One reviewer at our December demo said it plainly: *"For the admin interface, if possible
the team could implement an algorithm that does the room assignments, maybe based on
first come first serve or some other method."*

Looking back, I think we missed it for two reasons, and both were partly mine. I ran our
user research, and it focused on the form's usability, not on the decision the form fed
into. And although the algorithm was in the problem statement I finalized, the hardest question
in the project, *what is a fair way to assign rooms?*, was never assigned to anyone. It
was not a UI question or a database question, so it fell between our tasks.

## Redefining the problem

Here is the problem as I would write it today.

**Inputs**

- Students, each with a class year and a housing gender category.
- Roommate groups of one to four students.
- Halls, each with rooms of given sizes (single, double, triple, quad) on gender-specific
  floors.
- Each group's ranked list of choices.

**Output.** A room for every group, or a short "unplaced" list for the administrator,
with the reason for each entry.

**Goals**

1. Rules that a student can understand in one reading.
2. Ranking your true preferences is always your best strategy, so nobody needs to game
   the system.
3. Results are reproducible and auditable.
4. The administrator handles exceptions, not the whole process.

## The rules

| Rule | 2023 design | 2026 redesign | Why |
|---|---|---|---|
| R1 Groups | One student lists the others | Every member confirms | Testers worried about being added without consent |
| R2 Gender | Stored with each application | One category per group, checked at submission | Rooms are on gender-specific floors |
| R3 Group priority | Highest class year in the group | **Average** class year | Limits a senior "carrying" younger friends (data below) |
| R4 Lottery number | A random code per application | One ticket per group | Group size doesn't change the odds |
| R5 Randomness | Not published | Publish the seed's SHA-256 hash before the draw, the seed after | Anyone can recompute the order |
| R6 Special needs | Separate process | Reserved before the draw | Same as before, made explicit |
| R7 Choices | Rank exactly six halls | Rank 1–6 halls, **each with a room size** | Testers disliked forced choices; lets groups decide about splitting |
| R8 Safety net | — | Optional "place us anywhere if our choices are full," plus "you may split us"; a warning for short lists | Short lists turned out to be risky (data below) |

Under R7, a group of four might submit:

1. Alder, quad
2. Cedar, quad
3. Alder, two doubles *(we'll split to stay in Alder)*

Listing a room size smaller than the group is how a group agrees to split. It then splits
only inside that hall.

## The algorithm

The assignment uses a mechanism called **random serial dictatorship**. The name is
alarming; the idea is simple.

1. Sort the groups by priority, then by lottery ticket.
2. Groups take turns in that order. On its turn, a group gets the first choice on its list
   that can still be filled completely.
3. If none of its choices can be filled, the group goes to the unplaced list, unless it
   opted into the safety net (R8).

"Filled completely" matters for split choices. If a group of four asks for two doubles in
Alder and only one double is left, nothing is reserved; the group moves on to its next
choice.

**Why this is fair in a precise sense.** When your turn comes, you get the best choice on
your list that is still available. Nothing you write can change what groups before you
took. So reordering your list, or leaving out a hall you want because you think it's "too
popular," can only make your result the same or worse. Economists call this
*strategy-proofness*. For students, it means one piece of advice is always correct:
**rank what you actually want.**

I checked this property in code with a brute-force test. On small random cases, the test
tries every possible false list for every group and confirms that none does better than
the honest list, including lists with split choices.

**A worked example.** Two halls, both with rooms on a women's floor. Alder has one double;
Birch has one double and one triple.

| Turn | Group | Priority | List | Result |
|---|---|---|---|---|
| 1 | A: senior + senior | 4.0 | Alder, Birch | Alder double |
| 2 | B: senior + two juniors | 3.33 | Alder, Birch | Alder is full → Birch triple |
| 3 | C: junior + sophomore | 2.5 | Alder only | Alder is full → unplaced |
| 4 | D: sophomore + freshman | 1.5 | Birch | Birch double |

Group C listed only one hall. That was its right, but it carried a risk, and the
simulation shows how large that risk is.

## Testing the rules with simulation

A rule that sounds fair can still behave badly at scale, so I wrote a simulation. Each
run builds a synthetic campus:

- 1,000 students;
- six made-up halls with different popularity and room mixes;
- 5% more beds than students;
- roommate groups of one to four students, most of them single-year;
- ranked lists drawn from each group's own taste.

I ran 1,000 lotteries. Within each lottery, every rule is applied to the same students and
the same tickets, so the differences between rules are not luck. The data is entirely
synthetic. The numbers depend on my assumptions; the directions are what matter.

### 1. Class-year priority doesn't make more students happy. It decides which ones are.

![Students who got their first-choice hall, by class year](img/first-choice-by-year.svg)

About 64% of students get their first-choice hall under every rule I tested. Class-year
priority doesn't change that total. It moves the chances around:

- with average class-year priority, seniors get their first choice 85% of the time and
  freshmen 39%;
- with a pure lottery, every class gets 64%.

Seniority is a legitimate value: seniors have waited longest. But it is a value choice,
not an efficiency gain, and the housing office should make it knowingly.

### 2. Averaging weakens the "senior carries friends" effect, but doesn't remove it

![Gain from grouping with older students, by priority rule](img/carry-effect.svg)

Under the 2023 rule (a group's priority is its highest class year), a sophomore or
freshman who joins a group with a senior gets their first-choice hall 28 points more
often than one who groups with classmates. Averaging cuts that advantage to 12 points.
Using the lowest class year flips it negative.

Even a pure lottery shows −4.8, because mixed-year groups differ in other ways (they tend
to be larger, for example). Measured against that baseline, the averaging rule removes
about half of the incentive. I kept the average rule as a middle ground: it doesn't
punish mixed-year friendships the way the lowest-year rule does.

### 3. Short lists are risky, so the form should say so

![Students left without a bed, by number of halls listed](img/short-list-risk.svg)

Our 2023 testers asked us not to force six choices, and they were right that forcing
choices is a poor experience. But the simulation shows the cost of freedom. Without a
safety net, 28% of students whose group listed one hall end up without a bed, against
about 4% of those who listed six.

That finding produced rule R8, which has two parts:

- **A warning.** When a group lists one or two halls, the form shows the risk in plain
  numbers before submission.
- **A safety net.** A group can tick "place us anywhere if our choices are full."

If every group ticks the safety net, the one-hall risk falls from 28% to 5%, and the
overall first-choice rate barely moves, because the safety net only uses beds that are
left after everyone's own choices. The cost is real but contained: the hall a safety-net
group lands in ranks, on average, about fourth of six in its own taste.

### 4. I predicted room-type choices would reduce splitting. They didn't.

My expectation was that letting groups rank room sizes would mean fewer groups split
apart. Instead, the share of students in split groups rose from about 16% to 19%.

The reason became clear once I varied one assumption: how groups order their choices.
Some groups list "stay together" options first; others prefer "stay in this hall, even if
split."

| How groups order their choices | Students in split groups | First-choice hall | Unplaced |
|---|---:|---:|---:|
| 2023 rules (rank halls only) | 15.5% | 63.8% | 7.8% |
| 2026 rules, all "together first" | 14.7% | 59.8% | 8.3% |
| 2026 rules, half and half | 18.4% | 64.1% | 7.4% |
| 2026 rules, all "hall first" | 22.2% | 69.0% | 6.5% |

*200 simulated lotteries per row, average class-year priority, no safety net.*

The 2026 rules don't reduce splitting. They turn it into a choice. Under the 2023
design, every group was treated the same way: try every hall together, and split
automatically when nothing fits. Under the 2026 design, a group that cares most about
the hall can split to get it, and a group that cares most about staying together almost
never gets split.

The "together first" row also gets fewer first-choice halls than the 2023 rules. Part of
that is my modeling assumption (simulated pairs only ask for doubles, while the 2023 logic
could also place a pair in a free quad), so I don't read much into that gap. The split
rates are the point.

I'm including this result because the wrong prediction taught me more than a correct one
would have: I was measuring the wrong thing. The goal was never "fewer splits." It was
"each group gets the trade-off it prefers."

### 5. An algorithm can't create rooms

Even with every group using the safety net, about 16% of students in groups of four stay
unplaced, almost all of them in groups that declined to split. Meanwhile, about 35 double
rooms sit empty at the end of each lottery.

The cause is supply, not software. In my synthetic campus, about 25% of students apply in
groups of four, but only 14% of beds are in quads. No assignment rule can fit more groups
of four into a quad than the quads hold. That's a decision for the college, about
buildings and room layouts; the most the software can do is show the mismatch clearly.

## What I'd tell my 2023 team

**Start from the decision, not the form.** We designed the form first and treated the
assignment as a later step. The form exists to feed a decision; design them together.

**Write the rules down before the interface.** Many of our UI debates were really rule
questions in disguise. "Must students rank all six halls?" is a question about risk and
fairness, not about dropdown menus.

**Test the rules, not only the screens.** Usability studies told us the form was easy to
use. They could not tell us whether the outcomes would be fair. A few hundred lines of
simulation code answer questions that no user test can.

**Make randomness auditable.** When the outcome is where someone lives for a year, "the
computer picked" is not enough. Publishing a seed commitment costs nothing.

**Expect to be wrong, and look.** My best finding came from a prediction that failed.

These lessons travel beyond software. I now teach high school mathematics, and this
problem would make a good classroom project: students can simulate a lottery, compute
expected outcomes for each class year, and argue about what "fair" means using real
numbers.

## Limitations and next steps

- **Synthetic data.** Real tastes, group sizes and room mixes would change the numbers;
  the method would stay the same.
- **Fixed groups.** In the simulation, groups don't change in response to the rules. Real
  students would. For example, the average rule might make some seniors leave younger
  friends out of their groups.
- **Next steps:** a small interactive demo of the draw, and, if a college were
  interested, a test on anonymized historical data.

## Credits

The 2023–24 project was built by a team of four students in Gordon College's senior
capstone sequence (CPS 491/492), for Gordon College Residence Life and Housing. This
redesign uses no code or student data from that project.

The 2026 redesign and simulation code were written with Claude, Anthropic's AI assistant.
The rules and design decisions are mine. The code, tests and full results are in the
[housing-lottery-sim](https://github.com/andrew-wzj/housing-lottery-sim) repository.
