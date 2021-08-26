interface IButtonProps {
  id: string;
  isLink?: string;
  isImage?: boolean;
  content: string;
  color: string;
  onClick?: () => void;
}

export type {
  IButtonProps,
}