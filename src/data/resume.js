// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Zhijie Wang',
  nameZh: '王志杰',
  role: 'Educator & Software Engineer',
  tagline:
    'Mathematics educator and software engineer. B.S. in Computer Science and Mathematics, Gordon College.',
  location: 'New Hampshire, USA',
  links: [
    { label: 'Email', href: 'mailto:aj0726zjw@gmail.com', text: 'aj0726zjw@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wonderjie', text: 'in/wonderjie' },
    { label: 'GitHub', href: 'https://github.com/andrew-wzj', text: 'andrew-wzj' },
  ],
}

export const about = [
  'I graduated from Gordon College in December 2024 with a B.S. in Computer Science and Mathematics (double major). Since January 2026, I have served in Academic Support at Dublin Christian Academy, where I teach Calculus and Algebra II to 12th-grade students, provide SAT Math preparation, and lead the STEM Club. I also teach science on the iFe Life Aesthetics teaching team, where I hosted a minisymposium on learning in the AI era.',
  'My engineering experience covers full-stack and backend development, including an automated housing lottery platform for Gordon College and grpc-jobworker, an open-source job management system written in Go. In both teaching and engineering, I take the same approach: break complex problems into clear, achievable steps and support people as they work through them.',
]

export const experience = [
  {
    group: 'Teaching',
    items: [
      {
        title: 'Academic Support · Mathematics',
        org: 'Dublin Christian Academy',
        place: 'Dublin, NH',
        dates: 'Jan 2026 – Present',
        current: true,
        bullets: [
          'Teach Calculus and Algebra II to 12th-grade students.',
          'Provide SAT Math preparation covering core concepts and test-taking strategy.',
          'Lead the STEM Club and design project-based units on AI literacy (evaluating sources, verifying AI output and deciding when to rely on AI) and on board game design and playtesting.',
          'Facilitate discussions with students and faculty on adapting learning and teaching practices to the AI era.',
        ],
      },
      {
        title: 'Science Teacher · Teaching Team',
        org: 'iFe Life Aesthetics (iFe 生命美学)',
        place: 'Remote',
        dates: 'Dec 2025 – Present',
        current: true,
        bullets: [
          'Teach science within iFe\'s student-centered "Discover, Develop, Display" framework, which helps each student identify and build on individual strengths.',
          'Hosted "HI-AI: Unseen to Pattern" (Nov 2026), a 90-minute bilingual online minisymposium on learning and personal growth in the AI era, featuring a keynote speaker and several guest speakers.',
          'Led technical operations for the event as Zoom co-host, managing breakout rooms and preparing online resources for participants.',
        ],
      },
      {
        title: 'Online Math & Economics Instructor (Volunteer)',
        org: 'Program for Left-Behind Children in Rural China',
        place: 'Remote',
        dates: 'Sep 2022 – May 2025',
        bullets: [
          'Designed and taught bi-weekly online lessons for upper-primary and middle school students.',
          'Used visual models and real-world examples to teach mathematical reasoning and basic economics.',
          'Supported student confidence and access to learning through consistent, encouraging instruction.',
        ],
      },
      {
        title: 'SAT Math & IELTS Instructor',
        org: 'Hosanna Academy',
        place: 'Gap Year',
        dates: 'Sep 2020 – Jun 2021',
        bullets: [
          'Taught ESL, SAT Math and academic writing to students preparing for international college admissions.',
          'Mentored students in critical thinking, test strategy and college readiness.',
        ],
      },
    ],
  },
  {
    group: 'Engineering',
    items: [
      {
        title: 'Senior Capstone · Automated Housing Lottery System',
        org: 'Gordon College',
        place: 'Wenham, MA',
        dates: 'Sep 2023 – May 2024',
        bullets: [
          'Worked with the housing office to replace a manual assignment workflow with a full-stack platform (React, Node.js, C#, PostgreSQL).',
          'Built data parsing and CSV export tools for administrators, cutting manual processing time by 50%.',
          'Resolved integration and deployment issues for a stable pilot used by 200+ students.',
        ],
      },
      {
        title: 'Software Engineering Intern · Summer Practicum',
        org: 'Gordon College',
        place: 'Wenham, MA',
        dates: 'May 2023 – Aug 2023',
        bullets: [
          'Re-architected front-end components of the course scheduling platform for desktop and mobile.',
          'Shipped "Academic Term Selector" and "Add to Calendar" (Google, Outlook, Apple) features and improved backend API stability.',
          'Supported 1,500+ daily interactions from students registering for classes and faculty publishing schedules.',
        ],
      },
      {
        title: 'Lead Developer · Data Science Club',
        org: 'Gordon College',
        place: 'Wenham, MA',
        dates: 'Sep 2022 – May 2024',
        bullets: [
          'Wrote beginner guides and Scratch labs for the annual STEM Day, introducing 50–100 elementary students to computing each year.',
          'Represented Gordon at the Air Force Cyber Challenge 2022: analyzed network traffic in Wireshark and resolved 4 vulnerabilities.',
        ],
      },
    ],
  },
]

export const projects = [
  {
    name: 'grpc-jobworker',
    icon: 'laptop',
    dates: 'Mar 2025 – Jul 2025',
    summary:
      'A lightweight, open-source distributed job management system. It has a Go backend with gRPC and REST APIs for submitting, monitoring and stopping jobs, and it handles 100+ concurrent tasks. A web dashboard tracks jobs and shows logs in real time.',
    tags: ['Go', 'gRPC', 'REST', 'SQLite', 'JavaScript'],
    href: 'https://github.com/andrew-wzj/grpc-jobworker',
  },
  {
    name: 'Housing Lottery Platform',
    icon: 'heart',
    dates: '2023 – 2024',
    summary:
      'A full-stack platform that automates the college housing assignment workflow for administrators and students.',
    tags: ['React', 'Node.js', 'C#', 'PostgreSQL'],
  },
  {
    name: 'Thinking with Information & AI',
    icon: 'robot',
    dates: 'Fall 2026',
    summary:
      'A 12-session STEM Club unit for high school students. Students verify viral claims, compare their own plans with AI-generated plans, identify errors in AI output and decide which tasks should remain human.',
    tags: ['Curriculum', 'AI literacy', 'Project-based'],
  },
  {
    name: 'Board Game Design Lab',
    icon: 'die',
    dates: '2026',
    summary:
      'A STEM Club project in which students design, playtest and revise original board games, applying systems thinking and probability and practicing structured peer feedback.',
    tags: ['Game design', 'Probability', 'Playtesting'],
  },
]

export const skills = [
  { group: 'Teaching', items: ['Calculus', 'Algebra II', 'SAT Math', 'ESL / IELTS', 'Curriculum design', 'AI literacy'] },
  { group: 'Languages', items: ['Go', 'Python', 'Java', 'C++', 'C#', 'JavaScript', 'SQL'] },
  { group: 'Frameworks & Tools', items: ['React', 'Node.js', 'gRPC', 'REST', 'Docker', 'Git', 'Shell'] },
  { group: 'Data', items: ['PostgreSQL', 'SQLite'] },
  { group: 'Spoken', items: ['English', 'Mandarin Chinese'] },
]

export const education = [
  {
    school: 'Gordon College',
    place: 'Wenham, MA',
    degree: 'B.S. Computer Science & Mathematics (Double Major)',
    dates: 'Dec 2024',
  },
]
