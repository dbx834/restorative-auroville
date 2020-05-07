// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Gallery from 'react-photo-gallery'
import MediaQuery from 'react-responsive'
import GalleryX from '@bodhi-project/components/lib/gatsby/Gallery'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import DonateProjectWrapper from '../../components/wrappers/DonateProjectWrapper'
import Link from '../../components/Link'

import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'Filming a Live Restorative Circle',
  nakedPageSlug: 'donate/filming-a-live-restorative-circle',
  pageAbstract:
    'We have a big, big, big dream to one day film a live Circle, so that we can document the entire process and share this beautiful work with the rest of the world.',
}

const seoData = seoHelper(pageData)

const next = {
  nakedPageSlug: 'donate/building-an-rc-yurt',
}

const prev = {
  nakedPageSlug: 'donate/tamil-aurovilian-journeys',
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    img1: file(relativePath: { eq: "donate/filming/img1.jpg" }) {
      ...max900
    }
    img2: file(relativePath: { eq: "donate/filming/img2.jpg" }) {
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
    <DonateProjectWrapper
      className=""
      seoData={seoData}
      prev={prev}
      next={next}
      pageData={pageData}
      {...props}
    >
      <h1 className="mask-h3">Filming a Live Restorative Circle</h1>
      <p>
        We have a big, big, big dream to one day film a live Circle, so that we
        can document the entire process and share this beautiful work with the
        rest of the world. But given the size and complexity of Auroville, we
        are not surprised that we haven’t yet had a Circle where people are
        willing to expose themselves in this way. We once came close to filming
        a big Circle that was called within an alternative school community, but
        not everyone was on board with having this “public eye” in their
        intimate space.
      </p>
      <p>
        Would you like this Circle to be yours?&nbsp;
        <Link to="/contact-us">Contact us.</Link>
      </p>
      <div className="margin-p">
        <GalleryX
          data={props.data}
          lookup="img"
          columns={{ min: 2, max: 2 }}
          Img={Img}
          Gallery={Gallery}
          MediaQuery={MediaQuery}
        />
      </div>
      <p>
        If you’re inspired by our project and would like to help, we welcome
        your contributions. Please know that any amount is greatly
        appreciated.&nbsp;
        <Link to="/donate">You can donate here</Link>.
      </p>
    </DonateProjectWrapper>
  )
}

Initiative.propTypes = {
  data: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Initiative
