import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../../UI";
import "./PrimaryLayout.scss";

const PrimaryLayout = ({ className }: { className?: string }) => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    window.screen.availWidth < 1200 && setActive(!active);
  };
  return (
    <main className="primary-layout">
      <Sidebar active={active} handleActive={handleActive} />
      <div className="primary-layout__inner">
        <Header active={active} handleActive={handleActive} />
        <div className="primary-layout__wrapper">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default PrimaryLayout;
