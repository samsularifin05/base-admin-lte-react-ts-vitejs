import { memo } from "react";
import HeaderContent from "./HeaderContent";

interface Props {
  headerContent?: boolean;
  title?: string;
  menu?: string;
  submenu?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  scroll?: boolean;
}
const PanelContent: React.FC<Props> = function (props) {
  const { headerContent, title, menu, submenu, children } = props;
  return (
    <div>
      {headerContent && (
        <HeaderContent title={title} menu={menu} submenu={submenu} />
      )}
      <section className="content">
        <div className="container-fluid">{children}</div>
      </section>
    </div>
  );
};

export default memo(PanelContent);
