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
import OutLink from '@bodhi-project/components/lib/OutLink'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import BlogPostWrapper from '../../components/wrappers/BlogPostWrapper'

// import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Restorative Circles – Dreaming Together',
  nakedPageSlug: 'writings/restorative-circles-dreaming-together',
  pageAbstract:
    'Last week we visioned together about how we dream we’d hold conflict in Auroville.',
  cover: '/content-assets/covers/restorative-circles-dreaming-together.jpg',
  publishedTimestamp: 1410957350,
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
    <p>
      Last week we visioned together about how we dream we’d hold conflict in
      Auroville. People shared a longing for safe spaces, open communication,
      and a trust that conflict can be seen as an opportunity to move us
      forward. In today’s meeting, we shared in more detail about Restorative
      Circles, a practice that responds very much to these dreams…
    </p>
    <p>
      A beautiful interactive meeting – learning and information, honest sharing
      and listening for deeper meaning, a sense of togetherness and hope…
    </p>
    <p>
      Hear the audio clip:{' '}
      <OutLink to="https://www.aurovilleradio.org/restorative-circles/">
        https://www.aurovilleradio.org/restorative-circles/
      </OutLink>
    </p>
  </BlogPostWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
