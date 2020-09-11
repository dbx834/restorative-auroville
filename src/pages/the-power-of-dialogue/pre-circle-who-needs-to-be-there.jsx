// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Video from '@bodhi-project/components/lib/video'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import VideoWrapper from '../../components/wrappers/VideoWrapper'
import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: '1.4 Pre-Circle: "Who needs to be there?"',
  nakedPageSlug: 'the-power-of-dialogue/pre-circle-who-needs-to-be-there',
  pageAbstract:
    'The fourth step in the Pre-Circle is "naming those to be invited," where the Facilitator asks each participant, "Who needs to be there?"',
  // cover: 'https://img.youtube.com/vi/thEan8VgZiE/hqdefault.jpg',
}

const seoData = seoHelper(pageData)

const prev = {
  nakedPageSlug: 'the-power-of-dialogue/pre-circle-explaining-the-process',
}

const next = {
  nakedPageSlug: 'the-power-of-dialogue/pre-circle-would-you-like-to-go-ahead',
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = props => (
  <VideoWrapper
    className=""
    seoData={seoData}
    pageData={pageData}
    prev={prev}
    next={next}
    {...props}
  >
    <p>
      The fourth step in the Pre-Circle is "naming those to be invited," where
      the Facilitator asks each participant, "Who needs to be there?"
    </p>
    <p>
      The Pre-Circle has five steps: i) getting the act; ii) hearing meaning;
      iii) explaining the RC process; iv) naming those to be invited, v) getting
      consent.
    </p>
    <div style={{ maxWidth: '45rem' }} className="margin-p">
      <Video url="https://youtu.be/kDQnXyZOk3w" />
    </div>
  </VideoWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
