import React, { FC } from "react";

interface ResponsiveGridProps {
  children: React.ReactNode;
}

const ResponsiveGrid: FC<ResponsiveGridProps> = ({ children }) => {
  return <div className="grid-wrapper">{children}</div>;
};

export default ResponsiveGrid;
