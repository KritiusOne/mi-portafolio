import SQLServerIcon from "@/components/icons/SQLServerIcon.astro";
import HTMLIcon from "@/components/icons/HTML.astro";
import CssIcon from "@/components/icons/Css.astro";
import Tailwind from "@/components/icons/Tailwind.astro";
import Javascript from "@/components/icons/Javascript.astro";
import React from "@/components/icons/React.astro";
import Typescript from "@/components/icons/Typescript.astro";
import AstroIcon from "@/components/icons/AstroIcon.astro";
import CSharpIcon from "@/components/icons/Csharp.astro";
import DotnetIcon from "@/components/icons/DotnetIcon.astro";
import MongoDBIcon from "@/components/icons/MongoDBIcon.astro";
import ASPDotNetIcon from "@/components/icons/ASPDotNetIcon.astro";
import SassIcon from "@/components/icons/SassIcon.astro";
import GitIcon from "@/components/icons/GitIcon.astro";
import ViteIcon from "@/components/icons/ViteIcon.astro";
import JqueryIcon from "@/components/icons/JqueryIcon.astro";
import MySQLIcon from "@/components/icons/MySQLIcon.astro";
import Nodejs from "@/components/icons/Nodejs.astro";
import Express from "@/components/icons/Express.astro";
import Angular from "@/components/icons/Angular.astro";

export const techStack = {
  bbdd: [
    {
      name: "SQL Server",
      icon: SQLServerIcon,
    },
    {
      name: "MongoDB",
      icon: MongoDBIcon,
    },
    {
      name: "MySQL",
      icon: MySQLIcon,
    },
  ],
  front: [
    {
      name: "HTML5",
      icon: HTMLIcon,
    },
    {
      name: "CSS",
      icon: CssIcon,
    },
    {
      name: "Tailwind CSS",
      icon: Tailwind,
    },
    {
      name: "Sass",
      icon: SassIcon,
    },
    {
      name: "Javascript",
      icon: Javascript,
    },
    {
      name: "Typescript",
      icon: Typescript,
    },
    {
      name: "Jquery",
      icon: JqueryIcon,
    },
    {
      name: "React.js",
      icon: React,
    },
    {
      name: "Astro",
      icon: AstroIcon,
    },
    {
      name: "Angular",
      icon: Angular
    }
  ],
  back: [
    {
      name: "C#",
      icon: CSharpIcon,
    },
    {
      name: ".NET",
      icon: DotnetIcon,
    },
    {
      name: "ASP.NET",
      icon: ASPDotNetIcon,
    },
    {
      name: "Node.js",
      icon: Nodejs
    },
    {
      name: "Express.js",
      icon: Express
    }
  ],
  tools: [
    {
      name: "Git",
      icon: GitIcon,
    },
    {
      name: "Vite",
      icon: ViteIcon,
    },
  ],
};
