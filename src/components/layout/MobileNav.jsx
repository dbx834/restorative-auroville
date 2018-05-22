// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from "lodash/map";
import isUndefined from "lodash/isUndefined";
import startsWith from "lodash/startsWith";
import split from "lodash/split";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import OutLink from "@bodhi-project/components/lib/OutLink";
import { Elements } from "@bodhi-project/typography";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { Ul } = Elements;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Desktop
const mobileNavStyles = css({
  height: "inherit",
  padding: "0em",

  "& nav": {
    "& ul": {
      listStyle: "none",
      padding: 0,

      "& ul": {
        listStyle: "none",
        paddingLeft: 20,
        marginBottom: 15,
      },

      "& li": {
        marginBottom: 2,
      },

      "& li.header": {
        "& span": {
          fontWeight: 700,
        },

        ":not(:first-child)": {
          marginTop: 25,
        },
      },
    },
  },
});
const mobileNavStylesClass = mobileNavStyles.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** MobileNav */
const MobileNav = props => {
  const { pathname } = this.props.location;
  return (
    <div className={mobileNavStylesClass}>
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
    </div>
  );
};

MobileNav.propTypes = {
  menu: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

// --------------------------------------------------------------------- Export
export default MobileNav;
