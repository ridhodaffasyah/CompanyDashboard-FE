/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function InfoCard() {
    return (
        <div className="info_card">
            <div className="photo_comp" style={{ backgroundImage: `url("/assets/images/gedung.jpg")`, backgroundSize: 'auto' }}>
                <img src="/assets/images/logo-mitramas.jpg" alt="Mitramas" />
            </div>
            <div className="info_comp">
                <h1 className="name_comp">Mitramas Infosys Global</h1>
                <span>Layanan IT</span>
                <span>
                    <a href="#">
                        <i class='bx bx-pencil'></i>
                        Sunting Profil
                    </a>
                </span>
            </div>
            <div className="profile_comp">
                <h3>Status Perusahaan</h3>
                <div className="toggle-status">
                    <span className="status">Aktif</span>
                    <div class="toggle-wrapper"> 
                        <label class="toggle">
                            <input type="checkbox"/>
                            <span class="toggler round"></span>
                        </label>
                    </div>
                </div>
                <h3>Singkatan</h3>
                <span>MIG</span>
                <h3>Alamat Perusahaan</h3>
                <span>Jl. Tebet Raya No.42, Jakarta Selatan</span>
                <h3>Penanggung Jawab (PIC)</h3>
                <span>John Doe</span>
                <h3>Tanggal PKP</h3>
                <span>03 Maret 2021</span>
                <h3>Email</h3>
                <a href="#">
                    <i class='bx bx-envelope' ></i>
                    mig@mitrasolusi.group
                </a>
                <h3>No. Telp</h3>
                <div className='phone'>
                    <i class='bx bx-phone'></i>
                    021-5678-1234
                </div>
                <h3>Situs Web</h3>
                <a href="mitramas.com">
                    <i class='bx bx-world'></i>
                    mitramas.com
                </a>
            </div>
        </div>
    );
}

export default InfoCard;