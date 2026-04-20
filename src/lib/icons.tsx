import {
  Home,
  User,
  Settings,
  ArrowRight,
  ArrowLeft,
  Menu,
  type LucideIcon,
} from "lucide-react";

export const icons = {
  home: Home,
  user: User,
  settings: Settings,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  menu: Menu,
};

export type IconName = keyof typeof icons;
export type IconType = LucideIcon;
