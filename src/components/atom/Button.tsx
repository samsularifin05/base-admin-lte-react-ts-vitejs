import { memo } from "react";

interface props {
  loading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  color: string;
  block?: boolean;
  textLoading?: string;
  onClick?: () => void;
  title?: string;
  icon?: string;
  disabled?: boolean;
}
const Button: React.FC<props> = (props) => {
  const {
    title,
    icon,
    onClick,
    textLoading,
    loading,
    disabled,
    type,
    color,
    block,
  } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${color} ${block === undefined ? "" : "btn-block"}`}
    >
      {loading ? (
        <>
          <i className="fas fa-spinner fa-spin" /> &nbsp; {textLoading}
        </>
      ) : (
        title || <i className={`fas ${icon}`} />
      )}
    </button>
  );
};

export default memo(Button);
