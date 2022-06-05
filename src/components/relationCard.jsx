/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function RelationCard() {
    return (
        <div className="relation_card">
            <div className="nav_rel">
                <h1>Relasi</h1>
                <a href="#"><h2>Lihat semua</h2></a>
            </div>
            <div className="content_rel">
                <div className="memiliki">
                    <i class='bx bx-share-alt' ></i>
                    <div className='info_share'>
                        <h1>20</h1>
                        <h3>Memiliki</h3>
                    </div>
                </div>
                <div className="menggunakan">
                    <i class='bx bx-share-alt' ></i>
                    <div className='info_share'>
                        <h1>108</h1>
                        <h3>Menggunakan</h3>
                    </div>
                </div>
                <div className="meminjam">
                    <i class='bx bx-share-alt' ></i>
                    <div className='info_share'>
                        <h1>67</h1>
                        <h3>Meminjam</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RelationCard;