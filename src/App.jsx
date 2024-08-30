import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageContent from "./layout/PageContent";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <PageContent>
            <HomePage />
          </PageContent>
        </Route>
        <Route path="/shop">
          <PageContent>
            <ShopPage />
          </PageContent>
        </Route>
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
