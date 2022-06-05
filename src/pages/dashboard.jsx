/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Sidebar from '../components/sidebar';
import InfoCard from '../components/infoCard';
import LocationCard from '../components/locationCard';
import AccountBank from '../components/accountBank';
import RelationCard from '../components/relationCard';
import ActivityCard from '../components/activityCard';

function Dashboard() {
  return (
    <div>
        <Sidebar />
        <div className="content">
            <div className="navbar">
                <div className="leftbar">
                    <h1 className="anchor">Perusahaan {'>'}</h1>
                    <h1 className="name_comp">Mitramas Infosys Global</h1>
                </div>
                <div className="rightbar">
                    <div className="tools">
                            <a href="#">
                            <i class='bx bx-search' ></i>
                            </a>
                            <a href="#">
                            <i class='bx bx-bell' ></i>
                            </a>
                    </div>
                    <div className="profile">
                        <img src="/assets/images/profile.jpg" alt="Foto Profil" />
                        <h3>John Doe</h3>
                    </div>
                </div>
              </div>
              <div className="dashboard">
                  <InfoCard />
                  <div className="rightBox">
                      <LocationCard />
                      <div className="Box">
                        <div className="leftBox">
                            <AccountBank />
                            <RelationCard />
                        </div>
                        <ActivityCard />
                      </div>
                  </div>
              </div>
        </div>
    </div>
  );
}

export default Dashboard;