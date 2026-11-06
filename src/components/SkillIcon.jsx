import {
  Binary,
  Boxes,
  Code2,
  Database,
  MonitorCog,
  Network,
  Webhook,
} from "lucide-react";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiBootstrap,
  SiC,
  SiCplusplus,
  SiCss,
  SiEjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinuxmint,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiTailwindcss,
} from "react-icons/si";

const skillIcons = {
  Java: { Icon: FaJava, color: "#f89820" },
  "C++": { Icon: SiCplusplus, color: "#00599c" },
  C: { Icon: SiC, color: "#a8b9cc" },
  Python: { Icon: SiPython, color: "#3776ab" },
  JavaScript: { Icon: SiJavascript, color: "#f7df1e" },
  SQL: { Icon: Database, color: "#60a5fa" },
  HTML: { Icon: SiHtml5, color: "#e34f26" },
  CSS: { Icon: SiCss, color: "#663399" },
  Bootstrap: { Icon: SiBootstrap, color: "#7952b3" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06b6d4" },
  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  "Express.js": { Icon: SiExpress, color: "#e2e8f0" },
  EJS: { Icon: SiEjs, color: "#b4ca65" },
  "REST APIs": { Icon: Webhook, color: "#22c55e" },
  MongoDB: { Icon: SiMongodb, color: "#47a248" },
  MySQL: { Icon: SiMysql, color: "#4479a1" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169e1" },
  Git: { Icon: SiGit, color: "#f05032" },
  GitHub: { Icon: SiGithub, color: "#e8eefc" },
  "VS Code": { Icon: VscVscode, color: "#007acc" },
  "Linux Mint": { Icon: SiLinuxmint, color: "#87cf3e" },
  DSA: { Icon: Binary, color: "#60a5fa" },
  DBMS: { Icon: Database, color: "#a78bfa" },
  OOP: { Icon: Boxes, color: "#fbbf24" },
  "Operating Systems": { Icon: MonitorCog, color: "#22d3ee" },
  "Computer Networks": { Icon: Network, color: "#fb7185" },
};

export function getSkillMeta(skill) {
  return skillIcons[skill] ?? { Icon: Code2, color: "#60a5fa" };
}

export default function SkillIcon({ skill, className = "" }) {
  const { Icon } = getSkillMeta(skill);
  return <Icon className={className} aria-hidden="true" />;
}
