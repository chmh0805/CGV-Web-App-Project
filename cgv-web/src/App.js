import { Route } from "react-router";
import "./App.css";
import FloatingBanner from "./components/FloatingBanner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GuestLogin from "./pages/GuestLogin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import MyCgvHome from "./pages/MyCgvHome";
import Trailler from "./pages/Trailler";
import SupportMain from "./pages/SupportMain";
import MovieDetail from "./pages/MovieDetail";
import MovieFinder from "./pages/MovieFinder";
import MovieChart from "./pages/MovieChart";
import MovieChartSchedule from "./pages/MovieChartSchedule";
import SupportFaqMain from "./pages/SupportFaqMain";
import SupportNewsMain from "./pages/SupportNewsMain";
import SupportQnaMain from "./pages/SupportQnaMain";
import TicketingPage from "./pages/TicketingPage";
import MovieLogWatched from "./pages/MovieLogWatched";
import MovieLogExpected from "./pages/MovieLogExpected";
import MyCgvReserve from "./pages/MyCgvReserve";
import MyCgvMovieTicketRegister from "./pages/MyCgvMovieTicketRegister";
import MyCgvGiftcon from "./pages/MyCgvGiftcon";
import MyCgvGiftconRegister from "./pages/MyCgvGiftconRegister";
import UserUpdate from "./pages/UserUpdate";
import MyCgvMyQna from "./pages/MyCgvMyQna";
import Theater from "./pages/Theater";
import Signout from "./pages/Signout";
import FindUsername from "./pages/FindUsername";
import FindPassword from "./pages/FindPassword";
import UpdatePassword from "./pages/UpdatePassword";
import MyMovieReview from "./pages/MyMovieReview";
import TheaterRegister from "./pages/TheaterRegister";
import SuppotNewsRegister from "./pages/SuppotNewsRegister";
import SupportFaqRegister from "./pages/SupportFaqRegister";
import MyCgvMyQnaDetail from "./pages/MyCgvMyQnaDetail";
import SupportNewsDetail from "./pages/SupportNewsDetail";
import SupportFaqDetail from "./pages/SupportFaqDetail";
import TimeTableRegister from "./pages/TimeTableRegister";


function App() {
  return (
    <div style={{ position: "relative" }}>
      <Header />

      {/* ??? */}
      <Route path="/" exact={true} component={Home} />

      {/* Auth ?????? */}
      {/* ????????? / ????????????????????? */}
      <Route path="/login" exact={true} component={Login} />
      <Route path="/guest/login" exact={true} component={GuestLogin} />
      {/* ???????????? */}
      <Route path="/join" exact={true} component={Join} />
      {/* ?????????????????? */}
      <Route path="/user/info" exact={true} component={UserUpdate} />
      {/* ???????????? */}
      <Route path="/user/signout" exact={true} component={Signout} />
      {/* ????????? ?????? */}
      <Route path="/findId" exact={true} component={FindUsername} />
      {/* ???????????? ?????? */}
      <Route path="/findPassword" exact={true} component={FindPassword} />
      {/* ???????????? ?????? */}
      <Route path="/updatePw" exact={true} component={UpdatePassword} />
      {/* Auth ?????? ??? */}

      {/* My CGV ?????? */}
      {/* My CGV ??? */}
      <Route path="/user/mycgv" exact={true} component={MyCgvHome} />
      {/* My CGV ?????? ???????????? */}
      <Route path="/user/mycgv/reserve" exact={true} component={MyCgvReserve} />
      {/* My CGV ??????????????? */}
      <Route
        path="/user/mycgv/coupon/movie-ticket/register"
        exact={true}
        component={MyCgvMovieTicketRegister}
      />
      {/* My CGV ??? ????????????*/}
      <Route path="/user/mycgv/giftcon" exact={true} component={MyCgvGiftcon} />
      {/* My CGV ??? ???????????? ?????? */}
      <Route
        path="/user/mycgv/giftcon/register"
        exact={true}
        component={MyCgvGiftconRegister}
      />
      {/* My CGV ??? ???????????? */}
      <Route path="/user/mycgv/myqna" exact={true} component={MyCgvMyQna} />
      {/* My CGV ??? ???????????? ???????????? */}
      <Route
        path="/user/mycgv/myqna/detail"
        exact={true}
        component={MyCgvMyQnaDetail}
      />
      {/* My CGV ?????? ??? */}

      {/* Movie ?????? */}
      {/* Moive ?????? */}
      <Route path="/movies" exact={true} component={MovieChart} />
      <Route
        path="/movies/schedule"
        exact={true}
        component={MovieChartSchedule}
      />
      {/* Movie Trailer */}
      <Route path="/movies/trailler" exact={true} component={Trailler} />
      {/* Movie Finder */}
      <Route path="/movies/finder" exact={true} component={MovieFinder} />

      {/* Movie Detail */}
      <Route path="/movies/detail" exact={true} component={MovieDetail} />
      {/* ?????? ??? ?????? */}
      <Route path="/user/myReview" exact={true} component={MyMovieReview} />
      {/* Movie ?????? ??? */}

      {/* ?????? ?????? */}
      {/* ?????? ?????? */}
      <Route path="/theater" exact={true} component={Theater} />
      {/* ?????? ?????? */}
      <Route
        path="/theater/register"
        exact={true}
        component={TheaterRegister}
      />
      {/* ?????? ?????? ??? */}
      {/* ?????? ?????? */}
      <Route
        path="/timetable/register"
        exact={true}
        component={TimeTableRegister}
      />
      {/* ?????? ?????? ??? */}
      {/* ???????????? ?????? */}
      {/* ???????????? ??? */}
      <Route path="/support/default" exact={true} component={SupportMain} />
      {/* ?????? ?????? ?????? */}
      <Route
        path="/support/faq/default"
        exact={true}
        component={SupportFaqMain}
      />
      {/* ?????? ?????? ?????? ???????????? */}
      <Route
        path="/support/faq/detail"
        exact={true}
        component={SupportFaqDetail}
      />
      {/* ?????? ?????? ??????  ??????*/}
      <Route
        path="/support/faq/register"
        exact={true}
        component={SupportFaqRegister}
      />
      {/* ??????/?????? */}
      <Route
        path="/support/news/default/"
        exact={true}
        component={SupportNewsMain}
      />
      {/* ??????/?????? ???????????? */}
      <Route
        path="/support/news/detail"
        exact={true}
        component={SupportNewsDetail}
      />
      {/* ??????/?????? ?????? */}
      <Route
        path="/support/news/register"
        exact={true}
        component={SuppotNewsRegister}
      />
      {/* ????????? ?????? */}
      <Route
        path="/support/qna/default"
        exact={true}
        component={SupportQnaMain}
      />
      {/* ???????????? ?????? ??? */}

      {/* ?????? ?????? */}
      {/* ?????? ???????????? */}
      <Route path="/ticket" exact={true} component={TicketingPage} />
      {/* ?????? ?????? ??? */}

      {/* ???????????? ?????? */}
      {/* ?????? ??? ?????? */}
      <Route
        path="/user/movielog/watched"
        exact={true}
        render={() => <MovieLogWatched watched={true} />}
      />
      {/* ???????????? ?????? */}
      <Route
        path="/user/movielog/expected"
        exact={true}
        render={() => <MovieLogExpected watched={false} />}
      />
      {/* ?????????????????? ??? */}

      <FloatingBanner />
      <Footer />
    </div>
  );
}

export default App;
