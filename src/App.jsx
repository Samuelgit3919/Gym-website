import "./App.css";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Hero from "./components/hero/Hero";
import Plans from "./components/plans/Plans";
import Testimonials from "./components/Testimonials/Testimonials";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
