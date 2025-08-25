import React from "react";
import cssImg from "../../assets/icons/css.png";
import javascriptImg from "../../assets/icons/javascript.png";
import reactImg from "../../assets/icons/react.png";
import sassImg from "../../assets/icons/sass.png";
import tailwindImg from "../../assets/icons/tailwind.png";
import bootstrapImg from "../../assets/icons/bootstrap.png";
import firebaseImg from "../../assets/icons/firebase.png";
import gitImg from "../../assets/icons/git.png";
import githubImg from "../../assets/icons/github.png";
import visualImg from "../../assets/icons/vscode.png";
import illustratorImg from "../../assets/icons/adobe-illustrator-icon.png";
import indesignImg from "../../assets/icons/indesign-icon.png";
import photoshopImg from "../../assets/icons/adobe-photoshop-icon.png";
import copilotImg from "../../assets/icons/brand-github-copilot.svg";
import chatgptImg from "../../assets/icons/chatgpt-icon.png";
import mongodbImg from "../../assets/icons/mongodb.png";
import postgresqlImg from "../../assets/icons/postgresql.png";
import prismaImg from "../../assets/icons/prisma.png";
import nodejsImg from "../../assets/icons/nodejs.png";
import expressjsImg from "../../assets/icons/express.png";
import shadcnImg from "../../assets/icons/shadcnui.png";
import typescriptImg from "../../assets/icons/typescript.png";
import playwrightImg from "../../assets/icons/Playwrite.png";

import "../../App.css";
import "./skills.styles.css";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">
          <span>Skills</span>
        </h2>
        <div className="skills-content">
          <div className="column left">
            <h3 className="text">Frontend Development</h3>
            <img
              className="tech-icons"
              src={cssImg}
              alt="css3"
              title="CSS3"
              loading="lazy"
            />
            <img
              className="tech-icons"
              src={javascriptImg}
              alt="javascript"
              title="JavaScript"
              loading="lazy"
            />
            <img
              className="tech-icons"
              src={reactImg}
              alt="react"
              title="React"
              loading="lazy"
            />
            <img
              className="tech-icons"
              src={sassImg}
              alt="sass"
              title="SASS"
              loading="lazy"
            />
            <img
              className="tech-icons"
              src={tailwindImg}
              alt="tailwind"
              title="Tailwind CSS"
              loading="lazy"
            />
            <img
              className="tech-icons"
              src={bootstrapImg}
              alt="bootstrap"
              title="Bootstrap"
              loading="lazy"
            />
            <img
              className="tech-icons"
              src={shadcnImg}
              alt="shadcn"
              title="Shadcn"
              loading="lazy"
            />
            <img
              className="tech-icons"
              src={typescriptImg}
              alt="typescript"
              title="TypeScript"
              loading="lazy"
            />
            <img
              className="tech-icons"
              src={playwrightImg}
              alt="playwright"
              title="Playwright"
              loading="lazy"
            />
          </div>
          <div className="column center">
            <h3 className="text">Backend Development</h3>
            <img
              className="tech-icons"
              src={firebaseImg}
              alt="firebase"
              title="Firebase"
              loading="lazy"
            />
            <img
              className="tech-icons"
              src={mongodbImg}
              alt="mongodb"
              title="MongoDB"
              loading="lazy"
            />
            <img
              className="tech-icons"
              src={postgresqlImg}
              alt="postgresql"
              title="PostgresSQL"
              loading="lazy"
            />
            <img
              className="tech-icons"
              src={prismaImg}
              alt="prisma"
              title="Prisma"
              loading="lazy"
            />
            <img
              className="tech-icons"
              src={nodejsImg}
              alt="nodejs"
              title="NodeJS"
              loading="lazy"
            />
            <img
              className="tech-icons"
              src={expressjsImg}
              alt="expressjs"
              title="ExpressJS"
              loading="lazy"
            />
            <img
              className="tech-icons"
              src={typescriptImg}
              alt="typescript"
              title="TypeScript"
              loading="lazy"
            />
          </div>
          <div className="column right">
            <h3 className="text">Dev Tools & Others</h3>
            <img
              className="tech-icons"
              src={gitImg}
              alt="git"
              title="Git"
              loading="lazy"
            />
            <img
              className="tech-icons"
              src={githubImg}
              alt="github"
              title="Github"
              loading="lazy"
            />
            <img
              className="tech-icons"
              src={visualImg}
              alt="visual studio"
              title="Visual Studio"
              loading="lazy"
            />
            <img
              className="tech-icons"
              src={illustratorImg}
              alt="illustrator"
              title="Illustrator"
              loading="lazy"
            />
            <img
              className="tech-icons"
              src={indesignImg}
              alt="indesign"
              title="InDesign"
              loading="lazy"
            />
            <img
              className="tech-icons"
              src={photoshopImg}
              alt="photoshop"
              title="Photoshop"
              loading="lazy"
            />
            <img
              className="tech-icons"
              src={copilotImg}
              alt="github copilot"
              title="Github Copilot"
              loading="lazy"
            />
            <img
              className="tech-icons"
              src={chatgptImg}
              alt="chatgpt"
              title="ChatGPT"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
