// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
// import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from 'lodash/map'
import startsWith from 'lodash/startsWith'
import isUndefined from 'lodash/isUndefined'
import split from 'lodash/split'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Link } from 'gatsby'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import OutLink from '@bodhi-project/components/lib/OutLink'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Menu from 'antd/lib/menu'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/menu/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import websiteMenu from '../../data/menu.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const { SubMenu } = Menu

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Nav */
class Nav extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      current: 'home',
    }

    this.logoClick = this.logoClick.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
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

  /** standard renderer */
  render() {
    const { isSticky, mode } = this.props
    const { pathname } = 'abc'

    return (
      <nav>
        <Menu
          mode={mode}
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          forceSubMenuRender
          // subMenuCloseDelay={100}
        >
          {map(websiteMenu, topLevel => {
            const { title, menu, link } = topLevel
            let returnObj = <br />
            if (isUndefined(link)) {
              returnObj = (
                <SubMenu
                  title={<span style={{ fontSize: '82%' }}>{title}</span>}
                  key={`${title}-${link}`}
                >
                  {map(menu, subMenu => {
                    const { title: subTitle, link: thisLink } = subMenu
                    const isOutLink = startsWith(thisLink, 'http')
                    const hashLink = isUndefined(thisLink)

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
                              <a href="#">
                                <span>{subTitle}</span>
                              </a>
                            ) : (
                              <Link to={thisLink}>
                                <span>{subTitle}</span>
                              </Link>
                            )}
                          </Fragment>
                        )}
                      </Menu.Item>
                    )
                  })}
                </SubMenu>
              )
            } else {
              returnObj = (
                <Menu.Item key={link}>
                  <Link to={link}>
                    <span style={{ fontSize: '82%' }}>{title}</span>
                  </Link>
                </Menu.Item>
              )
            }

            return returnObj
          })}
        </Menu>
      </nav>
    )
  }
}

Nav.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  menu: PropTypes.array, // eslint-disable-line react/forbid-prop-types
}

// --------------------------------------------------------------------- Export
export default Nav
