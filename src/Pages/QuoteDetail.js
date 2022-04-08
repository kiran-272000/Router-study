import React, { Fragment } from "react";
import { Route, useParams, useHistory, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

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

const QuoteDetail = () => {
  const params = useParams();
  const history = useHistory();
  const match = useRouteMatch();

  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <NoQuotesFound />;
  }

  const addCommentsHandler = () => {
    history.push(`${match.url}/comments`);
  };

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.url}`} exact>
        <div className="centered">
          <button className="btn--flat" onClick={addCommentsHandler}>
            Comments
          </button>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
