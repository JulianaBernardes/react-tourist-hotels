import React, { Component } from 'react';
import './Hotel.scss'

class Hotel extends Component {
    render() {
        return (
            <article className='hotel'>
                <div className='img-container'>
                    <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                     alt="" />
                     <span className="close-btn">
                         <i className="fas fa-window-close"/>
                     </span>
                </div>
                <div className="hotel-info">
                    <h3>hotel</h3>
                    <h4>name</h4>
                    <h5>info <span> <i className="fas fa-caret-square-down" /> </span></h5>
                <p>
                    infos about the hotel:
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>

                </div>

            </article>
        );
    }
}

export default Hotel;