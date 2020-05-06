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
  pageTitle:
    "2.1 Genie's Pre-Circle with Janet & Facilitators' Pre-Circle with Janet, L'aura, Kati & Shanti",
  nakedPageSlug: 'the-power-of-dialogue/genies-pre-circle-with-janet',
  pageAbstract:
    'Before entering a Restorative Circle, Facilitators meet amongst themselves to work through any challenging thoughts or feelings that might interfere with their capacity to hold space during the Circle. Eugénie Dumont (Genie), in her role as filmmaker, is also given an opportunity to be heard for her connection to the Circle.',
  cover: 'https://img.youtube.com/vi/jbDGU3C_xww/hqdefault.jpg',
}

const seoData = seoHelper(pageData)

const prev = {
  nakedPageSlug: 'the-power-of-dialogue/pre-circle-would-you-like-to-go-ahead',
}

const next = {
  nakedPageSlug: 'the-power-of-dialogue/rakhals-pre-circle-with-henrike',
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
      Before entering a Restorative Circle, Facilitators meet amongst themselves
      to work through any challenging thoughts or feelings that might interfere
      with their capacity to hold space during the Circle. Eugénie Dumont
      (Genie), in her role as filmmaker, is also given an opportunity to be
      heard for her connection to the Circle.
    </p>
    <div style={{ maxWidth: '45rem' }} className="margin-p">
      <Video url="https://www.youtube.com/watch?v=jbDGU3C_xww" />
    </div>
  </VideoWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
