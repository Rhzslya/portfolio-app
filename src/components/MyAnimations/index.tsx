import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const MyAnimation = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/pixel-animation-1.json") // Akses file dari public/
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  if (!animationData) return <p>Loading animation...</p>;

  return (
    <Lottie animationData={animationData} loop autoplay className="w-40 h-40" />
  );
};

export default MyAnimation;
