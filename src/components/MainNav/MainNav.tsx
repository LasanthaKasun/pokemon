import React, { FC } from "react";

interface MainNavProps {
  title: string;
  subTitle: string;
}

const MainNav: FC<MainNavProps> = ({ title, subTitle }) => {
  return (
    <div className="main-nav-wrapper">
        <div className="main-nav-title">{title}</div>
        <div className="main-nav-sub-title">{subTitle}</div>
    </div>
  );
};

export default MainNav;
