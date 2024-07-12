import React from "react";
import "./MiniNavbar.scss";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Filter_ByBody from "./Filter_ByBody";

const Mini_Nav_Studi = () => {
  return (
    <div className="miniNav">
      <div className="filter">
        <div>
           <Filter_ByBody />
        </div>
      </div>
    </div>
  );
};

export default Mini_Nav_Studi;