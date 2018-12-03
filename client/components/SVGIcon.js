import React from "react";

import Phone from "../icons/Phone";
import Home from "../icons/Home";
import Avatar from "../icons/Avatar";
import Work from "../icons/Work";
import Mail from "../icons/Mail";

const SVGIcon = props => {
  switch (props.name) {
    case "phone":
      return <Phone {...props} />;
    case "avatar":
      return <Avatar {...props} />;
    case "home":
      return <Home {...props} />;
    case "work":
      return <Work {...props} />;
    case "mail":
      return <Mail {...props} />;
    default:
      return;
  }
};

export default SVGIcon;
