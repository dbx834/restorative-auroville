// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from "prop-types";
import { css } from 'glamor'

// import isNull from "lodash/isNull";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'

import logo from '../../assets/logoColor.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const styleObject = css({
  '& a': {
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
})

const style = styleObject.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** WebsiteTitle */
const WebsiteTitle = () => (
  <header className={style}>
    <Link to="/">
      <h1
        style={{
          background: `url(${logo}) 0% 0% / 210px 60px no-repeat`,
        }}
      >
        <span>Restorative Auroville</span>
      </h1>
      <h2>Restorative Circles in Auroville</h2>
    </Link>
  </header>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default WebsiteTitle
