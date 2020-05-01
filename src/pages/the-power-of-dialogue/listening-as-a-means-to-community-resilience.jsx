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
  pageTitle: '3.7 Listening as a means to Community Resilience',
  nakedPageSlug:
    'the-power-of-dialogue/listening-as-a-means-to-community-resilience',
  pageAbstract:
    'Nils shares on the power of listening deeply to one another, and how that has the potential to create connection and understanding amongst us, and in the long run contribute to community resilience.',
  cover: 'https://img.youtube.com/vi/mPXr0HkIX80/hqdefault.jpg',
}

const seoData = seoHelper(pageData)

const prev = {
  nakedPageSlug: 'the-power-of-dialogue/engaging-with-the-community-through-rc',
}

const next = {
  nakedPageSlug: 'the-power-of-dialogue/can-rc-really-handle-challenging-cases',
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
      Nils shares on the power of listening deeply to one another, and how that
      has the potential to create connection and understanding amongst us, and
      in the long run contribute to community resilience.
    </p>
    <div style={{ maxWidth: '45rem' }} className="margin-p">
      <Video url="https://www.youtube.com/watch?v=743blVWagQU" />
    </div>
  </VideoWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
