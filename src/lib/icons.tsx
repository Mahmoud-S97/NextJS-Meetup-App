import {
  Home,
  User,
  Settings,
  ArrowRight,
  ArrowLeft,
  Menu,
  IterationCw,
  type LucideIcon,
} from "lucide-react";

export const icons = {
  home: Home,
  user: User,
  settings: Settings,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  menu: Menu,
  iterationCw: IterationCw
};

export type IconName = keyof typeof icons;
export type IconType = LucideIcon;
