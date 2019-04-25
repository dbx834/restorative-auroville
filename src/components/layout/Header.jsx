// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

import map from 'lodash/map'
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Menu from 'antd/lib/menu'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/menu/style/css'

import { Sticky } from 'react-sticky'

import Image from '@bodhi-project/components/lib/Image'
import container from '@bodhi-project/components/lib/methods/container'
import keygen from '@bodhi-project/components/lib/methods/keygen'

import Drawer from 'antd/lib/drawer'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/drawer/style/css'

import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/button/style/css'

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/icon/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'

import logo from '../../assets/logoColor.png'
import wavesTop from '../../assets/wavesTop.png'

import websiteMenu from '../../data/menu.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const { SubMenu } = Menu

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const styleX = css({
  '&#header': {
    zIndex: 1000,
    width: '100%',
    transition: 'background 0.6s cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  },

  '& .desktop-header': {
    '& div.fixed': {
      zIndex: 1000,

      '& nav': {
        background: '#FFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        '& .ant-menu-submenu > .ant-menu-submenu-title, .ant-menu-item': {
          paddingLeft: '0px !important',
          paddingRight: '0px !important',
        },

        '& .ant-menu-horizontal': {
          paddingBottom: '0px !important',
        },

        '& .ant-menu': {
          width: '100%',

          '&:before,:after': {
            display: 'none',
          },

          '& li(:first-child)': {
            marginLeft: 0,
          },

          '& li(:last-child)': {
            marginLeft: 0,
          },
        },
      },
    },

    '& a.title': {
      padding: '30px 0px 5px 0px',
      display: 'flex',
      height: 'auto',
      justifyContent: 'space-between',
      borderBottom: 'unset',

      '& h1': {
        height: 65,
        marginBottom: 0,
        flexBasis: 'auto',
        paddingLeft: 65,
        textIndent: '-9999em',
        width: 210,
      },

      '& h2': {
        marginBottom: 0,
        flexBasis: 'auto',
        textTransform: 'lowercase',
        fontWeight: 100,
        lineHeight: '65px',
        fontStyle: 'italic',
      },

      '&:hover': {
        borderBottom: 'unset',
      },
    },
  },

  '& .mobile-header': {
    // padding: '0px 0px 5px 0px',
    '& div.spaced': {
      display: 'flex',
      justifyContent: 'space-between',
    },

    '& a.title': {
      // padding: '30px 0px 5px 0px',
      display: 'flex',
      height: 'auto',
      justifyContent: 'space-between',
      borderBottom: 'unset',

      '& h1': {
        height: 65,
        marginBottom: 0,
        flexBasis: 'auto',
        paddingLeft: 65,
        textIndent: '-9999em',
        width: 210,
      },

      '&:hover': {
        borderBottom: 'unset',
      },
    },
  },

  '& .ant-drawer-content-wrapper': {
    maxWidth: '400px !important',
    width: '90% !important',

    '& .ant-drawer-body': {
      paddingLeft: '1rem !important',
      paddingRight: '1rem !important',
      paddingTop: '20px !important',
      paddingBottom: '20px !important',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',

      '& nav': {
        flexGrow: 1,
        flexBasis: 0,
      },

      '& #nav': {
        '& .ant-menu-submenu-disabled': {
          '& .ant-menu-submenu-title': {
            color: 'rgba(0, 0, 0, 0.85) !important',
            cursor: 'default !important',
            lineHeight: '28px !important',
            height: '28px !important',
            margin: '0px',
            fontSize: 'inherit !important',

            '& .ant-menu-submenu-arrow': {
              display: 'none !important',
            },

            '& a': {
              color: 'rgba(0, 0, 0, 0.85) !important',
              transition: 'all 0.2s ease-in',

              '&:hover': {
                color: '#00006F',
                fontWeight: 700,
              },
            },
          },
        },
      },

      '& .ant-menu-inline': {
        border: 'unset !important',
      },

      '& .ant-menu-item': {
        lineHeight: '28px !important',
        height: '28px !important',
        margin: '0px',

        '& a': {
          transition: 'all 0.2s ease-in',

          '&:hover': {
            fontWeight: 700,
          },
        },
      },

      '& .ant-menu-sub.ant-menu-inline > .ant-menu-item': {
        paddingLeft: '36px !important',
        lineHeight: '24px !important',
        height: '24px !important',
        margin: '0px',
      },

      '& .ant-menu-sub': {
        marginTop: 0,

        '& .ant-menu-item': {
          '&:last-child': {
            marginBottom: 5,
          },
        },
      },
    },
  },

  '@media(min-width: 992px)': {
    '& .mobile-only': {
      display: 'none',
    },
  },

  '@media(max-width: 992px)': {
    '& .desktop-only': {
      display: 'none',
    },
  },
}).toString()

