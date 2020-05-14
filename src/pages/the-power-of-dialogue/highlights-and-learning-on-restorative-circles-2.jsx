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
  pageTitle: '4.4 Highlights & Learning on Restorative Circles (2)',
  nakedPageSlug:
    'the-power-of-dialogue/highlights-and-learning-on-restorative-circles-2',
  pageAbstract:
    'Elisa is a supporter and advisor to our project, and she attended several Circles, both as a member of the Working Committee and of the Auroville Council. After a few intense Circles, we had a debrief session to review celebrations, challenges and growing edges of our project.',
  cover: 'https://img.youtube.com/vi/eBNbFbyjEHQ/hqdefault.jpg',
}

const seoData = seoHelper(pageData)

const prev = {
  nakedPageSlug:
    'the-power-of-dialogue/highlights-and-learning-on-restorative-circles-1',
}

const next = {
  nakedPageSlug:
    'the-power-of-dialogue/highlights-and-learning-on-restorative-circles-3',
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
      Elisa is a supporter and advisor to our project, and she attended several
      Circles, both as a member of the Working Committee and of the Auroville
      Council. After a few intense Circles, we had a debrief session to review
      celebrations, challenges and growing edges of our project.
    </p>
    <p>We asked Elisa the following questions:</p>
    <ol className="mask-p" style={{ paddingLeft: 0 }}>
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
      <Video url="https://youtu.be/eBNbFbyjEHQ" />
    </div>
  </VideoWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
