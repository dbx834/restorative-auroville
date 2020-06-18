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
  pageTitle: '1.1 Pre-Circle: Getting the Act',
  nakedPageSlug: 'the-power-of-dialogue/pre-circle-getting-the-act',
  pageAbstract:
    'The first step in the Pre-Circle is "getting the act," which is the starting point for the Circle process. We look for a specific incident that took place and that\'s symbolic of the larger context.',
  cover: 'https://img.youtube.com/vi/JnQcOqNSCUM/hqdefault.jpg',
}

const seoData = seoHelper(pageData)

const prev = undefined

const next = {
  nakedPageSlug: 'the-power-of-dialogue/pre-circle-hearing-meaning',
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
      The first step in the Pre-Circle is "getting the act," which is the
      starting point for the Circle process. We look for a specific incident
      that took place and that's symbolic of the larger context.
    </p>
    <p>
      The Pre-Circle has five steps: i) getting the act; ii) hearing meaning;
      iii) explaining the RC process; iv) naming those to be invited, v) getting
      consent.
    </p>
    <div style={{ maxWidth: '45rem' }} className="margin-p">
      <Video url="https://www.youtube.com/watch?v=JnQcOqNSCUM" />
    </div>
  </VideoWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
