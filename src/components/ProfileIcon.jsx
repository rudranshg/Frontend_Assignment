import React from "react";
import Tooltip from "@mui/material/Tooltip";

// Import the icons based on userId
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon from "../assets/icon.jpeg";
// Add more imports as needed

import onlineIcon from "../assets/online.png";
import offlineIcon from "../assets/new-circle.png";

const ProfileIcon = ({ userId, getUserAvailability }) => {
  // Map userId to corresponding icon
  const iconMapping = {
    "usr-1": icon1,
    "usr-2": icon2,
    "usr-3": icon3,
    "usr-4": icon4,
    "usr-5": icon5,
    // Add more mappings as needed
  };

  // Get the icon based on userId, default to a generic icon if not found
  const userIcon = iconMapping[userId] || icon;

  return (
    <Tooltip
      title={getUserAvailability(userId) ? "Online" : "Offline"}
      followCursor
    >
      <div style={{ position: "relative"}}>
        <img
          src={userIcon}
          alt="icon"
          style={{
            width: "20px",
            height: "20px",
            marginRight: "4px",
            borderRadius: "10px"
          }}
        />
        <img
          src={getUserAvailability(userId) ? onlineIcon : offlineIcon}
          alt={getUserAvailability(userId) ? "Online" : "Offline"}
          style={{
            width: "10px",
            height: "10px",
            position: "absolute",
            top: "12px",
            left: "12px",
          }}
        />
      </div>
    </Tooltip>
  );
};

export default ProfileIcon;
