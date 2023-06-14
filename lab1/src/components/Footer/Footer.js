import React from "react";
import "./Footer.css";
import { FaCanadianMapleLeaf } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className="footer">
        2023{" "}
        <span>
          ©ITI
          <FaCanadianMapleLeaf />
        </span>
        All Right Reserved
      </div>
    </>
  );
}
