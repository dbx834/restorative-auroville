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
  pageTitle: "2.2 Rakhal's Pre-Circle with Henrike",
  nakedPageSlug: 'the-power-of-dialogue/rakhals-pre-circle-with-henrike',
  pageAbstract:
    'Rakhal was named for this Circle, and here is his Pre-Circle with our Co-Facilitator, Henrike.',
  cover: 'https://img.youtube.com/vi/Zlv1yN7OzZ0/hqdefault.jpg',
}

const seoData = seoHelper(pageData)

const prev = {
  nakedPageSlug: 'the-power-of-dialogue/genies-pre-circle-with-janet',
}

const next = {
  nakedPageSlug:
    'the-power-of-dialogue/facilitators-pre-circle-on-sexual-misconduct',
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
      Rakhal was named for this Circle, and here is his Pre-Circle with our
      Co-Facilitator, Henrike.
    </p>
    <div style={{ maxWidth: '45rem' }} className="margin-p">
      <Video url="https://youtu.be/Zlv1yN7OzZ0" />
    </div>
  </VideoWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
