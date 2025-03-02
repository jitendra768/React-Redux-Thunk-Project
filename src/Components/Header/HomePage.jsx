import Aboutsection from "./Aboutsection";
import Gallery from "./Gallery";
import HeroSection from "./HeroSection";
import Service from "./Service";
import Visiteus from "./Visiteus";
import Whyus from "./Whyus";

const HomePage = () => {
  return (
    <div>
      <>
        {/* hero seciton */}
        <HeroSection />
        {/* our services section */}
        <Service />
        {/* about us */}
        <Aboutsection />
        {/* why us  */}
        <Whyus />
        {/* gallery */}
        <Gallery />
        {/* Visit us section */}
        <Visiteus />
      </>
    </div>
  );
};

export default HomePage;
