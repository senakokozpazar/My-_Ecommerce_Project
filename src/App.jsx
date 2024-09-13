import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PageContent from "./layout/PageContent";
import ShopPage from "./pages/ShopPage/ShopPage";
import ProductDetailPage from "./pages/ProductPage/ProductDetailPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import SignUp from "./pages/SignUpPage/SignUp";
import Login from "./pages/LoginPage/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { autoLogin } from "./redux/clientSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

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
        <Route path="/product/:id" exact>
          <PageContent>
            <ProductDetailPage />
          </PageContent>
        </Route>
        <Route path="/contact">
          <PageContent>
            <ContactPage />
          </PageContent>
        </Route>
        <Route path="/team">
          <PageContent>
            <TeamPage />
          </PageContent>
        </Route>
        <Route path="/aboutus">
          <PageContent>
            <AboutUsPage />
          </PageContent>
        </Route>
        <Route path="/register">
          <PageContent>
            <SignUp />
          </PageContent>
        </Route>
        <Route path="/login">
          <PageContent>
            <Login />
          </PageContent>
        </Route>
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;
