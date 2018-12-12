// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// import Link from 'gatsby-link';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
// import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../../components/wrappers/StandardPage'

import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Pranjal',
  nakedPageSlug: 'pranjal',
  pageAbstract: 'Page abstract.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = () => (
  <StandardPage className="" seoData={seoData}>
    <h1 className="mask-h3">Pranjal</h1>
    <p>
      Originally from the north of India, I grew up in Pondicherry at the Sri
      Aurobindo Ashram School. I graduated in Political Science and
      International Relations and then studied Peace and Conflict. To better
      understand the ground realities of conflict, I volunteered in Jammu and
      Kashmir, India where I was able to understand a little bit of its
      complexity. I found myself lacking in skills to participate in any
      resolution.
    </p>
    <p>
      In my search for meaningful engagements with conflicts I came to
      Auroville, hoping to learn new ways to manage conflicts at the ‘City of
      Dawn’. When I heard about mediating through restorative circles I was
      naturally drawn to its attitude towards conflict, as a natural phenomenon
      that needs understanding. I have been an apprentice at Restorative
      Auroville since October 2017 and have learnt deeply about how to engage
      with conflict. During my time as a volunteer, I’ve assisted in circles,
      helped organize events like the Walk of Hope and Cross-cultural dialogue.
      I’m convinced that the principles of Restorative circles are the way
      forward to greater understanding and lasting harmony.
    </p>
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
