import "./App.css";
import Header from "./layouts/header";
import Slider from "./pages/slider";
import FloristLorem from "./pages/florist lorem";
import Floralservice from "./pages/servicces";
import Footer from "./layouts/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <FloristLorem />
      <Floralservice />
      <Footer />
    </div>
  );
}

export default App;
