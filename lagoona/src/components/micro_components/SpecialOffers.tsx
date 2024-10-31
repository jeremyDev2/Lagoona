import React from "react";
import SpecialOfferComponent from "./SpecialOfferComponent";

const SpecialOffers: React.FC = () => {

    return (
        <section>
            <div className="container">
                <h2 className="special_h2">Спецпредложения</h2>
                <div className="special flex">
                    <div className="special_block flex">
                        <SpecialOfferComponent title="Мальдивские острова" price="2500$" link="#" ArticleClassName="special_item maldivs" TitleClassName="special-item-title"/>
                        <SpecialOfferComponent title="Остров Крит" price="1700$" link="#" ArticleClassName=" special_item crete" TitleClassName="special-item-title"/>
                    </div>
                    <div className="special_block flex">
                        <SpecialOfferComponent title="Номера категории люкс" price="400$" link="#" ArticleClassName="special_item_2 luxe" TitleClassName="special-item-title-2"/>
                    </div>
                </div>
            </div>
        </section>        
    );
}

export default SpecialOffers;