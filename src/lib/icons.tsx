import {
  Home,
  User,
  Settings,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  Upload,
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
  arrowUp: ArrowUp,
  upload: Upload,
  menu: Menu,
  iterationCw: IterationCw
};

export type IconName = keyof typeof icons;
export type IconType = LucideIcon;
