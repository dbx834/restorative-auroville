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
import StandardPage from '../../components/StandardPage'

import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: "L'aura Joy",
  nakedPageSlug: 'laura-joy',
  pageAbstract: 'Page abstract.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = () => (
  <StandardPage className="" seoData={seoData}>
    <h1 className="mask-h3">L'aura Joy</h1>
    <p>
      I was born and raised in Auroville, and life has lead me to work with
      nonviolence, peace and justice. I went to university to become a high
      school teacher and proceeded to teach for 6 years (3 in Canada, 3 in
      Auroville). But I somehow didn’t find this work as fulfilling as I had
      expected, so I quit, not knowing what was coming next. In 2007, I
      serendipitously ended up in a Nonviolent Communication workshop, and this
      was the beginning of a new passion and career.
    </p>
    <p>
      A little while later, a friend told me about Dominic Barter’s work
      (hyperlink: www.restorativecircles.org) and that “he was bringing
      Nonviolent Communication to prisons.” Although I had no formal connection
      to the world of crime and justice, I was immediately inspired and decided
      to attend a Restorative Circles training with Dominic in Atlanta, USA in
      October 2010. What I discovered was a whole new paradigm, and an
      absolutely transformative perspective into conflict and community.
    </p>
    <p>
      Given my NVC background and having grown up and lived most of my life in
      community, engaging with Restorative Circles felt like a natural next step
      – immersing myself and applying these principles into a dynamic, living
      system. I couldn’t have found a more meaningful way to give back to
      Auroville.
    </p>
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page