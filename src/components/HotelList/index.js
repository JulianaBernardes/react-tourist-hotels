import React, { Component } from 'react';
import './HotelList.scss';
import Hotel from '../Hotel/Hotel'
import { hotelData } from '../hotelData'

class HotelList extends Component {
    state = {
        hotels: hotelData
    }
    render() {
        const { hotels } = this.state;
        
        return (
            <section className="hotelList">
                {hotels.map(hotel => {
                    return (
                        <Hotel key={hotel.id} hotel={hotel} />
                    )
                }
                )}
            </section>
        );
    }
}

export default HotelList;