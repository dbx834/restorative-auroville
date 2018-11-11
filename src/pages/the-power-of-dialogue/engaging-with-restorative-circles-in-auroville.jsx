// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import VideoWrapper from '../../components/VideoWrapper'
import Video from '../../components/Video'
import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: '3.1 Engaging with Restorative Circles in Auroville',
  nakedPageSlug:
    'the-power-of-dialogue/engaging-with-restorative-circles-in-auroville',
  pageAbstract:
    "L'aura shares about her experience of engaging with Restorative Circles in Auroville and how it's received by the community.",
}

const seoData = seoHelper(pageData)

const next = {
  nakedPageSlug:
    'the-power-of-dialogue/designing-our-justice-system-consciously',
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = () => (
  <VideoWrapper className="" seoData={seoData} pageData={pageData} next={next}>
    <p>
      L'aura shares about her experience of engaging with Restorative Circles in
      Auroville and how it's received by the community.
    </p>
    <div style={{ maxWidth: '60em' }} className="margin-p">
      <Video url="https://www.youtube.com/watch?v=tuJrfIFd3IY" />
    </div>
  </VideoWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
