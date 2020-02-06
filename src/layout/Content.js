import React from "react"
import List from "../components/List";

export default function Content({ data }) {
  return(
    <List items={ data } />
  );
}