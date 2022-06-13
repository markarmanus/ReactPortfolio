import { AiFillHtml5 } from "react-icons/ai";
import { FaAws, FaReact } from "react-icons/fa";
import { SiJest, SiMongodb } from "react-icons/si";
const generateTechIconLinks = (techs) => {
  return techs.map((tech) => {
    return `${process.env.PUBLIC_URL}/Images/Technologies/${tech}.png`;
  });
};
export const PROJECTS = [
  {
    title: "Sept 2019",
    bulletPoints: ["Lead Team to do things and thingsn and things", "Lead Team to do things and thingsn and things"],
    title: "MY FLEX",
    top: "30%",
    date: "Sept 2016",
    githubLink: "https://github.com",
    titleExt: " React Full Stack App",
    detail: "Team Project - Jan 2018",
    technologies: [FaReact, FaAws, AiFillHtml5, SiMongodb, SiJest, FaReact, FaAws, AiFillHtml5, SiMongodb, SiJest],
    projectImage: `${process.env.PUBLIC_URL}/Images/Projects/SortingVisualizer.png`,
    projectLink: "",
  },
  {
    title: "Sept 2019",
    bulletPoints: ["Lead Team to do things and thingsn and things", "Lead Team to do things and thingsn and things"],
    title: "MY FLEX",
    top: "30%",
    githubLink: "https://github.com",
    titleExt: " React Full Stack App",
    date: "Sept 2016",
    detail: "Team Project - Jan 2018",
    technologies: [FaReact, FaAws, AiFillHtml5, SiMongodb, SiJest, FaReact, FaAws, AiFillHtml5, SiMongodb, SiJest],
    projectImage: `${process.env.PUBLIC_URL}/Images/Projects/RunChicken.png`,
    projectLink: "",
  },
  {
    title: "Sept 2019",
    bulletPoints: ["Lead Team to do things and thingsn and things", "Lead Team to do things and thingsn and things"],
    title: "MY FLEX",
    top: "30%",
    githubLink: "https://github.com",
    date: "Sept 2016",
    titleExt: " React Full Stack App",
    detail: "Team Project - Jan 2018",
    technologies: [FaReact, FaAws, AiFillHtml5, SiMongodb, SiJest, FaReact, FaAws, AiFillHtml5, SiMongodb, SiJest],
    projectImage: `${process.env.PUBLIC_URL}/Images/Projects/SortingVisualizer.png`,
    projectLink: "",
  },
  {
    title: "Sept 2019",
    bulletPoints: ["Lead Team to do things and thingsn and things", "Lead Team to do things and thingsn and things"],
    title: "MY FLEX",
    top: "30%",
    githubLink: "https://github.com",
    titleExt: " React Full Stack App",
    detail: "Team Project - Jan 2018",
    date: "Sept 2016",
    technologies: [FaReact, FaAws, AiFillHtml5, SiMongodb, SiJest, FaReact, FaAws, AiFillHtml5, SiMongodb, SiJest],
    projectImage: `${process.env.PUBLIC_URL}/Images/Projects/MatchLine.png`,
    projectLink: "",
  },
];
