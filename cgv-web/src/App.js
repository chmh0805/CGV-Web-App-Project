import "./App.css";
import FloatingBanner from "./components/FloatingBanner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieChart from "./pages/MovieChart";
import MovieDetail from "./pages/MovieDetail";
import MovieFinder from "./pages/MovieFinder";

function App() {
  return (
    <>
      <Header />
      <MovieFinder />
      <FloatingBanner />
      <Footer />
    </>
  );
}

export default App;
