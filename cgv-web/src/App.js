import { Route } from "react-router";
import "./App.css";
import Header from "./components/Header";
import GuestLogin from "./pages/GuestLogin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import MyCgvHome from "./pages/MyCgvHome";
import Trailler from "./pages/Trailler";
import SupportMain from "./pages/SupportMain";

function App() {
  return (
    <>
      <Header />
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" exact={true} component={Login} />
      <Route path="/guest/login" exact={true} component={GuestLogin} />
      <Route path="/join" exact={true} component={Join} />
      <Route path="/user/mycgv" exact={true} component={MyCgvHome} />
      <Route path="/movies/trailler" exact={true} component={Trailler} />
      <Route path="/support/default" exact={true} component={SupportMain} />
    </>
  );
}

export default App;
