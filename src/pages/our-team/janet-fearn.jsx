// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor"

// import map from "lodash/map"

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../../components/wrappers/StandardPage'

import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Janet',
  nakedPageSlug: 'janet-fearn',
  pageAbstract: 'Page abstract.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = () => (
  <StandardPage className="" seoData={seoData}>
    <h1 className="mask-h3">Janet Fearn</h1>
    <p>
      In 1967 I left my job in Toronto, Canada as a psychiatric social worker,
      and bought an around the world plane ticket. I spent several months
      travelling in India, and arrived in Pondicherry by chance in June of 1968,
      four months after the inauguration of Auroville. I stayed in the Sri
      Aurobindo Ashram until September and then moved to Auroville, which at the
      time was an eroded, barren plateau with a few impoverished villages and
      less than ten people from other parts of the world who had come to build
      the new city.
    </p>
    <p>
      Over the next 40+ years I did several kinds of work from planting trees
      and working at the Matrimandir in the early days to running a handicraft
      workshop, and later a guesthouse. I was also on several different
      Auroville Councils, where I became more aware of Auroville’s need for
      better communication skills, and the tools to resolve conflict.
    </p>
    <p>
      I heard about Restorative Circles in 2010 from L’aura (my daughter) and
      Jason after they returned from a workshop in the US with Dominic Barter
      and immediately saw its potential for Auroville. Since that time I have
      been part of the team working with L’aura to make the practice better
      understood in Auroville, and helping as a co-facilitator in many Circles.
    </p>
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
