import { Outlet } from "react-router";
import "../App.css";
export const Layout = () => {
  return (
    <div className="layout">
      <Outlet/>
    </div>
  );
};
