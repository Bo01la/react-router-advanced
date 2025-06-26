import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

export default function Rootlayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
