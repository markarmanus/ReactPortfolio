import { AiFillHtml5 } from "react-icons/ai";
import { FaAws, FaReact } from "react-icons/fa";
import { SiJest, SiMongodb } from "react-icons/si";

export const PROJECTS = [
  {
    bulletPoints: [
      "Full Stack app to help you select your next movie",
      "Team project with 4 members",
      "Led the team through a scrum process.",
      "Deployed thorough EC2 instance",
    ],
    title: "MyFlex",
    top: "30%",
    date: "Jun 2020",
    githubLink: "https://github.com/MyFelx/App",
    titleExt: "Lets chose a movie!",
    detail: "Team Project - Jun, 2020",
    technologies: [FaReact, FaAws, SiMongodb, FaReact],
    projectImage: `${process.env.PUBLIC_URL}/Images/Projects/MyFlex.png`,
    projectLink: "http://ec2-3-141-165-79.us-east-2.compute.amazonaws.com:3333/login",
  },
  {
    bulletPoints: [
      "Website that demonstrates the abilities of A*",
      "Dynamic grid size",
      "Dynamic adaptation to environment",
      "Efficient implementation of A*",
      "All Animations are done through CSS/JS",
    ],
    title: "Run Chicken",
    top: "30%",
    githubLink: "https://github.com/markarmanus/runChicken",
    titleExt: "Can you catch it",
    date: "Nov 2019",
    detail: "A* AI - Nov, 2019",
    technologies: [FaReact],
    projectImage: `${process.env.PUBLIC_URL}/Images/Projects/RunChicken.png`,
    projectLink: "https://markarmanus.github.io/runChicken/",
  },
  {
    bulletPoints: [
      "An application meant to help student understand a variety of sorting algorithms",
      "Easily add more sorting algorithm with automatic visualization",
      "Shows the strength of react if well designed",
    ],
    title: "Sort-Magic",
    top: "30%",
    githubLink: "https://github.com/markarmanus/Sorting-Visualizer",
    date: "Oct 2019",
    titleExt: "Learn Sorting Algorithms",
    detail: "Sorting Visualizer - Oct, 2019",
    technologies: [FaReact],
    projectImage: `${process.env.PUBLIC_URL}/Images/Projects/SortingVisualizer.png`,
    projectLink: "https://markarmanus.github.io/Sorting-Visualizer/",
  },
  {
    bulletPoints: [
      "A game made through React to explore the capabilities and limitation of the technology",
      "Live Help Me! feature",
    ],
    title: "Mathc.Line",
    top: "30%",
    githubLink: "https://github.com/markarmanus/match.line",
    titleExt: "Challenge Your Memory Skills",
    detail: "Puzzle Game - Nov, 2017",
    date: "Nov 2017",
    technologies: [FaReact],
    projectImage: `${process.env.PUBLIC_URL}/Images/Projects/MatchLine.png`,
    projectLink: "https://markarmanus.github.io/match.line/",
  },
];
