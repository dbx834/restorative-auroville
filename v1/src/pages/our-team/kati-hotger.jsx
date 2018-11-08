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
  pageTitle: 'Kati',
  nakedPageSlug: 'kati-hotger',
  pageAbstract: 'Page abstract.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = () => (
  <StandardPage className="" seoData={seoData}>
    <h1 className="mask-h3">Kati Hötger</h1>
    <p>I was born, raised and educated in Germany.</p>
    <p>
      Based in the city of Köln (Cologne) for 44 years, I made my professional
      career as a director for documentaries and was active in building up a
      cooperative, independent film culture in Germany. After 25 years of
      filmmaking my personal change came about by attending a training in
      conflict resolution and civil peace service. I was very inspired by this
      intense learning over several months, and felt immediately how it met my
      longing to contribute to society and community on a deeper human level.
      Two long-term assignments in (post-)conflict countries (3 years in Sri
      Lanka and 18 months in Georgia/Central Asia) proved that I was on the
      right track.
    </p>
    <p>
      Learning and implementing Restorative Circles with L'aura and the
      Restorative Auroville team is another milestone in my never-ending
      learning process. I feel blessed that I can join our steps towards a
      justice system for Auroville, where connection is more important than
      punishment.
    </p>
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
