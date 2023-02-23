import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import AppLayout from "../layouts/AppLayout";

type Props = {};

const PageRouter = (props: Props) => {
  return (
    <>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppLayout>
    </>
  );
};

export default PageRouter;
