import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SlideAnimation from "./components/SlideAnimation";

function App() {
  return (
    <>
      {/* <SectionOne /> */}
      <SectionTwo />
      <SectionThree />
      <SlideAnimation />
    </>
  );
}

export default App;
