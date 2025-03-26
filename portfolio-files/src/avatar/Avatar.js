import React from "react";
import PropTypes from "prop-types";
import defaultAvatarImage from "../assets/new-avatar.png";
import contactAvatarImage from "../assets/contact-avatar.png";
import "../styles/avatar.css";

const Avatar = ({ page }) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  // Use different avatar image for contact page
  const avatarImage = page === "contact" ? contactAvatarImage : defaultAvatarImage;

  return (
    <>
      <span className={spanClass}></span>
      <img src={avatarImage} className={avatarClass} alt="avatar" />
    </>
  );
};

Avatar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Avatar;
