/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function AccountBank() {
    return (
        <div className="account_bank">
            <div className="nav_bank">
                <h1>Akun Bank</h1>
                <a href="#">+ Tambah Akun Bank</a>
            </div>
            <div className="list_bank">
                <div className="bank">
                    <img src="/assets/images/visa.png" alt="Visa-Card" width={"10%"} />
                    <div className="info_bank">
                        <div className="name_bank">
                            <h1>Bank KB Bukopin</h1>
                            <div>
                                <a href="#"><i class='bx bx-pencil'></i></a>
                                <a href="#"><i class='bx bx-trash'></i></a>
                            </div>
                        </div>
                        <div className="number">
                            <span>**** 0876 - Yusron Taufiq</span>
                            <p>IDR</p>
                        </div>
                    </div>
                </div>
                <div className="bank">
                    <img src="/assets/images/visa.png" alt="Visa-Card" width={"10%"}/>
                    <div className="info_bank">
                        <div className="name_bank">
                            <h1>Citibank, NA</h1>
                            <div>
                                <a href="#"><i class='bx bx-pencil'></i></a>
                                <a href="#"><i class='bx bx-trash'></i></a>
                            </div>
                        </div>
                        <div className="number">
                            <span>**** 0876 - Yusron Taufiq</span>
                            <p>IDR</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountBank;