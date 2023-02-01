import React from "react";
import SubHeader from "./subheader";
import { useSelector } from "react-redux";

export default function Header() {

  const { status } = useSelector(state => state.reducer).toJS()

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
