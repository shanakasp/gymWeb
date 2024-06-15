import "./App.css";
import Weight from "./components/Weightraining/Weight";
import AboutUs from "./components/aboutus/Aboutus";
import ImageSlider from "./components/coverImage/ImageSlider";
import DietPlans from "./components/dietPlans/DietPlans";
import Header from "./components/header/Header";
import Prices from "./components/prices/Prices";
import Service from "./components/services/Service";

function App() {
  return (
    <>
      <Header></Header>
      <section id="home">
        <ImageSlider></ImageSlider>
      </section>
      <section id="services">
        <Service></Service>
      </section>
      <section id="diet-plans">
        <DietPlans></DietPlans>
      </section>
      <section id="weight-training">
        <Weight></Weight>
      </section>
      <section id="prices">
        <Prices></Prices>
      </section>
      <section id="about-us">
        <AboutUs></AboutUs>
      </section>
    </>
  );
}

export default App;
