import platformerGameImage from "../../assets/platformerGame.png";
import textEditorImage from "../../assets/textEditor.png";
import levelEditorImage from "../../assets/levelEditor.png";
import GCMSImage from "../../assets/GCMS.png";

export const projectData = [
  {
    image: textEditorImage,
    title: "Text Editor",
    description: "A simple Rich Text Editor",
    technologiesArr: ["ReactJS", "HTML5", "CSS3", "JavaScript"],
    demoLink: "https://text-editor-gocra.vercel.app/",
    codeLink: "https://github.com/Gocra/Text-Editor",
  },
  {
    image: GCMSImage,
    title: "GCMS",
    description: "A home page for a content management system service",
    technologiesArr: ["ReactJS", "HTML5", "SCSS", "JavaScript"],
    demoLink: "https://cms-gocra.vercel.app/",
    codeLink: "https://github.com/Gocra/CMS",
  },
  {
    image: platformerGameImage,
    title: "Platformer Game",
    description: "A simple 2d platformer game",
    technologiesArr: ["Python", "Pygame", "JSON"],
    demoLink: "https://gocra.itch.io/cs-platformer-game",
    codeLink: "https://github.com/Gocra/CS-Platformer-Game",
  },
  {
    image: levelEditorImage,
    title: "Level Editor",
    description: "A 2d level editor for my platformer game",
    technologiesArr: ["Python", "Pygame", "JSON"],
    demoLink: "https://gocra.itch.io/cs-level-editor",
    codeLink: "https://github.com/Gocra/CS-Level-Editor",
  },
];
