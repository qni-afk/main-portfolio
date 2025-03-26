import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.jpg";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Evochka Site",
    image: projectOne,
    description: (
      <>
        <p>
          Love WebSites
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://evochka-ruby.vercel.app/gallery",
  },
  2: {
    title: "Coming soon...",
    image:projectTwo ,
    description: (
      <>
        <p>
          Coming soon...
        </p>
      </>
    ),
    github: "#",
    demo: "#",
  },
  3: {
    title: "Coming soon...",
    image: projectThree,
    description: (
      <>
        <p>
          Coming soon...
        </p>
      </>
    ),
    github: "#",
    demo: "#",
  },
};

export default projects;
