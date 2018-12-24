// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import map from "lodash/map";
// import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import OutLink from '@bodhi-project/components/lib/OutLink'
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Row from 'antd/lib/row'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'

import Col from 'antd/lib/col'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/icon/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
// import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

import birdsTop from '../assets/birdsTop.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Our Circles',
  nakedPageSlug: 'our-circles',
  pageAbstract:
    'Our dream: that our collective processes and individual posture would include: Being rooted in oneness; feeling a lived aspiration for this oneness, Walking towards each other with an open heart...',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = () => (
  <StandardPage className="" seoData={seoData}>
    <h1 className="mask-h3">Our Circles</h1>
    <p>Coming Soon.</p>
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
