/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function LocationCard() {
    return (
        <div className="location_card">
            <div className="nav_loc">
                <h1>Lokasi</h1>
                <a href="#"><h2>Lihat semua</h2></a>
            </div>
            <div className='content_loc'>
                <div className="induk">
                    <i class='bx bx-building-house' ></i>
                    <div className='info'>
                        <h1>20</h1>
                        <h3>Induk</h3>
                    </div>
                </div>
                <div className="lokasi">
                    <i class='bx bx-wrench'></i>
                    <div className='info'>
                        <h1>3</h1>
                        <h3>Sub Lokasi Level 1</h3>
                    </div>
                </div>
                <div className="lokasi-2">
                    <i class='bx bxs-buildings'></i>
                    <div className='info'>
                        <h1>3</h1>
                        <h3>Sub Lokasi Level 2</h3>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default LocationCard;