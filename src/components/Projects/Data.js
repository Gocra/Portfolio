import platformerGameImage from "../../assets/platformerGame.png";
import textEditorImage from "../../assets/textEditor.png";
import levelEditorImage from "../../assets/levelEditor.png";
import GCMSImage from "../../assets/GCMS.png";
import surfsharkImage from "../../assets/surfshark.PNG";

export const projectData = [
  {
    image: surfsharkImage,
    title: "Surfshark Clone",
    about:
      "I recreated the Surfshark homepage because I liked how clean and professional it is while still having a human feel",
    technologiesArr: ["ReactJS", "HTML5", "CSS3", "JavaScript"],
    demoLink: "https://surfshark-clone.vercel.app/",
    codeLink: "https://github.com/Gocra/surfshark-clone",
  },
  {
    image: textEditorImage,
    title: "Rich Text Editor",
    about:
      "For this project I learned about the JavaScript execCommand function, which made formatting the text simple.",
    technologiesArr: ["ReactJS", "HTML5", "CSS3", "JavaScript"],
    demoLink: "https://text-editor-gocra.vercel.app/",
    codeLink: "https://github.com/Gocra/Text-Editor",
  },
  {
    image: GCMSImage,
    title: "GCMS",
    type: "Home page for a CMS service",
    about:
      "This was my first time using SCSS, it made it much easier to organise my code and was fun to learn.",
    technologiesArr: ["ReactJS", "HTML5", "SCSS", "JavaScript"],
    demoLink: "https://cms-gocra.vercel.app/",
    codeLink: "https://github.com/Gocra/CMS",
  },
  {
    image: platformerGameImage,
    title: "2d Platformer Game",
    about:
      "Building this game gave me insight in to game development. I learned how the sprites are rendered and how they interact with one another, as well as building desktop GUIs.",
    technologiesArr: ["Python", "Pygame", "JSON"],
    demoLink: "https://gocra.itch.io/cs-platformer-game",
    codeLink: "https://github.com/Gocra/CS-Platformer-Game",
  },
  {
    image: levelEditorImage,
    title: "2d Level Editor",
    about:
      "This project was built along side my platformer game to help build levels to play. From this project I learned a lot about 2d graphics and data storage to export my level to my game.",
    technologiesArr: ["Python", "Pygame", "JSON"],
    demoLink: "https://gocra.itch.io/cs-level-editor",
    codeLink: "https://github.com/Gocra/CS-Level-Editor",
  },
];
