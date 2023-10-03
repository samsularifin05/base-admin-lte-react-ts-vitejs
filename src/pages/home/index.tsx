import { AppDispatch, themesActions } from "@/reduxStore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(themesActions.handleSetPageSidebar(false));
    dispatch(themesActions.handleSetPageHeader(false));
    dispatch(themesActions.handleSetFooter(false));
    return () => {
      dispatch(themesActions.handleSetPageHeader(true));
      dispatch(themesActions.handleSetPageSidebar(true));
      dispatch(themesActions.handleSetFooter(true));
      dispatch(themesActions.handleSetContent(true));
    };
  }, [dispatch]);

  return <div>HAI</div>;
};

export default Home;
