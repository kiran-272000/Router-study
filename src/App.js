import { Redirect, Route, Switch } from "react-router-dom";
import Allquotes from "./Pages/Allquotes";
import QuoteDetail from "./Pages/QuoteDetail";
import NewQuote from "./Pages/NewQuote";
import Layout from "./components/layout/Layout";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route exact path="/quotes">
          <Allquotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
