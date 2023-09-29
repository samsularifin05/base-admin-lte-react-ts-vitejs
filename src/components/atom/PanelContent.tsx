import HeaderContent from "./HeaderContent";

interface Props {
  headerContent?: boolean;
  title?: string;
  menu?: string;
  submenu?: string;
  children?: React.ReactNode;
}
const PanelContent: React.FC<Props> = function (props) {
  return (
    <div className="content-wrapper">
      {props.headerContent && (
        <HeaderContent
          title={props.title}
          menu={props.menu}
          submenu={props.submenu}
        />
      )}
      <section className="content">
        <div className="container-fluid">{props.children}</div>
      </section>
    </div>
  );
};

export default PanelContent;
