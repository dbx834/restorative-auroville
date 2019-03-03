// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
// import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

import Images from '@bodhi-project/components/lib/Images'

import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../../components/Link'
import StandardPage from '../../components/wrappers/StandardPage'
import DisqusComments from '../../components/DisqusComments'
import seoHelper from '../../methods/seoHelper'
import PrevNext from '../../components/PrevNext'

const photos = [
  { src: '/donate-assets/yurt/yurt4.jpeg', width: 600, height: 450 },
  { src: '/donate-assets/yurt/yurt2.jpeg', width: 600, height: 800 },
  { src: '/donate-assets/yurt/yurt3.jpeg', width: 600, height: 450 },
  { src: '/donate-assets/yurt/yurt5.jpeg', width: 600, height: 450 },
]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'Building an RC Yurt',
  nakedPageSlug: 'donate/building-an-rc-yurt',
  pageAbstract:
    'With our work growing, it’s high-time that we build a physical structure for our RC gatherings. We’re hoping to raise Rs.5 lakhs, in order to set up a dismountable yurt in Centre Field.',
}

const seoData = seoHelper(pageData)

const { Item: BItem } = Breadcrumb

const next = {
  // nakedPageSlug: 'community-events/walk-of-hope-in-auroville-and-the-bioregion',
}

const prev = {
  nakedPageSlug: 'donate/filming-a-live-restorative-circle',
}

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Initiative */
const Initiative = props => {
  return (
    <StandardPage className="" seoData={seoData}>
      <Breadcrumb className="mask-p" separator="»" style={{ marginBottom: 30 }}>
        <BItem>
          <Link to="/">Home</Link>
        </BItem>
        <BItem>
          <Link to="/donate">Donate</Link>
        </BItem>
        <BItem>Building an RC Yurt</BItem>
      </Breadcrumb>
      <h1 className="mask-h3">Building an RC Yurt</h1>
      <p>
        With our work growing, it’s high-time that we build a physical structure
        for our RC gatherings. We’re hoping to raise Rs.5 lakhs in order to set
        up a dismountable yurt.
      </p>
      <p>
        In our first 3 years, we hosted almost 30 live Circles, and each time we
        were faced with the challenge of finding a suitable meeting space. As we
        don’t have a budget for this work, we tried our best to find spaces that
        were available for free, and oftentimes we’d end up sitting in L’aura’s
        living room -- which is cozy, but not workable as a long-term
        professional space.
      </p>
      <p>
        We’d like to create a space that’s more neutral, and that’s designed to
        accommodate about 30-40 people sitting in a circle.
      </p>
      <div className="margin-p">
        <Images
          photos={photos}
          loader="gradient"
          columns={{ min: 2, max: 2 }}
        />
        &nbsp;
      </div>
      <p>
        In the context of today’s Auroville, we think a dismountable and
        moveable structure would be the best. We visited a yurt built by
        Jean-Marc, and we loved its circular design. We’d like to set up a
        similar yurt, possibly in Centre Field next to L’aura’s house.
      </p>
      <p>
        The estimated cost to put up this yurt is Rs.5 lakhs, and we’re looking
        for financial support.{' '}
        <Link to="/donate">
          If you’re inspired by our project and would like to help, we welcome
          your contributions you can donate here
        </Link>
        .
      </p>
      <p>Please know that any amount is greatly appreciated.</p>
      <p>We look forward to providing a new space for community growth.</p>
      <PrevNext next={next} prev={prev} />
      <DisqusComments pageData={pageData} />
    </StandardPage>
  )
}

Initiative.propTypes = {
  data: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Initiative
