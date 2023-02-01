import React from "react";
import { useSelector } from "react-redux";

export default function Footer() {

  const { status } = useSelector(state => state.reducer).toJS()

  return <footer>This is the footer - {status}</footer>
}