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
  pageTitle: "2.3 Facilitators' Pre-Circle on Sexual Misconduct",
  nakedPageSlug:
    'the-power-of-dialogue/facilitators-pre-circle-on-sexual-misconduct',
  pageAbstract:
    "Here Henrike, Kati, Pranjal, L'aura and Nils have their Facilitators' Pre-Circle for a Circle that was called around women's safety and the impact of a community member's behaviour. This Circle was particularly delicate, as several decision-making bodies did not approve of our choice to respond to the call for a Circle process.",
  cover: 'https://img.youtube.com/vi/Zlv1yN7OzZ0/hqdefault.jpg',
}

const seoData = seoHelper(pageData)

const prev = {
  nakedPageSlug: 'the-power-of-dialogue/rakhals-pre-circle-with-henrike',
}

const next = {
  nakedPageSlug:
    'the-power-of-dialogue/engaging-with-restorative-circles-in-auroville',
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
      Here Henrike, Kati, Pranjal, L'aura and Nils have their Facilitators'
      Pre-Circle for a Circle that was called around women's safety and the
      impact of a community member's behaviour. This Circle was particularly
      delicate, as several decision-making bodies did not approve of our choice
      to respond to the call for a Circle process.
    </p>
    <div style={{ maxWidth: '45rem' }} className="margin-p">
      <Video url="https://www.youtube.com/watch?v=s0kiSNDBQ6Q" />
    </div>
  </VideoWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
