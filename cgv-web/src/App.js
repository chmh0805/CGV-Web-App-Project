import { Route } from "react-router";
import "./App.css";
import Header from "./components/Header";
import GuestLogin from "./pages/GuestLogin";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Header />
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" exact={true} component={Login} />
      <Route path="/guest/login" exact={true} component={GuestLogin} />
    </>
  );
}

export default App;
