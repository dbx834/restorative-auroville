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
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/modal/style/css";

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
  { title: "Home", link: "/" },
  {
    title: "Explore +",
    menu: [
      { title: "Our Project", link: "/about-restorative-auroville" },
      { title: "Restorative Circles", link: "/restorative-circles" },
      {
        title: "Our Restorative System",
        link: "/our-restorative-system-in-auroville",
      },
    ],
  },
  {
    title: "Learn +",
    menu: [
      { title: "Calendar of events", link: "/calendar" },
      { title: "Educational Tools", link: "/educational-tools" },
    ],
  },
  {
    title: "Our Initiatives",
    link: "/initiatives",
  },
  {
    title: "Support +",
    menu: [
      {
        title: "Donate",
        link: "/donate",
      },
      {
        title: "Volunteer",
        link: "/volunteer",
      },
    ],
  },
  { title: "Our Team", link: "/our-team" },
  {
    title: "More +",
    menu: [
      { title: "Gallery", link: "/gallery" },
      { title: "Articles", link: "/writings" },
      { title: "Archives", link: "/archives" },
    ],
  },
  { title: "Contact Us", link: "/contact-us" },
];

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Mobile
const mobileHeader = css({
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 3px 5px 0px rgba(30,30,30,0.2)",
  border: "unset",
  paddingBottom: 20,
});
const mobileHeaderClass = mobileHeader.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Header */
class Header extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
  }

  /** standard renderer */
  render() {
    return (
      <SemanticHeader>
        <ResponsiveHeader path={this.props.location}>
          <MobileHeader className={mobileHeaderClass}>
            <img
              id="logo"
              alt="NVC India"
              src={mobileLogo}
              style={{
                height: 45,
                width: "auto",
                marginTop: 20,
              }}
            />
            <img
              id="menu"
              alt="Open mobile menu"
              src={mobileBurger}
              style={{
                height: 38,
                width: 38,
                top: 20,
                right: 7,
                position: "absolute",
              }}
            />
            <img
              id="cross"
              alt="Close mobile menu"
              src={mobileCross}
              style={{
                height: 38,
                width: 38,
                top: 44,
                right: 24,
                position: "absolute",
              }}
            />
          </MobileHeader>
          <MobileMenu>
            <MobileNav menu={menu} {...this.props} />
          </MobileMenu>
          <DesktopHeader>
            <DesktopNav menu={menu} {...this.props} />
          </DesktopHeader>
        </ResponsiveHeader>
      </SemanticHeader>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

// --------------------------------------------------------------------- Export
export default Header;
