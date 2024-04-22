import Slider from "./Slider";
import img1 from "./images/riding1.jpeg";
import img2 from "./images/riding2.jpeg";
import img3 from "./images/riding3.jpeg";
import img4 from "./images/riding4.jpeg";
import img5 from "./images/riding5.jpeg";
const Home = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <div>
      <Slider imageUrls={images} />
    </div>
  );
};

export default Home;
