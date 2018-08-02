// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from "lodash/map";
import startsWith from "lodash/startsWith";
import isUndefined from "lodash/isUndefined";
import split from "lodash/split";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import OutLink from "@bodhi-project/components/lib/OutLink";
import Container from "@bodhi-project/components/lib/Container";
import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Menu from "antd/lib/menu";
import "@bodhi-project/antrd/lib/restorative-auroville/menu/style/css";

import Row from "antd/lib/row";
import "@bodhi-project/antrd/lib/restorative-auroville/row/style/css";

import Col from "antd/lib/col";
import "@bodhi-project/antrd/lib/restorative-auroville/col/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import logo from "../../assets/logoColor.png";
import underAreaTop from "../../assets/underAreaTop.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { SubMenu } = Menu;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Desktop
const desktopNavStyle = css({
  width: "100%",
});
const desktopNavStyleClass = desktopNavStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** DesktopNav */
class DesktopNav extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
  }

  /** standard renderer */
  render() {
    const { pathname } = this.props.location;

    return (
      <div className={desktopNavStyleClass}>
        <div style={{ background: "#FFF", padding: "1em 0em" }}>
          <Container block noFade>
            <Row type="flex">
              <Col xs={23} sm={23} md={6} lg={5} xl={5}>
                <Link to="/">
                  <Image
                    src={logo}
                    rawWidth={2042}
                    rawHeight={582}
                    style={{
                      height: 60,
                      width: "auto",
                      border: 0,
                      background: "transparent",
                      marginBottom: 10,
                      marginTop: 10,
                      float: "left",
                    }}
                    loader="gradient"
                    alt="NVC India"
                  />
                </Link>
              </Col>
              <Col xs={0} sm={0} md={18} lg={19} xl={19}>
                <Menu
                  mode="horizontal"
                  style={{
                    display: "inline-block",
                    float: "right",
                    borderBottom: "unset",
                    marginTop: 27.5,
                  }}
                >
                  {map(this.props.menu, topLevel => {
                    const { title, menu, link } = topLevel;
                    let returnObj = <br />;
                    if (isUndefined(link)) {
                      returnObj = (
                        <SubMenu title={title} key={`${title}-${link}`}>
                          {map(menu, subMenu => {
                            const { title: subTitle, link: thisLink } = subMenu;
                            const isOutLink = startsWith(thisLink, "http");
                            const hashLink = isUndefined(thisLink);

                            return (
                              <Menu.Item key={thisLink}>
                                {isOutLink === true && (
                                  <OutLink to={thisLink}>{subTitle}</OutLink>
                                )}
                                {isOutLink === false && (
                                  <Fragment>
                                    {hashLink === true ? (
                                      <a
                                        href="#"
                                        className={
                                          pathname ===
                                          split(thisLink, "?", 1)[0]
                                            ? "active"
                                            : ""
                                        }
                                      >
                                        <span>{subTitle}</span>
                                      </a>
                                    ) : (
                                      <Link
                                        to={thisLink}
                                        className={
                                          pathname ===
                                          split(thisLink, "?", 1)[0]
                                            ? "active"
                                            : ""
                                        }
                                      >
                                        <span>{subTitle}</span>
                                      </Link>
                                    )}
                                  </Fragment>
                                )}
                              </Menu.Item>
                            );
                          })}
                        </SubMenu>
                      );
                    } else {
                      returnObj = (
                        <Menu.Item key={link}>
                          <Link to={link}>{title}</Link>
                        </Menu.Item>
                      );
                    }

                    return returnObj;
                  })}
                </Menu>
              </Col>
            </Row>
          </Container>
        </div>
        <Image
          src={underAreaTop}
          style={{
            height: 30,
            width: "100%",
            border: 0,
            background: "transparent",
          }}
          alt="Restorative Auroville"
        />
      </div>
    );
  }
}

DesktopNav.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  menu: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

// --------------------------------------------------------------------- Export
export default DesktopNav;
