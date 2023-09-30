import { Suspense } from "react";
import css from "./Layout.module.css";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = ({ children }) => {
  return (
  <>
    
    <main className={css.container}>
      {/* {children} */}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  </>
  )
};
