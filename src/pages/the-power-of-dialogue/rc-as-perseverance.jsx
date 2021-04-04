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
  pageTitle: '4.8 RC as Perseverance',
  nakedPageSlug: 'the-power-of-dialogue/rc-as-perseverance',
  pageAbstract:
    'Amy, Mael and Aurovik share about their experiences with Restorative Circles and explore its impact on conflict in Auroville.',
  cover: 'https://img.youtube.com/vi/B_xQAkjSwYs/hqdefault.jpg',
}

const seoData = seoHelper(pageData)

const prev = {
  nakedPageSlug: 'the-power-of-dialogue/celebrating-a-one-month-rc-immersion',
}

const next = undefined

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
      Amy, Mael and Aurovik share about their experiences with Restorative
      Circles and explore its impact on conflict in Auroville.
    </p>
    <div style={{ maxWidth: '45rem' }} className="margin-p">
      <Video url="https://youtu.be/B_xQAkjSwYs" />
    </div>
  </VideoWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
