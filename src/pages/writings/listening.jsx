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

// import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Listening',
  nakedPageSlug: 'writings/listening',
  pageAbstract:
    'A poem inspired by a 2-day Restorative Circles workshop and my regular engaging with RC for 18 months during which I learned to facilitate Circles. The poem attempts to capture my understanding of the RC process and its key component – reflective listening. ~ by Pranjal',
  cover: '/content-assets/covers/listening.jpg',
  publishedTimestamp: 1555071875,
  category: 'Restorative Circle',
  author: 'Pranjal',
  prev: {
    nakedPageSlug: 'writings/can-we-talk-about-discrimination-in-auroville',
  },
  next: undefined,
}

// const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = props => (
  <BlogPostWrapper className="" pageData={pageData} {...props}>
    <p>
      <br />
      Listen, please listen.
      <br />
      To him, to her, to them, to us.
      <br />
      To you.
      <br />
      <br />
      Now pause…
      <br />
      Prepare.
      <br />
      <br />
      Listen to him.
      <br />
      Ask her to listen to him like the mirror –
      <br />
      Reflect.
      <br />
      “Did the mirror get you?”
      <br />
      Check with him.
      <br />
      Now listen to the silence of being heard.
      <br />
      Do you feel Ease slide in unheard?
      <br />
      Now reverse. Now repeat.
      <br />
      <br />
      Listen, please listen.
      <br />
      To him, to her, to them, to us.
      <br />
      Not to you.
      <br />
      <br />
      The noise in your head recedes.
      <br />
      The churning of reflection proceeds.
      <br />
      The mirrors reflect
      <br />
      Individuals connect.
      <br />
      <br />A deeper unfolding occurs.
      <br />
      As reflections settle,
      <br />
      Concealed truths now reveal;
      <br />
      Listen to them offered so tenderly,
      <br />
      Listen to them wash over soothingly.
      <br />
      <br />
      Listen to the silence of understanding,
      <br />
      The silence of speaking eyes,
      <br />
      Of receptive hearts beat.
      <br />
      Listen to the cathartic restoring.
      <br />
      <br />
      Listen to their being
      <br />
      <i>Be</i> with their being.
      <br />
      Be, in the listening.
      <br />
      <br />~ by Pranjal
    </p>
  </BlogPostWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
