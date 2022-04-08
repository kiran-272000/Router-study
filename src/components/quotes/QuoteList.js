import { Fragment } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortedQuotes = (isAscending, quotes) => {
  return quotes.sort((a, b) => {
    if (isAscending) {
      return a.author > b.author ? 1 : -1;
    } else {
      return a.author < b.author ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  // console.log(`location ${location.pathname}`);
  const match = useRouteMatch();
  // console.log(`match ${match.path}`);

  const queryParams = new URLSearchParams(location.search);
  const isSortingAcesnding = queryParams.get("sort") === "asc";

  const sortedquotes = sortedQuotes(isSortingAcesnding, props.quotes);
  const changeSortHandler = () => {
    history.push(`${match.path}/?sort=${!isSortingAcesnding ? "asc" : "dec"}`);

    // history.push(
    //   `${location.pathname}?sort=${!isSortingAcesnding ? "asc" : "dec"}`
    // );

    // history.push({
    //   pathname: location.pathname,
    //   search: `?sort=${!isSortingAcesnding ? "asc" : "dec"}`,
    // });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortHandler}>
          Sort {isSortingAcesnding ? `Desending` : `Ascending`}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedquotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
