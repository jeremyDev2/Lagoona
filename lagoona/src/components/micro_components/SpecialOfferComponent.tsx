import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SpecialOfferComponentProps {
  title:            string;
  price:            string;
  link:             string;
  ArticleClassName: string;
  TitleClassName:   string;
  image:            string[];
}

const SpecialOfferComponent: React.FC<SpecialOfferComponentProps> = ({ title, price, link, ArticleClassName, TitleClassName, image }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % image.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [image.length]);

  return (
    <motion.div
      key        =  {currentImage}
      className  =  {`${ArticleClassName} ${ArticleClassName}-${currentImage + 1}`}
      initial    =  {{ opacity:  0 }}
      animate    =  {{ opacity:  5 }}
      transition =  {{ duration: 1 }}
    >
      <h3 className={TitleClassName}>{title}</h3>
      <p className="special-item-price">{price}</p>
      <a href={link} className="special-item-links">Learn more</a>
    </motion.div>
  );
};

export default SpecialOfferComponent;