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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
// import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import BlogPostWrapper from '../../components/wrappers/BlogPostWrapper'

// import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Our Apprentice Pranjal Shares',
  nakedPageSlug: 'writings/our-apprentice-pranjal-shares',
  pageAbstract: 'Our Apprentice Pranjal Shares.',
  cover: '/content-assets/covers/our-apprentice-pranjal-shares.jpg',
  publishedTimestamp: 1527251750,
  category: 'Restorative Circle',
  author: 'Pranjal Tiwari',
  next: {
    nakedPageSlug: 'writings/can-we-talk-about-discrimination-in-auroville',
  },
  prev: {
    nakedPageSlug: 'writings/restoring-connection',
  },
}

// const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = () => (
  <BlogPostWrapper className="" pageData={pageData}>
    <p>Coming soon…</p>
  </BlogPostWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
