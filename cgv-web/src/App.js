import "./App.css";
import FloatingBanner from "./components/FloatingBanner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieChart from "./pages/MovieChart";

function App() {
  return (
    <>
      <Header />
      <MovieChart />
      <FloatingBanner />
      <Footer />
    </>
  );
}

export default App;
