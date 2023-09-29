/* eslint-disable react-refresh/only-export-components */
import { Link, withRouter } from "react-router-dom";
import { PanelContent } from "../../components";

function PageNotFound() {
  return (
    <PanelContent headerContent>
      <div className="error-page container" style={{ marginTop: "15%" }}>
        <h2 className="headline text-warning"> 404</h2>
        <div className="error-content">
          <h3>
            <i className="fas fa-exclamation-triangle text-warning" /> Oops!
            Page not found.
          </h3>
          <p>
            We could not find the page you were looking for. Meanwhile, you may{" "}
            <Link to="/dashboard">return to dashboard</Link> or try using the
            search form.
          </p>
        </div>
      </div>
    </PanelContent>
  );
}

// export default PageNotFound;
export default withRouter(PageNotFound);
