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
  pageTitle: '1.5 Pre-Circle: "Would you like to go ahead?"',
  nakedPageSlug: 'the-power-of-dialogue/pre-circle-would-you-like-to-go-ahead',
  pageAbstract:
    'The fifth step in the Pre-Circle is "getting consent," where the Facilitator asks each participant whether they\'d like to go ahead and attend the Circle process.',
  // cover: 'https://img.youtube.com/vi/thEan8VgZiE/hqdefault.jpg',
}

const seoData = seoHelper(pageData)

const prev = {
  nakedPageSlug: 'the-power-of-dialogue/pre-circle-who-needs-to-be-there',
}

const next = {
  nakedPageSlug: 'the-power-of-dialogue/genies-pre-circle-with-janet',
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
      The fifth step in the Pre-Circle is "getting consent," where the
      Facilitator asks each participant whether they'd like to go ahead and
      attend the Circle process.
    </p>
    <p>
      The Pre-Circle has five steps: i) getting the act; ii) hearing meaning;
      iii) explaining the RC process; iv) naming those to be invited, v) getting
      consent.
    </p>
    <p>Video coming soon.</p>
    {/*
    <div style={{ maxWidth: '45rem' }} className="margin-p">
      <Video url="https://youtu.be/thEan8VgZiE" />
    </div>
    */}
  </VideoWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
