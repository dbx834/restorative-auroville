// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";

// import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import BlogPostWrapper from '../../components/wrappers/BlogPostWrapper'

import Video from '../../components/Video'

// import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: "L'aura & Restorative Circles",
  nakedPageSlug: 'writings/laura-and-restorative-circles',
  pageAbstract:
    'Exploring “justice” in Auroville, and how we can respond to conflict and so-called unacceptable behaviour in ways that hold all sides of the story and support moving forward as an entire community.',
  cover: '/content-assets/covers/laura-and-restorative-circles.jpg',
  publishedTimestamp: 1474029350,
  category: 'Restorative Circle',
  author: "L'aura Joy",
}

// const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = () => (
  <BlogPostWrapper className="" pageData={pageData}>
    <p>Published on “Auroville Radio.”</p>
    <p>
      Exploring “justice” in Auroville, and how we can respond to conflict and
      so-called unacceptable behaviour in ways that hold all sides of the story
      and support moving forward as an entire community.
    </p>
    <div className="mask-p">
      <Video url="https://www.youtube.com/watch?v=jRrurVLtprE" />
    </div>
  </BlogPostWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
