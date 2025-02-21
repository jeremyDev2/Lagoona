import React from "react";
import SpecialOfferComponent from "./SpecialOfferComponent";

const SpecialOffers: React.FC = () => {
  return (
    <section>
      <div className="container">
        <h2 className="special_h2">Special Offers</h2>
        <div className="special flex">
          <div className="special_block flex">
            <SpecialOfferComponent

              title="Maldivs"
              price="3800$"
              link="#"
              ArticleClassName="special_item maldivs"
              TitleClassName="special-item-title"
              image={["../src/assets/maldivs.png", "../src/assets/Maldives-2.jpg"]}
              
            />
            <SpecialOfferComponent

              title="Crete Island"
              price="2100$"
              link="#"
              ArticleClassName="special_item crete"
              TitleClassName="special-item-title"
              image={["./assets/crete.png", "./assets/Crete-2.webp"]}

            />
          </div>
          <div className="special_block flex">
            <SpecialOfferComponent

              title="Luxury rooms"
              price="700$"
              link="#"
              ArticleClassName="special_item_2 luxe"
              TitleClassName="special-item-title-2"
              image={["./assets/luxe.jpg", "./assets/luxury_2.jpg"]}

            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;