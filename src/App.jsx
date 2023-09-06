import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import fullShotImage from "./assets/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg";
import studioApartmentImage from "./assets/modern-studio-apartment-design-with-bedroom-living-space.jpg";
import restaurantImage from "./assets/restaurant-interior.jpg";
import Destinations from "./components/Destinations";
import SomethingNew from "./components/SomethingNew";
import Offer from "./components/Offer";
import Footer from "./components/Footer";
function App() {
  const images = [
    { src: fullShotImage, heading: "Heading 1" },
    { src: studioApartmentImage, heading: "Heading 2" },
    { src: restaurantImage, heading: "Heading 3" },
  ];

  return (
    <>
      <Header />
      <Slider images={images} />
      <Destinations />
      <SomethingNew />
      <Offer />
      <Footer />
    </>
  );
}

export default App;
