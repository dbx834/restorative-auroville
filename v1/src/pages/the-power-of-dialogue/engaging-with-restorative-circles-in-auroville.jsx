// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../../components/StandardPage'
import DisqusComments from '../../components/DisqusComments'
import Video from '../../components/Video'
import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Engaging with Restorative Circles in Auroville',
  nakedPageSlug:
    'the-power-of-dialogue/engaging-with-restorative-circles-in-auroville',
  pageAbstract:
    "L'aura shares about her experience of engaging with Restorative Circles in Auroville and how it's received by the community.",
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = () => (
  <StandardPage className="" seoData={seoData}>
    <h1 className="mask-h3">Engaging with Restorative Circles in Auroville</h1>
    <p>
      L'aura shares about her experience of engaging with Restorative Circles in
      Auroville and how it's received by the community.
    </p>
    <Video url="https://www.youtube.com/watch?v=tuJrfIFd3IY" />
    <DisqusComments pageData={pageData} />
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
