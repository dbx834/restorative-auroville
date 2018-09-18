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
import Drawer from "antd/lib/drawer";
import "antd/lib/drawer/style/css";

import Button from "antd/lib/button";
import "antd/lib/button/style/css";

import Link from "gatsby-link";
import OutLink from "@bodhi-project/components/lib/OutLink";
import Image from "@bodhi-project/components/lib/Image";
import { Elements } from "@bodhi-project/typography";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import logo from "../../assets/logoColor.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { Ul } = Elements;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Desktop
// const mobileNavStyles = css({
//   height: "inherit",
//   padding: "0em",

//   "& nav": {
//     "& ul": {
//       listStyle: "none",
//       padding: 0,

//       "& ul": {
//         listStyle: "none",
//         paddingLeft: 20,
//         marginBottom: 15,
//       },

//       "& li": {
//         marginBottom: 2,
//       },

//       "& li.header": {
//         "& span": {
//           fontWeight: 700,
//         },

//         ":not(:first-child)": {
//           marginTop: 25,
//         },
//       },
//     },
//   },
// });
// const mobileNavStylesClass = mobileNavStyles.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** MobileNav */
class MobileNav extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  /** onClose */
  onClose() {
    this.setState({
      visible: false,
    });
  }

  /** showDrawer */
  showDrawer() {
    this.setState({
      visible: true,
    });
  }

  /** standard renderer */
  render() {
    console.log(this.state);

    return (
      <div id="mobile-nav">
        <div style={{ display: "flex" }}>
          <Link
            to="/"
            style={{ display: "block", border: "unset", height: 100 }}
          >
            <Image
              src={logo}
              rawWidth={2042}
              rawHeight={582}
              style={{
                display: "block",
                height: 60,
                width: "auto",
                border: 0,
                background: "transparent",
                // marginBottom: 10,
                // marginTop: 30,
                float: "left",
              }}
              loader="gradient"
              alt="NVC India"
            />
          </Link>
          <Button type="primary" onClick={this.showDrawer}>
            Open
          </Button>
        </div>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          {this.props.children}
        </Drawer>
      </div>
    );
  }
}

MobileNav.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  menu: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

// --------------------------------------------------------------------- Export
export default MobileNav;
