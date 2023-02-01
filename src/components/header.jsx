import React from "react";
import SubHeader from "./subheader";

export default function Header({ status }) {
  return (
    <header>
      This is the header{" "}
      {status === "IN_PROGRESS" && status !== "UNINIT"
        ? "Loading"
        : "Component"}
        <br />
    <SubHeader status={status} />
    </header>
  );
}
