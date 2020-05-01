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
  pageTitle: "3.5 RC's Ripple Effect",
  nakedPageSlug: 'the-power-of-dialogue/rcs-ripple-effect',
  pageAbstract:
    'Pranjal reflects on how Circles can impact the community in unexpected ways, even when some folks choose not to attend.',
  cover: 'https://img.youtube.com/vi/RSA4NUSzJ4Y/hqdefault.jpg',
}

const seoData = seoHelper(pageData)

const prev = {
  nakedPageSlug: 'the-power-of-dialogue/rc-challenges-us-to-grow',
}

const next = {
  nakedPageSlug: 'the-power-of-dialogue/engaging-with-the-community-through-rc',
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
      Pranjal reflects on how Circles can impact the community in unexpected
      ways, even when some folks choose not to attend.
    </p>
    <div style={{ maxWidth: '45rem' }} className="margin-p">
      <Video url="https://youtu.be/RSA4NUSzJ4Y" />
    </div>
  </VideoWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
