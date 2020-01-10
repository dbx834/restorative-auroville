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

import Images from '@bodhi-project/components/lib/Images'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import DonateProjectWrapper from '../../components/wrappers/DonateProjectWrapper'

import Link from '../../components/Link'

import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'Building an RC Yurt',
  nakedPageSlug: 'donate/building-an-rc-yurt',
  pageAbstract:
    'With our work growing, it’s high-time that we build a physical structure for our RC gatherings. We’re hoping to raise Rs.5 lakhs, in order to set up a dismountable yurt in Centre Field.',
}

const seoData = seoHelper(pageData)

const next = {
  // nakedPageSlug: 'community-events/walk-of-hope-in-auroville-and-the-bioregion',
}

const prev = {
  nakedPageSlug: 'donate/filming-a-live-restorative-circle',
}

const photos = [
  { src: '/donate-assets/yurt/yurt4.jpeg', width: 600, height: 450 },
  { src: '/donate-assets/yurt/yurt3.jpeg', width: 600, height: 450 },
  { src: '/donate-assets/yurt/yurt5.jpeg', width: 600, height: 450 },
]

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    costs: file(relativePath: { eq: "donate/yurt/costs.jpeg" }) {
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
      <h1 className="mask-h3">Building an RC Yurt</h1>
      <p>
        With our work growing, it’s high-time that we build a physical structure
        for our RC gatherings. We’re hoping to raise Rs.6 lakhs in order to set
        up a dismountable yurt.
      </p>
      <div className="mask-p">
        <Img
          fluid={props.data.costs.childImageSharp.fluid}
          style={{ maxWidth: 480 }}
        />
      </div>
      <p>
        In our first 3 years, we hosted almost 30 live Circles, and each time we
        were faced with the challenge of finding a suitable meeting space. As we
        don’t have a budget for this work, we tried our best to find spaces that
        were available for free, and oftentimes we’d end up sitting in L’aura’s
        living room – which is cozy, but not workable as a long-term
        professional space.
      </p>
      <p>
        We’d like to create a space that’s more neutral and designed to
        accommodate about 30-40 people sitting in a circle.
      </p>
      <div className="margin-p">
        <Images
          photos={photos}
          loader="gradient"
          columns={{ min: 3, max: 3 }}
        />
      </div>
      <p>
        In the context of today’s Auroville, we think a dismountable and
        moveable structure would be the best. We visited a yurt built by
        Aurovilian builder Jean-Marc, and we loved its circular design. We’d
        like to set up a similar yurt, possibly in Centre Field next to L’aura’s
        house.
      </p>
      <p>We look forward to providing a new space for community growth.</p>
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
