import React from "react";
import HotelCard from "./HotelCard";
import firstPng from "../../assets/23.png"
import secondPng from "../../assets/24.png"
import thirdPng from "../../assets/26.png"
import fourPng from "../../assets/27.png"
import fivePng from "../../assets/29-1.png"
import sixPng from "../../assets/29.png"
import sevenPng from "../../assets/30.png"
import eightPng from "../../assets/31.png"

const PostingList: React.FC = () => {
    const hotels = [
        {
            imgSrc: firstPng,
            price: "4 698",
            rating: 4,
            name: "Lagoona española",
            location: "Барселона, Испания",
        },
        {
            imgSrc: secondPng,
            price: "5 555",
            rating: 4,
            name: "Lagoona son típicas",
            location: "Барселона, Испания",
        },
        {
            imgSrc: thirdPng,
            price: "6 254",
            rating: 5,
            name: "Lagoona de la guerra",
            location: "Барселона, Испания",
        },
        {
            imgSrc: fourPng,
            price: "7 777",
            rating: 5,
            name: "Lagoona mentira piadosa",
            location: "Барселона, Испания",
        },
        {
            imgSrc: fivePng,
            price: "3 333",
            rating: 4,
            name: "Lagoona empujar la creatividad",
            location: "Барселона, Испания",
        },
        {
            imgSrc: sixPng,
            price: "6 666",
            rating: 5,
            name: "Lagoona el retorno",
            location: "Барселона, Испания",
        },
        {
            imgSrc: sevenPng,
            price: "8 888",
            rating: 4,
            name: "Lagoona mentira piadosa",
            location: "Барселона, Испания",
        },
        {
            imgSrc: eightPng,
            price: "9 999",
            rating: 4,
            name: "Lagoona suerte siguió siempre",
            location: "Барселона, Испания",
        },
    ];

    return (
        <section id="pst">
            <div className="container">
                <h2 className="special_h2">Accommodation</h2>

                <ul className="list-reset posting-list flex">
                    {hotels.map((hotel, index) => (
                        <HotelCard
                            key={index}
                            imgSrc={hotel.imgSrc}
                            price={hotel.price}
                            rating={hotel.rating}
                            name={hotel.name}
                            location={hotel.location}
                        />
                    ))}
                    <li className="posting-list-item flex">
                        <a className="all-hotel-variants flex" href="#">
                            All variants
                            <svg
                                className="all-hotel-variants-arrow"
                                width="25"
                                height="16"
                                viewBox="0 0 10 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0.778175 1.22183L8.55635 9L0.778175 16.7782" stroke="white" strokeWidth="2" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default PostingList;