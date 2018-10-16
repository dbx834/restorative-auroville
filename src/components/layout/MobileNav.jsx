// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
// import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import map from "lodash/map";
// import isUndefined from "lodash/isUndefined";
// import startsWith from "lodash/startsWith";
// import split from "lodash/split";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Drawer from 'antd/lib/drawer'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/drawer/style/css'

import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/button/style/css'

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/icon/style/css'

import { Link } from 'gatsby'
// import OutLink from "@bodhi-project/components/lib/OutLink";
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import logo from '../../assets/logoColor.png'
import wavesTop from '../../assets/wavesTop.png'

import Nav from './Nav'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** MobileNav */
class MobileNav extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
    }

    this.showDrawer = this.showDrawer.bind(this)
    this.onClose = this.onClose.bind(this)
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
    console.log(this.state)

    return (
      <div id="mobile-nav">
        <div
          style={{
            display: 'flex',
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 10,
            paddingRight: 10,
            justifyContent: 'space-between',
          }}
        >
          <Link
            to="/"
            style={{
              display: 'block',
              border: 'unset',
            }}
          >
            <Image
              src={logo}
              rawWidth={2042}
              rawHeight={582}
              style={{
                display: 'block',
                height: 60,
                width: 'auto',
                border: 0,
                background: 'transparent',
                float: 'left',
              }}
              loader="gradient"
              alt="NVC India"
            />
          </Link>
          <div style={{ paddingTop: 14 }}>
            <Button type="primary" onClick={this.showDrawer}>
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
        <Drawer
          title="Restorative Auroville"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          style={{
            padding: 0,
          }}
        >
          <Nav mode="inline" />
        </Drawer>
      </div>
    )
  }
}

MobileNav.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  menu: PropTypes.array, // eslint-disable-line react/forbid-prop-types
}

// --------------------------------------------------------------------- Export
export default MobileNav
