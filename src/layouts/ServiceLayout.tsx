import React from "react";
import { Outlet } from "react-router-dom";

function ServiceLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ServiceLayout;
