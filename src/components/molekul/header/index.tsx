import { AppDispatch, themesActions, useAppSelector } from "@/reduxStore";
import {
  Navbar,
  Nav,
  NavDropdown,
  Dropdown,
  useDispatch,
  withRouter,
  RouteComponentProps,
  removeItem,
} from "@/utils";

type HeaderProps = RouteComponentProps;

const Header: React.FC<HeaderProps> = (props) => {
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useDispatch<AppDispatch>();

  const handleToggleMenuSidebar = () => {
    dispatch(themesActions.setSidebarToggle(!theme.getSidebarToggle));
  };
  const logout = () => {
    removeItem("userdata");
    setTimeout(() => {
      props.history.push("/");
      window.location.reload();
    }, 300);
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="main-header navbar navbar-expand navbar-white navbar-light"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto navbar-nav">
          <Nav.Link href="#" className="nav-item">
            <div
              onClick={handleToggleMenuSidebar}
              data-widget="pushmenu"
              aria-label="Menu Hide Bar"
              role="button"
            >
              <i className="fas fa-bars" />
            </div>
          </Nav.Link>
        </Nav>
        <Nav className="navbar-nav ml-auto">
          <NavDropdown
            className=" dropdown-menu-right"
            title={
              <img
                src={"https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg"}
                alt="User Image"
                className="img-size-50 img-circle"
              />
            }
            id="collasible-nav-dropdown"
          >
            <Dropdown.Item href="#">Ubah Password</Dropdown.Item>
            <Dropdown.Item href="#" onClick={() => logout()}>
              Logout
            </Dropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
