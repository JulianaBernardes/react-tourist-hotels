import React, { Component } from 'react';
import './HotelList.scss';
import Hotel from '../Hotel/Hotel'

class HotelList extends Component {
    render() {
        return (
            <section className="hotelList">
                <Hotel />           
            </section>
        );
    }
}

export default HotelList;