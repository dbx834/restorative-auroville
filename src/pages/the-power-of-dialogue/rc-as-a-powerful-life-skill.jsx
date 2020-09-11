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
  pageTitle: '4.6 RC as a Powerful Life Skill',
  nakedPageSlug: 'the-power-of-dialogue/rc-as-a-powerful-life-skill',
  pageAbstract:
    'Jola shares about her volunteering experience and how moved she was to discover the power and potential of Restorative Circles.',
  cover: 'https://img.youtube.com/vi/Ye34-_jhtZE/hqdefault.jpg',
}

const seoData = seoHelper(pageData)

const prev = {
  nakedPageSlug:
    'the-power-of-dialogue/highlights-and-learning-on-restorative-circles-3',
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
      Jola shares about her volunteering experience and how moved she was to
      discover the power and potential of Restorative Circles.
    </p>
    <div style={{ maxWidth: '45rem' }} className="margin-p">
      <Video url="https://youtu.be/Ye34-_jhtZE" />
    </div>
  </VideoWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
