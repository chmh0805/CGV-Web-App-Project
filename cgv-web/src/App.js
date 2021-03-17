import { Route } from "react-router";
import "./App.css";
import FloatingBanner from "./components/FloatingBanner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieDetail from "./pages/MovieDetail";
import GuestLogin from "./pages/GuestLogin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import MyCgvHome from "./pages/MyCgvHome";
import Trailler from "./pages/Trailler";
import SupportMain from "./pages/SupportMain";
import MovieFinder from "./pages/MovieFinder";
import MovieChart from "./pages/MovieChart";
import SupportFaqMain from "./pages/SupportFaqMain";
import SupportNewsMain from "./pages/SupportNewsMain";
import SupportQnaMain from "./pages/SupportQnaMain";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" exact={true} component={Login} />
      <Route path="/guest/login" exact={true} component={GuestLogin} />
      <Route path="/join" exact={true} component={Join} />
      <Route path="/user/mycgv" exact={true} component={MyCgvHome} />
      <Route path="/movies" exact={true} component={MovieChart} />
      <Route path="/movies/trailler" exact={true} component={Trailler} />
      <Route path="/movies/finder" exact={true} component={MovieFinder} />
      <Route path="/movies/detail" exact={true} component={MovieDetail} />
      <Route path="/support/default" exact={true} component={SupportMain} />
      <Route
        path="/support/faq/default"
        exact={true}
        component={SupportFaqMain}
      />
      <Route
        path="/support/news/default"
        exact={true}
        component={SupportNewsMain}
      />
      <Route
        path="/support/qna/default"
        exact={true}
        component={SupportQnaMain}
      />
      <FloatingBanner />
      <Footer />
    </div>
  );
}

export default App;
