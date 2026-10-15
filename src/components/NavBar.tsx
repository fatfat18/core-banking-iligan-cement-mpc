import React, { useEffect } from "react";
import { createAnimation, IonIcon, IonRouterOutlet } from "@ionic/react";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "../constants/routes";

import HOME from "/assets/icons/home.svg";
import LOAN from "/assets/icons/loan.svg";
import SAVINGS from "/assets/icons/savings.svg";
import ACCOUNT from "/assets/icons/account.svg";
import QR from "/assets/icons/qr.svg";

interface CustomTabItem {
  key: string;
  label: string;
  icon: string;
  activeIcon: string;
  path: string;
}

const tabs: CustomTabItem[] = [
  { key: "home", label: "HOME", icon: HOME, activeIcon: HOME, path: ROUTES.DASHBOARD_HOME },
  { key: "loan", label: "LOAN", icon: LOAN, activeIcon: LOAN, path: ROUTES.DASHBOARD_LOAN },
  { key: "savings", label: "SAVINGS", icon: SAVINGS, activeIcon: SAVINGS, path: ROUTES.DASHBOARD_SAVINGS },
  { key: "account", label: "ACCOUNT", icon: ACCOUNT, activeIcon: ACCOUNT, path: ROUTES.DASHBOARD_ACCOUNT },
];

const fadeTransition = (_baseEl: HTMLElement, opts: { enteringEl: HTMLElement; leavingEl?: HTMLElement }) => {
  const enteringAnimation = createAnimation().addElement(opts.enteringEl).fromTo("opacity", "0.01", "1");

  const animations = [enteringAnimation];

  if (opts.leavingEl) {
    animations.push(createAnimation().addElement(opts.leavingEl).fromTo("opacity", "1", "0.01"));
  }

  return createAnimation().duration(180).easing("ease-in-out").addAnimation(animations);
};

const TabSvgIcon: React.FC<{ src: string; active: boolean }> = ({ src, active }) => (
  <span
    className={`block h-7 w-7 ${active ? "bg-primary" : "bg-[#767676]"}`}
    style={{
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const NavBar: React.FC = () => {
  const history = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path);
  const leftTabs = tabs.slice(0, 2);
  const rightTabs = tabs.slice(2);

  return (
    <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-50 pt-10 ">
      <nav className="pointer-events-auto relative h-28 flex  w-full  items-center justify-between border border-neutral-200 bg-[#f8f8f8]/98 px-6 pb-2 pt-2 ">
        <div className="flex items-end gap-8">
          {leftTabs.map((tab) => {
            const active = isActive(tab.path);
            return (
              <button key={tab.key} type="button" onClick={() => history.push(tab.path)} className="relative flex min-w-14 flex-col items-center gap-1">
                <span className={`absolute -top-7 h-1 w-14 rounded-full bg-[#a10f08] transition-opacity ${active ? "opacity-100" : "opacity-0"}`} />
                <TabSvgIcon src={active ? tab.activeIcon : tab.icon} active={active} />
                <span className={`text-[11px] mt-2 ${active ? "font-bold text-[#a10f08]" : "font-medium text-neutral-500"}`}>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div
          onClick={() => console.log("QR Clicked")}
          className="-mt-20 flex h-20 w-20 items-center justify-center  bg-linear-to-b rounded-full from-[#b5160d] to-[#8b0a04] text-white shadow-[0_14px_34px_rgba(137,8,0,0.50)] ring-10 ring-[#f8f8f8]">
          <IonIcon icon={QR} className="text-[2.3rem]" />
        </div>

        <div className="flex items-end gap-8">
          {rightTabs.map((tab) => {
            const active = isActive(tab.path);
            return (
              <button key={tab.key} type="button" onClick={() => history.push(tab.path)} className="relative flex min-w-14 flex-col items-center gap-1">
                <span className={`absolute -top-7 h-1 w-14 rounded-full bg-[#a10f08] transition-opacity ${active ? "opacity-100" : "opacity-0"}`} />
                <TabSvgIcon src={active ? tab.activeIcon : tab.icon} active={active} />
                <span className={`text-[11px] mt-2 ${active ? "font-bold text-[#a10f08]" : "font-medium text-neutral-500"}`}>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
