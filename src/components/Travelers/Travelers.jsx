import React, { useEffect } from 'react';

import paris from "../../assets/paris.jpg"
import travelerp from "../../assets/travelerp.jpg"
import newYork from "../../assets/newyork.jpg"
import travelerny from "../../assets/travelerny.jpg"
import dubai from "../../assets/dubai.jpg"
import travelerd from "../../assets/travelerd.jpg"
import london from "../../assets/london.jpg"
import travelerl from "../../assets/travelerl.jpg"

import Aos from "aos";
import "aos/dist/aos.css";

const Travelers = () => {
    const travelersArray = [
        {
            id: 1,
            destinationImage: paris,
            travelerImage: travelerp,
            travelerName: "Isra Tech",
            SocialLink: "@isratech8"
        },
        {
            id: 2,
            destinationImage: newYork,
            travelerImage: travelerny,
            travelerName: "Naresh Lamer",
            SocialLink: "@nareshyou"
        },
        {
            id: 3,
            destinationImage: dubai,
            travelerImage: travelerd,
            travelerName: "Wilson Lindsey",
            SocialLink: "@wilsonlinsey"
        },
        {
            id: 4,
            destinationImage: london,
            travelerImage: travelerl,
            travelerName: "Nicole Web",
            SocialLink: "@nico_web3"
        },
    ];

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className='travelers container section'>
            <div className="sectionContainer">
                <h2 data-aos="fade-down" data-aos-duration="2500">Top travelers of this month!</h2>
                <div className="travelersContainer grid">
                    {travelersArray.map(travelerItem => (
                        <div data-aos="fade-up" data-aos-duration="2500" className="singleTraveler" key={travelerItem.id}>
                            <img src={travelerItem.destinationImage} className="destinationImage"/>
                            <div className="travelerDetails">
                                <div className="travelerPicture">
                                    <img src={travelerItem.travelerImage} className="travelerImage" />
                                </div>
                                <div className="travelerName">
                                    <span>{travelerItem.travelerName}</span>
                                    <p>{travelerItem.SocialLink}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Travelers;