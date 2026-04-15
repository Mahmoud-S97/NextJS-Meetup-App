import {
  Home,
  User,
  Settings,
  ArrowRight,
  Menu,
  type LucideIcon,
} from "lucide-react";

export const icons = {
  home: Home,
  user: User,
  settings: Settings,
  arrowRight: ArrowRight,
  menu: Menu,
};

export type IconName = keyof typeof icons;
export type IconType = LucideIcon;
