// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Header as SemanticHeader } from "@bodhi-project/semantic-webflow";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import CompositeHeader from "@bodhi-project/components/lib/CompositeHeader";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import mobileLogo from "../../assets/mobileLogo.png";
import mobileBurger from "../../assets/mobileBurger.png";
import mobileCross from "../../assets/mobileCross.png";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const {
  ResponsiveHeader,
  DesktopHeader,
  MobileMenu,
  MobileHeader,
} = CompositeHeader;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
const menu = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Events",
    link: "/events",
  },
  {
    title: "Docs",
    link: "/docs",
  },
  {
    title: "FAQs",
    link: "/faqs",
  },
];

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Mobile
const mobileHeaderStyle = css({
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 3px 5px 0px rgba(30,30,30,0.2)",
  border: "unset",
  paddingBottom: 20,
});
const mobileHeaderStyles = mobileHeaderStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Header */
const Header = props => {
  return (
    <SemanticHeader>
      <ResponsiveHeader path={props.location}>
        <MobileHeader className={mobileHeaderStyles}>
          <img
            id="logo"
            alt="logo"
            src={mobileLogo}
            style={{
              height: 45,
              width: "auto",
              marginTop: 20,
            }}
          />
          <img
            id="menu"
            alt="menu icon"
            src={mobileBurger}
            style={{ height: 45, width: 45, top: 18, right: 13 }}
          />
          <img
            id="cross"
            alt="close menu icon"
            src={mobileCross}
            style={{ height: 37, width: 37 }}
          />
        </MobileHeader>
        <MobileMenu>
          <MobileNav menu={menu} {...props} />
        </MobileMenu>
        <DesktopHeader>
          <DesktopNav menu={menu} {...props} />
        </DesktopHeader>
      </ResponsiveHeader>
    </SemanticHeader>
  );
};

Header.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

// --------------------------------------------------------------------- Export
export default Header;
