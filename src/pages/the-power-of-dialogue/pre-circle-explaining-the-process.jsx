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
  pageTitle: '1.3 Pre-Circle: Explaining the Process',
  nakedPageSlug: 'the-power-of-dialogue/pre-circle-explaining-the-process',
  pageAbstract:
    'The third step in the Pre-Circle is "explaining the process," where the Facilitator reviews the RC process with the participant and answers any questions they may have, so that everyone is on the same page about how this particular process works.',
  // cover: 'https://img.youtube.com/vi/thEan8VgZiE/hqdefault.jpg',
}

const seoData = seoHelper(pageData)

const prev = {
  nakedPageSlug: 'the-power-of-dialogue/pre-circle-hearing-meaning',
}

const next = {
  nakedPageSlug: 'the-power-of-dialogue/pre-circle-who-needs-to-be-there',
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
      The third step in the Pre-Circle is "explaining the process," where the
      Facilitator reviews the RC process with the participant and answers any
      questions they may have, so that everyone is on the same page about how
      this particular process works.
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