const goldenMajorBlock = container({ goldenMajor: true, block: true })
const bleedBlock = container({ bleed: true, block: true })

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Header */
class Header extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      current: 'home',
      visible: false,
    }

    this.logoClick = this.logoClick.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.showDrawer = this.showDrawer.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  /** showModal */
  showModal(e) {
    this.setState({
      visible: true,
    })
  }

  /** handleOk */
  handleOk(e) {
    this.setState({
      visible: false,
    })
  }

  /** handleCancel */
  handleCancel(e) {
    this.setState({
      visible: false,
    })
  }

  /** logoClick */
  logoClick(e) {
    this.setState({
      current: 'home',
    })
  }

  /** handleClick */
  handleClick(e) {
    this.setState({
      current: e.key,
    })
  }

  /** onClose */
  onClose() {
    this.setState({
      visible: false,
    })
  }

  /** showDrawer */
  showDrawer() {
    this.setState({
      visible: true,
    })
  }

  /** standard renderer */
  render() {
    const { mode, isDesktop, typeClass, location } = this.props
    const { current, visible } = this.state

    return (
      <header className={styleX} id="header">
        {isDesktop === true && (
          <div className={`${goldenMajorBlock} desktop-header`}>
            <Link to="/" className="title">
              <h1
                style={{
                  background: `url(${logo}) 0% 0% / 210px 60px no-repeat`,
                }}
              >
                <span>Restorative Auroville</span>
              </h1>
              <h2>Restorative Circles in Auroville</h2>
            </Link>
            <Sticky topOffset={100}>
              {({ style, isSticky }) => (
                <div
                  className={`fixed ${isSticky ? 'sticky' : 'not-sticky'}`}
                  style={style}
                >
                  <nav>
                    <Menu
                      mode="horizontal"
                      onClick={this.handleClick}
                      selectedKeys={[current]}
                      forceSubMenuRender
                    >
                      {map(websiteMenu, topLevel => {
                        const { title, menu, link, mobileOnly } = topLevel
                        let returnObj = <Fragment key={keygen()} />
                        if (mobileOnly === false) {
                          if (isUndefined(link)) {
                            returnObj = (
                              <SubMenu
                                title={
                                  <span style={{ fontSize: '82%' }}>
                                    {title}
                                  </span>
                                }
                                key={keygen()}
                              >
                                {map(menu, subMenu => {
                                  const {
                                    title: subTitle,
                                    link: thisLink,
                                  } = subMenu
                                  return (
                                    <Menu.Item key={keygen()}>
                                      <Link to={thisLink}>
                                        <span>{subTitle}</span>
                                      </Link>
                                    </Menu.Item>
                                  )
                                })}
                              </SubMenu>
                            )
                          } else {
                            returnObj = (
                              <Menu.Item key={keygen()}>
                                <Link to={link}>
                                  <span style={{ fontSize: '82%' }}>
                                    {title}
                                  </span>
                                </Link>
                              </Menu.Item>
                            )
                          }
                        }

                        return returnObj
                      })}
                    </Menu>
                  </nav>
                  <Image
                    src={wavesTop}
                    style={{
                      height: 30,
                      width: '100%',
                      border: 0,
                      background: 'transparent',
                      marginBottom: 0,
                    }}
                    alt="Restorative Auroville"
                  />
                </div>
              )}
            </Sticky>
          </div>
        )}
        {isDesktop === false && (
          <div className={`${bleedBlock} mobile-header`}>
            <div>
              <div className="spaced">
                <Link to="/" className="title">
                  <h1
                    style={{
                      background: `url(${logo}) 0% 0% / 210px 60px no-repeat`,
                    }}
                  >
                    <span>Restorative Auroville</span>
                  </h1>
                </Link>
                <div style={{ paddingTop: 14 }}>
                  <Button
                    type="primary"
                    onClick={this.showDrawer}
                    style={{ background: '#00006F', borderColor: '#00006F' }}
                  >
                    <Icon type="menu-fold" theme="outlined" />
                  </Button>
                </div>
              </div>
              <Image
                src={wavesTop}
                style={{
                  height: 30,
                  width: '100%',
                  border: 0,
                  background: 'transparent',
                  marginBottom: 0,
                }}
                alt="Restorative Auroville"
              />
            </div>
            <Drawer
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={visible}
              style={{
                padding: 0,
              }}
              width="50%"
              className={`${typeClass} ${styleX}`}
            >
              <nav id="nav">
                <Menu
                  mode="inline"
                  onClick={this.handleClick}
                  selectedKeys={[current]}
                  forceSubMenuRender
                  defaultOpenKeys={[
                    'About +',
                    'Learn +',
                    'In Action +',
                    'More +',
                  ]}
                >
                  {map(websiteMenu, topLevel => {
                    const { title, menu, link } = topLevel
                    let returnObj = <Fragment key={keygen()} />
                    if (isUndefined(link)) {
                      returnObj = (
                        <SubMenu
                          title={
                            <Link to="#">
                              <span>{title}</span>
                            </Link>
                          }
                          key={title}
                          disabled
                        >
                          {map(menu, subMenu => {
                            const { title: subTitle, link: thisLink } = subMenu
                            return (
                              <Menu.Item key={keygen()}>
                                <Link to={thisLink}>{subTitle}</Link>
                              </Menu.Item>
                            )
                          })}
                        </SubMenu>
                      )
                    } else {
                      returnObj = (
                        <Menu.Item key={keygen()}>
                          <Link to={link}>
                            <span>{title}</span>
                          </Link>
                        </Menu.Item>
                      )
                    }

                    return returnObj
                  })}
                </Menu>
              </nav>
            </Drawer>
          </div>
        )}
      </header>
    )
  }
}

// --------------------------------------------------------------------- Export
export default Header
