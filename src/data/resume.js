// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Zhijie Wang',
  nameZh: '王志杰',
  role: 'Educator & Software Engineer',
  tagline:
    'I teach math, run a STEM club, and build software, and I help students learn to think for themselves while AI is everywhere.',
  location: 'New Hampshire, USA',
  links: [
    { label: 'Email', href: 'mailto:aj0726zjw@gmail.com', text: 'aj0726zjw@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wonderjie', text: 'in/wonderjie' },
    { label: 'GitHub', href: 'https://github.com/andrew-wzj', text: 'andrew-wzj' },
  ],
}

export const about = [
  'I studied Computer Science and Mathematics at Gordon College, and I now teach full time. At Dublin Christian Academy I teach Calculus and Algebra II to seniors, coach SAT Math, and lead a STEM club where students learn about AI and design board games.',
  'Before teaching full time, I built full-stack and backend systems, from a college housing lottery platform to an open-source job scheduler written in Go. Coding and teaching have the same core for me: break a hard problem into steps someone can actually take, and stay with them while they work through it.',
]

export const experience = [
  {
    group: 'Teaching',
    items: [
      {
        title: 'Academic Support · Math Teacher',
        org: 'Dublin Christian Academy',
        place: 'Dublin, NH',
        dates: 'Jan 2026 – Present',
        current: true,
        bullets: [
          'Teach Calculus and Algebra II to 12th-grade students.',
          'Coach SAT Math preparation, focusing on test strategy and conceptual fluency.',
          'Lead the STEM Club. Units include "Thinking with Information & AI", where students verify claims, test AI output and decide which thinking should stay their own, and board game design and playtesting.',
          'Lead conversations with students and faculty about how learning and teaching change in the age of AI.',
        ],
      },
      {
        title: 'Online Math & Economics Instructor (Volunteer)',
        org: 'Program for Left-Behind Children in Rural China',
        place: 'Remote',
        dates: 'Sep 2022 – May 2025',
        bullets: [
          'Designed and taught bi-weekly online lessons for upper-primary and middle school students.',
          'Used visuals and stories to build interest in mathematical thinking and real-life economics.',
          'Built student confidence and promoted digital equity through patient, encouraging instruction.',
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
          'Wrote beginner guides and Scratch labs for STEM Day, introducing 50–100 elementary students to computing each year.',
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
      'A 12-session STEM Club unit for high schoolers. Students test viral claims, compare their own plans with AI-generated ones, find hidden mistakes in AI answers and decide which steps should stay human.',
    tags: ['Curriculum', 'AI literacy', 'Project-based'],
  },
  {
    name: 'Board Game Design Lab',
    icon: 'die',
    dates: '2026',
    summary:
      'A STEM Club project where students design their own board games, then playtest and revise them. They practice rules-as-systems thinking, probability and giving feedback to each other.',
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
