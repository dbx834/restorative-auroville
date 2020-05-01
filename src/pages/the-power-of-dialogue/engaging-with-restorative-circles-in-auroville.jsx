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
  pageTitle: '3.1 Engaging with Restorative Circles in Auroville',
  nakedPageSlug:
    'the-power-of-dialogue/engaging-with-restorative-circles-in-auroville',
  pageAbstract:
    "L'aura shares about her experience of engaging with Restorative Circles in Auroville and how it's received by the community.",
  cover: 'https://img.youtube.com/vi/tuJrfIFd3IY/hqdefault.jpg',
}

const seoData = seoHelper(pageData)

const prev = {
  nakedPageSlug:
    'the-power-of-dialogue/facilitators-pre-circle-on-sexual-misconduct',
}

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
      L'aura shares about her experience of engaging with Restorative Circles in
      Auroville and how it's received by the community.
    </p>
    <div style={{ maxWidth: '45rem' }} className="margin-p">
      <Video url="https://www.youtube.com/watch?v=tuJrfIFd3IY" />
    </div>
  </VideoWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
