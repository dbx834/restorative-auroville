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

import Video from '../../components/Video'

// import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Cross-Cultural Dialogue',
  nakedPageSlug: 'writings/cross-cultural-dialogue',
  pageAbstract:
    'We want to explore and understand this question: Are we divided in Auroville, as local Tamil Aurovilians and non-local Aurovilians?',
  cover: '/content-assets/covers/cross-cultural-dialogue.jpg',
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
    <p>
      We want to explore and understand this question: Are we divided in
      Auroville, as local Tamil Aurovilians and non-local Aurovilians?
    </p>
    <p>
      We have been given a unique opportunity in Auroville to live “unity in
      diversity,” and in many ways our internal community affairs are quite
      harmonious and functional, especially so given our rich mix of cultural
      and socio-economic backgrounds.
    </p>
    <p>
      And it is also true that we still come across misunderstandings and
      different ideas of what it means to live in Auroville, and although there
      are probably many reasons why we lose connection and trust in each other,
      one of the recurring inquiries is whether our cultural differences and
      history keep us apart, and if so, how do we bridge the gap and walk
      towards a truer embodiment of Auroville’s ideal to live in harmony with
      one another.
    </p>
    <p>
      There is so much richness and complexity in our 48 years of shared
      history, and beyond, so we are by no means trying to simplify our story.
      And yet, it is our interest to explore further this particular angle – our
      relationship as local to non-local Aurovilians and non- local to local
      Aurovilians. Over the years, we have had many situations where local Tamil
      Aurovilians express that they do not feel like they are treated as equals,
      and that they do not have the same access to resources and opportunities
      as non-local Aurovilians do. And in response to this, there are just as
      many explanations about why this is so, indicating that in fact our
      present cross-cultural reality is much more complex than an exclusive
      cultural targeting, in one direction or the other.
    </p>
    <div className="mask-p">
      <Video url="https://vimeo.com/242213125" />
    </div>
  </BlogPostWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
