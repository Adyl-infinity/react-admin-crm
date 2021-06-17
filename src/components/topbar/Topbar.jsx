import React from 'react';
import "./topbar.css"
import {NotificationsNone, Language, Settings} from "@material-ui/icons";

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">nevisadmin</span>
                </div>
                <div className="topright">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://i.ibb.co/VQ9CDMG/IMG-9278.jpg" alt="" className="topAvatar"/>
                </div>
            </div>
        </div>
    );
};

export default Topbar;