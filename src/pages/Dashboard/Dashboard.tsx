import React from "react";

import { createAnimation, IonIcon, IonRouterOutlet, IonTabs } from "@ionic/react";
import { useLocation, useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
import Account from "./Account";
import Home from "./Home";
import Loan from "./Loan";
import Savings from "./Savings";
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
  { key: "home", label: "HOME", icon: HOME, activeIcon: HOME, path: "/dashboard/home" },
  { key: "loan", label: "LOAN", icon: LOAN, activeIcon: LOAN, path: "/dashboard/loan" },
  { key: "savings", label: "SAVINGS", icon: SAVINGS, activeIcon: SAVINGS, path: "/dashboard/savings" },
  { key: "account", label: "ACCOUNT", icon: ACCOUNT, activeIcon: ACCOUNT, path: "/dashboard/account" },
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

const CustomBottomTabs: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path);
  const leftTabs = tabs.slice(0, 2);
  const rightTabs = tabs.slice(2);

  return (
    <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-50 overflow-visible font-inter">
      {/* Background SVG with Notch */}
      <div className="absolute bottom-0 left-0 right-0 h-[80px] w-full pointer-events-auto">
        <svg viewBox="0 0 375 80" preserveAspectRatio="none" className="h-full w-full drop-shadow-[0_-5px_15px_rgba(0,0,0,0.05)]" fill="white">
          <path
            d="M0,20 
               C0,10 10,0 20,0 
               L110,0 
               C135,0 150,10 155,25 
               C170,60 205,60 220,25 
               C225,10 240,0 265,0 
               L355,0 
               C365,0 375,10 375,20 
               L375,100 
               L0,100 
               Z"
          />
        </svg>
      </div>

      {/* Content Container */}
      <nav className="pointer-events-none relative flex h-24 w-full items-center justify-between px-8 pb-4">
        {/* Left Tabs */}
        <div className="pointer-events-auto flex items-center justify-start w-1/2 gap-10  ">
          {leftTabs.map((tab) => {
            const active = isActive(tab.path);
            return (
              <button key={tab.key} type="button" onClick={() => navigate(tab.path)} className="relative flex flex-col items-center gap-1.5 transition-transform ">
                {active && <div className="absolute -top-3.5 h-0.5 w-8 rounded-full bg-primary" />}
                <TabSvgIcon src={active ? tab.activeIcon : tab.icon} active={active} />
                <span className={`text-[10px] font-bold tracking-tight ${active ? "text-[#a10f08]" : "text-neutral-400"}`}>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Center Floating Button - Absolutely Positioned for perfect centering */}
        <div className="absolute left-1/2 -translate-y-10 -translate-x-1/2 pointer-events-auto flex flex-col items-center">
          <div
            onClick={() => navigate("/dashboard/home")}
            className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_25px_rgba(0,0,0,0.3)] transition-all active:scale-90">
            <IonIcon icon={QR} className="text-[2.3rem]" />
          </div>
        </div>

        {/* Right Tabs */}
        <div className="pointer-events-auto flex items-center justify-end w-1/2 gap-6 ">
          {rightTabs.map((tab) => {
            const active = isActive(tab.path);
            return (
              <button key={tab.key} type="button" onClick={() => navigate(tab.path)} className="relative flex flex-col items-center gap-1.5 transition-transform ">
                {active && <div className="absolute -top-3.5 h-0.5 w-8 rounded-full bg-primary" />}
                <TabSvgIcon src={active ? tab.activeIcon : tab.icon} active={active} />
                <span className={`text-[10px] font-bold tracking-tight ${active ? "text-[#a10f08]" : "text-neutral-400"}`}>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

const Dashboard: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet animation={fadeTransition}>
        <Route exact path="/dashboard" render={() => <Redirect to="/dashboard/home" />} />

        <Route exact path="/dashboard/home" component={Home} />

        <Route exact path="/dashboard/loan" component={Loan} />

        <Route exact path="/dashboard/savings" component={Savings} />

        <Route exact path="/dashboard/account" component={Account} />
      </IonRouterOutlet>

      <CustomBottomTabs />
    </IonTabs>
  );
};

export default Dashboard;
