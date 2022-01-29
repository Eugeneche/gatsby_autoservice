import * as React from "react"
import "./services.css"

import brake from "../../images/photos/brake.jpg"

const Services = () => (
    <div className="services">
        <div className="container">
            <h1 className="page-title">Our Services</h1>
            <div className="services-grid">
                <div className="services-grid__item services-grid__item-text">
                    <h3 className="services-grid__item-text-title">
                        Preventative maintenance
                    </h3>
                    <div className="services-grid__item-text-subtitle">
                        The best way to minimize breakdowns is going routine maintenance
                    </div>
                </div>
                <div className="services-grid__item services-grid__item-img">
                    <img src={brake} alt="car brake" />
                </div>
                <div className="services-grid__item services-grid__item-text"></div>
                <div className="services-grid__item services-grid__item-img">
                    <img src={brake} alt="car brake" />
                </div>
                <div className="services-grid__item services-grid__item-text"></div>
                <div className="services-grid__item services-grid__item-img">
                    <img src={brake} alt="car brake" />
                </div>
            </div>
        </div>
    </div>
)

export default Services