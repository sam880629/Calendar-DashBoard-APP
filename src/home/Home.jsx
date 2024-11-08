import "./Home.css";
import Start from "../components/Spring/Start";
import Animated1 from "../components/Spring/Animated1";
import FadeOnScroll from "../components/Spring/FadeOnScroll";
const Home = () => {


  return (
    <div className="App">
      <div className="home" />
          <FadeOnScroll >
            <Start />
            <Animated1 />
          </FadeOnScroll >
    </div>
  );
};

export default Home;
