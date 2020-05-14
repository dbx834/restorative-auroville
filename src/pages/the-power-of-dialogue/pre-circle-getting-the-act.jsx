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
  pageAbstract: 'Here we look at the Pre-Circle and its five steps.',
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
    <p>Here we look at the Pre-Circle and its five steps:</p>
    <ol className="mask-p" style={{ paddingLeft: 20 }}>
      <li>Getting the Act</li>
      <li>Hearing Meaning</li>
      <li>Explaining the RC Process</li>
      <li>"Who needs to be there?"</li>
      <li>"Would you like to go ahead?"</li>
    </ol>
    <div style={{ maxWidth: '45rem' }} className="margin-p">
      <Video url="https://www.youtube.com/watch?v=JnQcOqNSCUM" />
    </div>
  </VideoWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
