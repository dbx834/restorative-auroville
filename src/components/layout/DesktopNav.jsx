// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import merge from "lodash/merge";
import map from "lodash/map";
import startsWith from "lodash/startsWith";
// import isUndefined from "lodash/isUndefined";
import split from "lodash/split";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import { Elements } from "@bodhi-project/typography";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import OutLink from "@bodhi-project/components/lib/OutLink";
import Container from "@bodhi-project/components/lib/Container";
import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
// import Popover from "antd/lib/popover";
// import "antd/lib/popover/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import logo from "../../assets/logoColor.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;
const { Ul } = Elements;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Desktop
const desktopNavStyle = css({
  textAlign: "center",
  padding: 0,

  "& ul": {
    listStyle: "none",
    paddingLeft: 0,

    "& li": {
      display: "inline-block",
      marginRight: "20px",
      marginBottom: "0px !important",
    },

    "& a": {
      color: "#4a4a4a",
      borderBottom: "1.625px solid transparent",
      transition: "0.125s",
      textTransform: "uppercase",
      letterSpacing: "0.14625ex",

      "& span": {
        fontSize: "66%",
      },

      "&:hover": {
        color: "#4a4a4a",
        borderBottom: "1.625px solid #4a4a4a",
      },
    },

    "& a.active": {
      color: "#BA6B02",
    },
  },
});
const desktopNavStyleClass = desktopNavStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** DesktopNav */
const DesktopNav = props => {
  const { pathname } = props.location;
  return (
    <Container bleed block noFade className={desktopNavStyleClass}>
      <Link to="/">
        <Image
          src={logo}
          rawWidth={842}
          rawHeight={936}
          style={{
            height: 156,
            width: 140,
            border: 0,
            background: "transparent",
            marginLeft: 40,
            marginBottom: 26,
            marginTop: 26,
            display: "inline-block",
          }}
          loader="gradient"
        />
      </Link>
      <nav>
        <Ul>
          {map(props.menu, menuItem => {
            const { title, link } = menuItem;
            const isOutLink = startsWith(link, "http");

            return (
              <li key={link}>
                {isOutLink === true && (
                  <OutLink to={link}>
                    <span>{title}</span>
                  </OutLink>
                )}
                {isOutLink === false && (
                  <Link
                    to={link}
                    className={
                      pathname === split(link, "?", 1)[0] ? "active" : ""
                    }
                  >
                    <span>{title}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </Ul>
      </nav>
    </Container>
  );
};

DesktopNav.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  menu: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

// --------------------------------------------------------------------- Export
export default DesktopNav;
