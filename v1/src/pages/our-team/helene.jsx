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
  pageTitle: 'Helene',
  nakedPageSlug: 'helene',
  pageAbstract: 'Page abstract.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = () => (
  <StandardPage className="" seoData={seoData}>
    <h1 className="mask-h3">Hélène Gagnon</h1>
    <p>
      I was born and grew up in Montreal City, Quebec (the French-speaking part
      of Canada). After studying pure sciences at college I started to study and
      practice painting and engraving. In parallel I started to look inside
      myself, trying to understand who I was and what happiness was.
    </p>
    <p>
      It has been a long journey that brought me in 2004 to Pondicherry where I
      stayed 6 years connected with Sri Aurobindo Ashram in order to get a
      deeper connection with Mother and Sri Aurobindo. In 2010 I moved to
      Auroville working in Matrimandir Access, facilitating "Play of painting"
      sessions with children and adults, and starting a new housing project in
      which I faced many conflicts.
    </p>
    <p>
      In 2015 I took a Restorative Circles workshop and I was amazed by what was
      possible, how deep transformation could be if we were sincere and willing
      to enter into it. I joined the team, learned and practised the fundamental
      principles of RC and his many aspects. It has been an important growing
      time for me, l learned to listen to others and deal with conflicts, to
      open more my understanding and my heart to others. I found it was helping
      people to discover some parts of themselves that they were not aware of.
      RC can be a personal transformation process as well as a community
      transformation process based on being honest, listening and accepting each
      other and their differences. Not to ignore conflict is so important for
      being able to live human unity in oneself as well as in a community.
    </p>
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
