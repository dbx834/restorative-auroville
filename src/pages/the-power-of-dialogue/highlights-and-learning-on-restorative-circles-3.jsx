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
  pageTitle: '4.5 Highlights & Learning on Restorative Circles (3)',
  nakedPageSlug:
    'the-power-of-dialogue/highlights-and-learning-on-restorative-circles-3',
  pageAbstract:
    'Sandyra is a supporter and advisor to our project, and she attended several Circles while she served on the Auroville Council. After a few intense Circles, we had a debrief session to review celebrations, challenges and growing edges of our project.',
  cover: 'https://img.youtube.com/vi/MSWFPL5NWfM/hqdefault.jpg',
}

const seoData = seoHelper(pageData)

const prev = {
  nakedPageSlug:
    'the-power-of-dialogue/highlights-and-learning-on-restorative-circles-2',
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
      Sandyra is a supporter and advisor to our project, and she attended
      several Circles while she served on the Auroville Council. After a few
      intense Circles, we had a debrief session to review celebrations,
      challenges and growing edges of our project.
    </p>
    <p>We asked Sandyra the following questions:</p>
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
      <Video url="https://youtu.be/MSWFPL5NWfM" />
    </div>
  </VideoWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
