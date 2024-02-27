import { memo } from "react";

interface ColProps {
  className?: string;
  children?: React.ReactNode;
  size: string;
}

const Col: React.FC<ColProps> = (props) => {
  const className = `col-${props.size || "4"} ${props.className || ""}`;
  return <div className={className}>{props.children}</div>;
};

export default memo(Col);
