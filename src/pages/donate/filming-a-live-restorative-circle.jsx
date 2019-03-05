// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Images from '@bodhi-project/components/lib/Images'

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

const photos = [
  { src: '/donate-assets/filming/img1.jpg', width: 1037, height: 790 },
  { src: '/donate-assets/filming/img2.jpg', width: 594, height: 421 },
]

const next = {
  nakedPageSlug: 'donate/building-an-rc-yurt',
}

const prev = {
  nakedPageSlug: 'donate/tamil-aurovilian-journeys',
}

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
        <Images
          photos={photos}
          loader="gradient"
          columns={{ min: 2, max: 2 }}
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
