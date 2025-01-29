import "./App.css";
import Header from "./views/layout/Header";
import Main from "./views/layout/Main";
import Footer from "./views/layout/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Header />

      <Hero />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
