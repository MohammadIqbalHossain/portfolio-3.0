export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export interface TooltipProps {
  children: React.ReactNode;
  content: string;
  placement?: "bottom" | "right";
}
