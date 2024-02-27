import {
  AppDispatch,
  themesActions,
  useAppSelector,
  utilityActions,
} from "@/reduxStore";
import {
  Navbar,
  Nav,
  NavDropdown,
  Dropdown,
  useDispatch,
  removeItem,
} from "@/utils";
import { memo, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useAppSelector((state) => state.theme);

  const memoizedHandleToggleMenuSidebar = useMemo(() => {
    return () => {
      dispatch(themesActions.setSidebarToggle(!theme.getSidebarToggle));
    };
  }, [dispatch, theme.getSidebarToggle]); // Re-create only when dependencies change

  const navigate = useNavigate();
  const logout = () => {
    dispatch(utilityActions.setLoading({ screen: true }));
    removeItem("userdata");
    setTimeout(() => {
      navigate("/login-admin");
      dispatch(utilityActions.stopLoading());
      dispatch(utilityActions.isLogin(false));
    }, 1000);
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
              onClick={memoizedHandleToggleMenuSidebar}
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
            <Dropdown.Item href="#" onClick={logout}>
              Logout
            </Dropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default memo(Header);
