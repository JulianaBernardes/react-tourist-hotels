import React, { Component } from 'react';
import './Hotel.scss'

class Hotel extends Component {
state = {
    showInfo:false
}
handleInfo = () => {
    this.setState({
        showInfo: !this.state.showInfo
    })
}

    render() {
        const{id, hotel, img, location, info} = this.props.hotel
        const {removeHotel} = this.props
        return (
            <article className='hotel'>
                <div className='img-container'>
                    <img src={img}
                     alt="" />
                     <span className="close-btn" onClick ={() => removeHotel(id)}>
                         <i className="fas fa-window-close"/>
                     </span>
                </div>
                <div className="hotel-info">
                    <h3>{hotel}</h3>
                    <h4>{location}</h4>
                    <h5>info {""} 
                    <span onClick={this.handleInfo}> <i className="fas fa-caret-square-down" /> </span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p>}

                </div>

            </article>
        );
    }
}

export default Hotel;