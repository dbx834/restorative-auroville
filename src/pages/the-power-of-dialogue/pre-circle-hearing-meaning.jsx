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
  pageTitle: '1.2 Pre-Circle: Hearing Meaning',
  nakedPageSlug: 'the-power-of-dialogue/pre-circle-hearing-meaning',
  pageAbstract:
    'The second step in the Pre-Circle is "hearing meaning," where the Facilitator reflects back to the participant what he/she understands as their message, how they might be feeling about the incident, or what values might be at stake for them.',
  cover: 'https://img.youtube.com/vi/L5oqRbdTLFo/hqdefault.jpg',
}

const seoData = seoHelper(pageData)

const prev = {
  nakedPageSlug: 'the-power-of-dialogue/pre-circle-getting-the-act',
}

const next = {
  nakedPageSlug: 'the-power-of-dialogue/pre-circle-explaining-the-process',
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
      The second step in the Pre-Circle is "hearing meaning," where the
      Facilitator reflects back to the participant what he/she understands as
      their message, how they might be feeling about the incident, or what
      values might be at stake for them.
    </p>
    <p>
      The Pre-Circle has five steps: i) getting the act; ii) hearing meaning;
      iii) explaining the RC process; iv) naming those to be invited, v) getting
      consent.
    </p>
    <div style={{ maxWidth: '45rem' }} className="margin-p">
      <Video url="https://youtu.be/L5oqRbdTLFo" />
    </div>
  </VideoWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
