import React, { Component } from 'react';
import './Hotel.scss'

class Hotel extends Component {
state = {
    showInfo:false
}

    render() {
        const{hotel, img, location, info} = this.props.hotel
        return (
            <article className='hotel'>
                <div className='img-container'>
                    <img src={img}
                     alt="" />
                     <span className="close-btn">
                         <i className="fas fa-window-close"/>
                     </span>
                </div>
                <div className="hotel-info">
                    <h3>{hotel}</h3>
                    <h4>{location}</h4>
                    <h5>info {""} 
                    <span> <i className="fas fa-caret-square-down" /> </span>
                    </h5>
                <p>
                    {info}
                </p>

                </div>

            </article>
        );
    }
}

export default Hotel;