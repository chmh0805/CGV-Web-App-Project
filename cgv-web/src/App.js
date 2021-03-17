import "./App.css";
import FloatingBanner from "./components/FloatingBanner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <>
      <Header />
      <MovieDetail />
      <FloatingBanner />
      <Footer />
    </>
  );
}

export default App;
