import Link from "next/link";
import React from "react";

const AppLogo = ({ className, variant, black = false, props }) => {
  return (
    <Link className={variant} href="/" {...props}>
      <img
        src={
          black
            ? "/images/icons/ep-logo.png"
            : "/images/icons/ep-logo-white.png"
        }
        alt="Event Pulse Logo"
        className={`object-scale-down text-center transition-all duration-300 hover:scale-110 ${
          className ? className : ""
        }`}
      />
    </Link>
  );
};

export default AppLogo;
