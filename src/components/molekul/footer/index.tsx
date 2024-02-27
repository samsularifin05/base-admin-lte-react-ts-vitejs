import { memo } from "react";

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="float-right d-none d-sm-block">
          <b>Version</b> 3.2.0
        </div>
        <strong>
          Copyright © 2014-2021 AdminLTE.io. All rights reserved.
        </strong>{" "}
      </footer>
      <aside className="control-sidebar control-sidebar-dark"></aside>
    </>
  );
};

export default memo(Footer);
