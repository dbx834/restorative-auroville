// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
// import OutLink from '@bodhi-project/components/lib/OutLink'
import Container from '@bodhi-project/components/lib/Container'
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import wavesTop from '../../assets/wavesTop.png'

import Nav from './Nav'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Desktop
const desktopNavStyle = css({
  width: '100%',
  transition: 'background 0.6s cubic-bezier(0.78, 0.14, 0.15, 0.86)',

  '& .ant-menu-submenu > .ant-menu-submenu-title, .ant-menu-item': {
    paddingLeft: '0px !important',
    paddingRight: '0px !important',
  },

  '& .ant-menu-horizontal': {
    paddingBottom: '0px !important',
  },

  '& .ant-menu': {
    '& li(:first-child)': {
      marginLeft: 0,
    },

    '& li(:last-child)': {
      marginLeft: 0,
    },
  },
})
const desktopNavStyleClass = desktopNavStyle.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** DesktopNav */
const DesktopNav = props => {
  return (
    <div id="desktop-nav" className={desktopNavStyleClass}>
      <Container goldenMajor block noFade>
        <Nav mode="horizontal" />
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
      </Container>
    </div>
  )
}

// --------------------------------------------------------------------- Export
export default DesktopNav
