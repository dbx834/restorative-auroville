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
import { Type } from "@bodhi-project/typography";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Menu from "antd/lib/menu";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/menu/style/css";

import Row from "antd/lib/row";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/row/style/css";

import Col from "antd/lib/col";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/col/style/css";

import Modal from "antd/lib/modal";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/modal/style/css";

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

    this.state = {
      current: "home",
    };

    this.logoClick = this.logoClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  /** showModal */
  showModal(e) {
    this.setState({
      visible: true,
    });
  }

  /** handleOk */
  handleOk(e) {
    this.setState({
      visible: false,
    });
  }

  /** handleCancel */
  handleCancel(e) {
    this.setState({
      visible: false,
    });
  }

  /** logoClick */
  logoClick(e) {
    this.setState({
      current: "home",
    });
  }

  /** handleClick */
  handleClick(e) {
    this.setState({
      current: e.key,
    });
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
                <Link to="/" onClick={this.logoClick}>
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
                  onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                >
                  <Menu.Item>
                    <a href="#" onClick={this.showModal}>
                      <span>Education</span>
                    </a>
                  </Menu.Item>
                  {map(this.props.menu, topLevel => {
                    const { title, menu, link } = topLevel;
                    let returnObj = <br />;
                    if (isUndefined(link)) {
                      returnObj = (
                        <SubMenu
                          title={
                            <span style={{ fontSize: "82%" }}>{title}</span>
                          }
                          key={`${title}-${link}`}
                        >
                          {map(menu, subMenu => {
                            const { title: subTitle, link: thisLink } = subMenu;
                            const isOutLink = startsWith(thisLink, "http");
                            const hashLink = isUndefined(thisLink);

                            return (
                              <Menu.Item key={thisLink}>
                                {isOutLink === true && (
                                  <OutLink to={thisLink}>
                                    <span>{subTitle}</span>
                                  </OutLink>
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
                          <Link to={link}>
                            <span style={{ fontSize: "82%" }}>{title}</span>
                          </Link>
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
        <Modal
          title={null}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          style={{
            top: 0,
            left: 0,
            paddingBottom: 0,
          }}
          bodyStyle={{
            height: "100vh",
            background: "#00006F",
          }}
          width="100vw"
          footer={null}
        >
          <Type kit="dkc2ilk" style={{ minHeight: "100vh" }}>
            <Row type="flex" gutter={16}>
              <Col xs={0} sm={0} md={14} lg={14} xl={14}>
                <h2 style={{ color: "#FFFFFF", marginBottom: 0 }}>
                  Current & Upcoming Programs →
                </h2>
                <p style={{ color: "#FFFFFF" }}>
                  Joy Living Learning is situated in Auroville, an international
                  community in south India that aims to actualize human unity.
                  Given this environment, we are surrounded by opportunities for
                  growth, learning and exploration.
                </p>
                <h2 style={{ color: "#FFFFFF", marginBottom: 0 }}>
                  Regular Practice Groups →
                </h2>
                <p style={{ color: "#FFFFFF" }}>
                  Joy Living Learning is situated in Auroville, an international
                  community in south India that aims to actualize human unity.
                  Given this environment, we are surrounded by opportunities for
                  growth, learning and exploration.
                </p>
                <h2 style={{ color: "#FFFFFF", marginBottom: 0 }}>
                  Past Events →
                </h2>
                <p style={{ color: "#FFFFFF" }}>
                  Joy Living Learning is situated in Auroville, an international
                  community in south India that aims to actualize human unity.
                  Given this environment, we are surrounded by opportunities for
                  growth, learning and exploration.
                </p>
              </Col>
              <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                <h2 style={{ color: "#FFFFFF", marginBottom: 0 }}>
                  Resources →
                </h2>
                <p style={{ color: "#FFFFFF" }}>
                  Joy Living Learning is situated in Auroville, an international
                  community in south India that aims to actualize human unity.
                </p>
                <h2 style={{ color: "#FFFFFF", marginBottom: 0 }}>
                  Learn Online →
                </h2>
                <p style={{ color: "#FFFFFF" }}>
                  Joy Living Learning is situated in Auroville, an international
                  community in south India that aims to actualize human unity.
                </p>
                <h2 style={{ color: "#FFFFFF", marginBottom: 0 }}>
                  Video Recordings →
                </h2>
                <p style={{ color: "#FFFFFF" }}>
                  Joy Living Learning is situated in Auroville, an international
                  community in south India that aims to actualize human unity.
                </p>
                <h2 style={{ color: "#FFFFFF", marginBottom: 0 }}>Pay Fee →</h2>
                <p style={{ color: "#FFFFFF" }}>
                  Joy Living Learning is situated in Auroville, an international
                  community in south India that aims to actualize human unity.
                </p>
              </Col>
            </Row>
          </Type>
        </Modal>
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
