import React from "react";
import Navbar from "../components/Navbar/Navbar";

type Props = {
  children: any;
};

const AppLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default AppLayout;
