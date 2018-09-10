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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Menu from "antd/lib/menu";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/menu/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
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
  "& .ant-menu": {
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    borderBottom: "2px dotted #00006F",

    display: "flex",
    justifyContent: "space-between",

    "& li(:first-child)": {
      marginLeft: 0,
    },

    "& li(:last-child)": {
      marginLeft: 0,
    },
  },
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
        <Container goldenMajor block noFade>
          <Menu
            mode="horizontal"
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            // className="bordered"
          >
            {map(this.props.menu, topLevel => {
              const { title, menu, link } = topLevel;
              let returnObj = <br />;
              if (isUndefined(link)) {
                returnObj = (
                  <SubMenu
                    title={<span style={{ fontSize: "82%" }}>{title}</span>}
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
                                    pathname === split(thisLink, "?", 1)[0]
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
                                    pathname === split(thisLink, "?", 1)[0]
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
        </Container>
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
