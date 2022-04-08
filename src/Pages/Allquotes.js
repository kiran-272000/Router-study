import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_DATA = [
  {
    id: "q1",
    author: "kiran",
    text: "learning react is fun",
  },
  {
    id: "q2",
    author: "gokul",
    text: "learning react is great",
  },
  {
    id: "q3",
    author: "jeeva",
    text: "learning react is hard",
  },
];

const Allquotes = () => {
  return (
    <>
      <QuoteList quotes={DUMMY_DATA} />
    </>
  );
};

export default Allquotes;
