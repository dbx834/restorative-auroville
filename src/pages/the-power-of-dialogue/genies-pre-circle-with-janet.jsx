// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import VideoWrapper from '../../components/wrappers/VideoWrapper'
import Video from '../../components/Video'
import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: "2.1 Genie's Pre Circle with Janet",
  nakedPageSlug: 'the-power-of-dialogue/genies-pre-circle-with-janet',
  pageAbstract:
    'Before entering a Restorative Circle, Facilitators meet amongst themselves to work through any challenging thoughts or feelings that might interfere with their capacity to hold space during the Circle. Eugénie Dumont (Genie), in her role as filmmaker, is also given an opportunity to be heard for her connection to the Circle.',
}

const seoData = seoHelper(pageData)

const next = undefined

const prev = undefined

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = () => (
  <VideoWrapper
    className=""
    seoData={seoData}
    pageData={pageData}
    prev={prev}
    next={next}
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
