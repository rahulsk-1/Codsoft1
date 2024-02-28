import projectOne from "../assets/project-1.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Fake News Detection Website",
    image: projectOne,
    description: (
      <>
        <p>
          This website is developed to provide functionality of fake news detection using ML model. I have worked in team of 4 to build this web. Firebase and flask are used as backend technologies.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
  2: {
    title: "Restaurant Website",
    image: projectThree,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
};

export default projects;
