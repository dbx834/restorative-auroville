// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
// import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// import Images from '@bodhi-project/components/lib/Images'

import Video from '@bodhi-project/components/lib/Video'

import Division from '@bodhi-project/components/lib/Division'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import OutreachPageWrapper from '../../components/wrappers/OutreachPageWrapper'

import Link from '../../components/Link'

import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

const pageData = {
  pageTitle: 'Restorative Circles in ISABS',
  nakedPageSlug: 'outreach/restorative-circles-in-isabs',
  pageAbstract: 'Restorative Circles in ISABS…',
}

const seoData = seoHelper(pageData)

const next = {
  nakedPageSlug: 'outreach/restorative-circles-with-enfold',
}

const prev = {
  // nakedPageSlug: 'outreach/restorative-circles-in-isabs',
}

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Initiative */
const Initiative = props => {
  return (
    <OutreachPageWrapper
      className=""
      seoData={seoData}
      prev={prev}
      next={next}
      pageData={pageData}
      {...props}
    >
      <h1 className="mask-h3">Restorative Circles in ISABS</h1>
      <Division>
        <Fragment>
          <h2 className="mask-h5">
            Restorative Circles Workshop with ISABS (Delhi)
          </h2>
          <Video url="https://www.youtube.com/watch?v=B7sO2a5_KV8" />
        </Fragment>
        <Fragment>
          <h2 className="mask-h5">
            Restorative Circles Workshop with ISABS (Bangalore)
          </h2>
          <Video url="https://www.youtube.com/watch?v=8H3YNKz1A9Y" />
        </Fragment>
      </Division>
      <br />
    </OutreachPageWrapper>
  )
}

Initiative.propTypes = {
  data: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Initiative
