import React from 'react';

function ActivityCard() {
    return (
        <div className="activity_card">
            <h1>Aktivitas</h1>
            <div className="content_act">
                <div className="act">
                    <h2>Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa</h2>
                    <p>Hari ini, 06:00</p>
                </div>
                <div className="act">
                    <h2>Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk Kantor Cabang Tebet</h2>
                    <p>Kemaren, 17:32</p>
                </div>
                <div className="act">
                    <h2>Yusron melakukan perubahan profil pada induk Kantor Cabang Bekasi</h2>
                    <p>Kemaren, 17:32</p>
                </div>
            </div>
        </div>
    );
}

export default ActivityCard;