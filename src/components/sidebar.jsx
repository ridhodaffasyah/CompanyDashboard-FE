/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Sidebar() {

    return (
        <>
            <div className="sidebar">
                <div className="logo_content">
                    <div className="logo">
                        <div className="logo_name">
                            <img src="/assets/images/logo.png" alt="Logo Mitramas" />
                        </div>
                    </div>
                </div>
                <ul class="nav_list">
                    <li>
                        <a href="#">
                            <i class='bx bx-home'></i>
                        </a>
                        {/* <span className="tooltip">Beranda</span> */}
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bxs-discount'></i>
                        </a>
                        {/* <span className="tooltip">Promo</span> */}
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-task' ></i>
                        </a>
                        {/* <span className="tooltip">Assignment</span> */}
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-store' ></i>
                        </a>
                        {/* <span className="tooltip">Toko</span> */}
                    </li>
                    <li>
                        <a href="#" className='active'>
                            <i class='bx bx-buildings' ></i>
                        </a>
                        {/* <span className="tooltip">Perusahaan</span> */}
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bxs-group'></i>
                        </a>
                        {/* <span className="tooltip">User</span> */}
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bxs-layer'></i>
                        </a>
                        {/* <span className="tooltip">Layer</span> */}
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-cube'></i>
                        </a>
                        {/* <span className="tooltip">Cube</span> */}
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-collapse'></i>
                        </a>
                        {/* <span className="tooltip">Collapse</span> */}
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-search-alt'></i>
                        </a>
                        {/* <span className="tooltip">Search</span> */}
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-book'></i>
                        </a>
                        {/* <span className="tooltip">Book</span> */}
                    </li>
                </ul>
            </div>
        </>
    );
}
export default Sidebar;