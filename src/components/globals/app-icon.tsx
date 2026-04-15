import { icons, type IconName } from "@/lib/icons";
import { classes } from "@/utils/classes";

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
};

const Icon = ({ name, size = 22, className, strokeWidth = 2 }: IconProps) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) return null;

  return (
    <LucideIcon
      size={size}
      strokeWidth={strokeWidth}
      className={classes("shrink-0", className)}
    />
  );
};

export default Icon;
