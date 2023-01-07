// React and Router Dependencies
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Containers
import Layout from "../containers/Layout";
// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import PasswordRecovery from "../pages/PasswordRecovery";
import SendEmail from "../pages/SendEmail";
import NewPassword from "../pages/NewPassword";
import MyAccount from "../pages/MyAccount";
import CreateAccount from "../pages/CreateAccount";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import NotFound from "../pages/NotFound";
// Styles
import "../styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/password-recovery" component={PasswordRecovery} />
          <Route exact path="/send-email" component={SendEmail} />
          <Route exact path="/new-password" component={NewPassword} />
          <Route exact path="/my-account" component={MyAccount} />
          <Route exact path="/create-account" component={CreateAccount} />
          {/* Checkout no funciona */}
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/orders" component={Orders} />
          <Route path="#" component={NotFound} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
