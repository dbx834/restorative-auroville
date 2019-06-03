// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";

// import map from "lodash/map";
// import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Division from '@bodhi-project/components/lib/Division'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

import OutLink from '@bodhi-project/components/lib/OutLink'
import Image from '@bodhi-project/components/lib/Image'

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/icon/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
// import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

import birdsTop from '../assets/birdsTop.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

const pageData = {
  pageTitle: 'Testimonials',
  nakedPageSlug: 'testimonials',
  pageAbstract: 'Coming Soon.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = props => (
  <StandardPage className="" seoData={seoData} {...props}>
    <Division golden>
      <Fragment>
        <h1 className="mask-h3">Testimonials</h1>
        <p>Coming Soon.</p>
      </Fragment>
      <Fragment>
        <h1
          className="mask-h3"
          style={{ display: 'inline-block', position: 'relative' }}
        >
          Restorative Auroville
          <div
            style={{
              position: 'absolute',
              top: -20,
              right: -38,
              height: 50,
            }}
          >
            <Image
              src={birdsTop}
              style={{
                background: 'transparent',
                border: 'unset',
                height: 50,
                width: 50,
              }}
              rawWidth={900}
              rawHeight={900}
            />
          </div>
        </h1>
        <p>
          Restorative Auroville is a project of{' '}
          <OutLink to="https://www.joylivinglearning.org/">
            Joy Living Learning
          </OutLink>
          , a unit of the{' '}
          <OutLink to="https://www.auroville.org/">
            Auroville Foundation
          </OutLink>
          , India.
        </p>
        <p>
          <OutLink to="mailto:restorative@auroville.org.in?Subject=Hello">
            <Icon type="mail" theme="outlined" />
            &nbsp; restorative@auroville.org.in
          </OutLink>
        </p>
      </Fragment>
    </Division>
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
