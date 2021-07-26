import { Redirect, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import Test from "./components/Test";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className={styles.App}>
        <h1>headline main</h1>

        <Switch>
          <Route path="/" exact>
            <Redirect to="/dex"></Redirect>
          </Route>
          <Route path="/dex" exact>
            <Test></Test>
          </Route>
          <Route path="/dex/:pokeCode" exact>
            <Test></Test>
          </Route>

          <Route path="*" exact>
            <Redirect to="/dex"></Redirect>
          </Route>
        </Switch>
      </div>
    </ApolloProvider>
  );
}

export default App;
