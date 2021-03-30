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

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Header />

      {/* 홈 */}
      <Route path="/" exact={true} component={Home} />

      {/* Auth 영역 */}
      {/* 로그인 / 비회원예매조회 */}
      <Route path="/login" exact={true} component={Login} />
      <Route path="/guest/login" exact={true} component={GuestLogin} />
      {/* 회원가입 */}
      <Route path="/join" exact={true} component={Join} />
      {/* 회원정보수정 */}
      <Route path="/user/info" exact={true} component={UserUpdate} />
      {/* 회원탈퇴 */}
      <Route path="/user/signout" exact={true} component={Signout} />
      {/* 아이디 찾기 */}
      <Route path="/findId" exact={true} component={FindUsername} />
      {/* 비밀번호 찾기 */}
      <Route path="/findPassword" exact={true} component={FindPassword} />
      {/* 비밀번호 변경 */}
      <Route path="/updatePw" exact={true} component={UpdatePassword} />
      {/* Auth 영역 끝 */}

      {/* My CGV 영역 */}
      {/* My CGV 홈 */}
      <Route path="/user/mycgv" exact={true} component={MyCgvHome} />
      {/* My CGV 나의 예매내역 */}
      <Route path="/user/mycgv/reserve" exact={true} component={MyCgvReserve} />
      {/* My CGV 영화관람권 */}
      <Route
        path="/user/mycgv/coupon/movie-ticket/register"
        exact={true}
        component={MyCgvMovieTicketRegister}
      />
      {/* My CGV 내 기프트콘*/}
      <Route path="/user/mycgv/giftcon" exact={true} component={MyCgvGiftcon} />
      {/* My CGV 내 기프트콘 등록 */}
      <Route
        path="/user/mycgv/giftcon/register"
        exact={true}
        component={MyCgvGiftconRegister}
      />
      {/* My CGV 내 문의내역 */}
      <Route path="/user/mycgv/myqna" exact={true} component={MyCgvMyQna} />
      {/* My CGV 영역 끝 */}

      {/* Movie 영역 */}
      {/* Moive 차트 */}
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
      {/* 내가 쓴 평점 */}
      <Route path="/user/myReview" exact={true} component={MyMovieReview} />
      {/* Movie 영역 끝 */}

      {/* 극장 영역 */}
      {/* 극장 보기 */}
      <Route path="/theater" exact={true} component={Theater} />
      {/* 극장 등록 */}
      <Route
        path="/theater/register"
        exact={true}
        component={TheaterRegister}
      />
      {/* 극장 영역 끝 */}

      {/* 고객센터 영역 */}
      {/* 고객센터 홈 */}
      <Route path="/support/default" exact={true} component={SupportMain} />
      {/* 자주 찾는 질문 */}
      <Route
        path="/support/faq/default"
        exact={true}
        component={SupportFaqMain}
      />
      {/* 자주 찾는 질문  등록*/}
      <Route
        path="/support/faq/register"
        exact={true}
        component={SupportFaqRegister}
      />
      {/* 공지/뉴스 */}
      <Route
        path="/support/news/default"
        exact={true}
        component={SupportNewsMain}
      />
      {/* 공지/뉴스 등록 */}
      <Route
        path="/support/news/register"
        exact={true}
        component={SuppotNewsRegister}
      />
      {/* 이메일 문의 */}
      <Route
        path="/support/qna/default"
        exact={true}
        component={SupportQnaMain}
      />
      {/* 고객센터 영역 끝 */}

      {/* 예매 영역 */}
      {/* 예매 첫페이지 */}
      <Route path="/ticket" exact={true} component={TicketingPage} />
      {/* 예매 영역 끝 */}

      {/* 무비로그 영역 */}
      {/* 내가 본 영화 */}
      <Route
        path="/user/movielog/watched"
        exact={true}
        render={() => <MovieLogWatched watched={true} />}
      />
      {/* 기대되는 영화 */}
      <Route
        path="/user/movielog/expected"
        exact={true}
        render={() => <MovieLogExpected watched={false} />}
      />
      {/* 무비로그영역 끝 */}

      <FloatingBanner />
      <Footer />
    </div>
  );
}

export default App;
