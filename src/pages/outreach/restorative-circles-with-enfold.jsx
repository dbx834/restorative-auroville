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

import Gallery from '@bodhi-project/components/lib/gatsby/Gallery'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import OutreachPageWrapper from '../../components/wrappers/OutreachPageWrapper'

import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'Restorative Circles with Enfold',
  nakedPageSlug: 'outreach/restorative-circles-with-enfold',
  pageAbstract:
    'Enfold works with at-risk youth and those in detention centres, offering them spaces to be heard and to reconnect with their own humanity. In addition to their own processes, they were curious about what more they might gain through Restorative Circles.',
}

const seoData = seoHelper(pageData)

const prev = {
  // nakedPageSlug: 'outreach/restorative-circles-with-enfold',
}

const next = {
  nakedPageSlug: 'outreach/restorative-circles-with-isabs',
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    enfold00003: file(relativePath: { eq: "outreach/enfold00003.jpeg" }) {
      ...max900
    }
    enfold00002: file(relativePath: { eq: "outreach/enfold00002.jpeg" }) {
      ...max900
    }
    enfold00001: file(relativePath: { eq: "outreach/enfold00001.jpeg" }) {
      ...max900
    }
    enfold00004: file(relativePath: { eq: "outreach/enfold00004.jpeg" }) {
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
      <h1 className="mask-h3">Restorative Circles with Enfold</h1>
      <p>
        Enfold works with at-risk youth and those in detention centres, offering
        them spaces to be heard and to reconnect with their own humanity. In
        addition to their own processes, they were curious about what more they
        might gain through Restorative Circles.
      </p>
      <div className="mask-p">
        <Gallery
          data={props.data}
          lookup="enfold"
          columns={{ min: 2, max: 2 }}
          Img={Img}
        />
      </div>
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
