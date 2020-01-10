// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Video from '@bodhi-project/components/lib/Video'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import VideoWrapper from '../../components/wrappers/VideoWrapper'

import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: '4.3 Highlights & Learning on Restorative Circles (1)',
  nakedPageSlug:
    'the-power-of-dialogue/highlights-and-learning-on-restorative-circles-1',
  pageAbstract:
    'Aurovik is a supporter and advisor to our project, and he attended several Circles either as a member of the Auroville Council or as a Resource Person to our Working Groups. After a few intense Circles, we had a debrief session to review celebrations, challenges and growing edges of our project.',
}

const seoData = seoHelper(pageData)

const prev = {
  nakedPageSlug: 'the-power-of-dialogue/the-value-of-rc-facilitation',
}

const next = {
  nakedPageSlug:
    'the-power-of-dialogue/highlights-and-learning-on-restorative-circles-2',
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
      Aurovik is a supporter and advisor to our project, and he attended several
      Circles either as a member of the Auroville Council or as a Resource
      Person to our Working Groups. After a few intense Circles, we had a
      debrief session to review celebrations, challenges and growing edges of
      our project.
    </p>
    <p>We asked Aurovik the following questions:</p>
    <ol className="mask-p">
      <li>
        What has inspired/touched you about our exploration with RC in Auroville
        (in general/specific)?
      </li>
      <li>
        What has challenged you about our exploration with RC in Auroville (in
        general/specific)?
      </li>
      <li>
        How do you think RC is contributing to Auroville's collective growth?
      </li>
      <li>
        What do you think we need to pay particular attention to as we move
        forward and deepen RC in Auroville?
      </li>
    </ol>
    <div style={{ maxWidth: '45rem' }} className="margin-p">
      <Video url="https://youtu.be/thEan8VgZiE" />
    </div>
  </VideoWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
