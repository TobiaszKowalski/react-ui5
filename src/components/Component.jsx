import React from "react";
import "@ui5/webcomponents-icons/dist/add.js";
import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react"; // ui5 controls
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";
import { useNavigate } from "react-router-dom";
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme'; // for changing theme
import '@ui5/webcomponents/dist/Assets'; // for changing theme
import '@ui5/webcomponents-fiori/dist/Assets'; // only if you are using the ShellBar, Product Switch or the Upload Collection

const Component = (props) => {

  // setTheme("sap_belize");
  const navigate = useNavigate("/detail");
  const handleLogoClick = () => navigate("/")

  return (
    <>
      <ShellBar
        logo={<img src="reactLogo.png" alt="" />}
        onLogoClick={handleLogoClick}
        profile={<Avatar><img src="profilePictureExample.png" alt="" /></Avatar>}
        primaryTitle="Analytics App"
      >
        <ShellBarItem icon="add" text="Add" />
      </ShellBar>
      <Routes>
        <Route path="/home" element={<Home dataset = {props.dataset} />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/" element={<Navigate replace to = "/home" />} />
      </Routes>
    </>
  )
};

export default Component;