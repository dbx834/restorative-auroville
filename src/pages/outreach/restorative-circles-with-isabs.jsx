// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
// import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Gallery from 'react-photo-gallery'
import MediaQuery from 'react-responsive'
import GalleryX from '@bodhi-project/components/lib/gatsby/Gallery'

import Video from '@bodhi-project/components/lib/video'

import Division from '@bodhi-project/components/lib/division'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import OutreachPageWrapper from '../../components/wrappers/OutreachPageWrapper'

import Link from '../../components/Link'

import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

const pageData = {
  pageTitle: 'Restorative Circles with ISABS',
  nakedPageSlug: 'outreach/restorative-circles-with-isabs',
  pageAbstract:
    'Members from ISABS have been excited about the possibility of setting up an RC System within their organization, offering a space and shared agreements for difficult conversations.',
}

const seoData = seoHelper(pageData)

const prev = {
  nakedPageSlug: 'outreach/restorative-circles-with-enfold',
}

const next = {
  // nakedPageSlug: 'outreach/restorative-circles-in-isabs',
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    isabs00001: file(relativePath: { eq: "outreach/isabs00001.jpeg" }) {
      ...max900
    }
    isabs00002: file(relativePath: { eq: "outreach/isabs00002.jpeg" }) {
      ...max900
    }
    isabs00003: file(relativePath: { eq: "outreach/isabs00003.jpeg" }) {
      ...max900
    }
    isabs00004: file(relativePath: { eq: "outreach/isabs00004.jpeg" }) {
      ...max900
    }
    isabs00005: file(relativePath: { eq: "outreach/isabs00005.jpeg" }) {
      ...max900
    }
    isabs00006: file(relativePath: { eq: "outreach/isabs00006.jpeg" }) {
      ...max900
    }
  }
`

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
      <h1 className="mask-h3">Restorative Circles with ISABS</h1>
      <p>
        Members from ISABS have been excited about the possibility of setting up
        an RC System within their organization, offering a space and shared
        agreements for difficult conversations.
      </p>
      <div className="mask-p">
        <GalleryX
          data={props.data}
          lookup="isabs"
          columns={{ min: 2, max: 3 }}
          Img={Img}
          Gallery={Gallery}
          MediaQuery={MediaQuery}
        />
      </div>
      <Division>
        <Fragment>
          <h2 className="mask-h5">
            <strong>
              ISABS members reflect on their take-aways
              <br />
              (Bangalore batch)
            </strong>
          </h2>
          <Video url="https://www.youtube.com/watch?v=8H3YNKz1A9Y" />
        </Fragment>
        <Fragment>
          <h2 className="mask-h5">
            <strong>
              ISABS members reflect on their take-aways
              <br />
              (Delhi batch)
            </strong>
          </h2>
          <Video url="https://www.youtube.com/watch?v=B7sO2a5_KV8" />
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
