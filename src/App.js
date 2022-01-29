import Cursor from "./components/Cursor";
import Expectations from "./components/Expectations";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Cursor/>
      <Header/>
      <Hero/>
      <Featured/>
      <Expectations/>
      <Footer/>
    </div>
  );
}

export default App;
