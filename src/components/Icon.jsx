import {
  BadgeCheck,
  Code2,
  Cpu,
  Database,
  Github,
  Linkedin,
  Monitor,
  Server,
  Terminal,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";

const icons = {
  code: Code2,
  monitor: Monitor,
  server: Server,
  database: Database,
  wrench: Wrench,
  cpu: Cpu,
  users: Users,
  trophy: Trophy,
  badge: BadgeCheck,
  github: Github,
  linkedin: Linkedin,
  terminal: Terminal,
};

export default function Icon({ name, ...props }) {
  const Component = icons[name] ?? Code2;
  return <Component {...props} />;
}
