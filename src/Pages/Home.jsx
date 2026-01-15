import Hero from "../Components/Hero";
import AboutUs from "../Components/MainAbout";
import OurServices from "../Components/OurServices";
import WhychooseUs from "../Components/WhychooseUs";
import Destination from "../Components/Destination";
import SuccessStory from "../Components/SuccessStory";
import LatestYoutube from "../Components/LatestYoutube";
const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <OurServices />
      <WhychooseUs />
      <Destination />
      <LatestYoutube />
      <SuccessStory />
    </div>
  );
};

export default Home;
