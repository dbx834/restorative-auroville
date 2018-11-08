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
  pageTitle: "Genie's Pre Circle with Janet",
  nakedPageSlug: 'the-power-of-dialogue/genies-pre-circle-with-janet',
  pageAbstract:
    'Before entering a Restorative Circle, Facilitators meet amongst themselves to work through any challenging thoughts or feelings that might interfere with their capacity to hold space during the Circle. Eugénie Dumont (Genie), in her role as filmmaker, is also given an opportunity to be heard for her connection to the Circle.',
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
    <h1 className="mask-h3">Genie’s Pre-Circle  with Janet</h1>
    <p>
      Before entering a Restorative Circle, Facilitators meet amongst themselves
      to work through any challenging thoughts or feelings that might interfere
      with their capacity to hold space during the Circle. Eugénie Dumont
      (Genie), in her role as filmmaker, is also given an opportunity to be
      heard for her connection to the Circle.
    </p>
    <Video url="https://www.youtube.com/watch?v=jbDGU3C_xww" />
    <DisqusComments pageData={pageData} />
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
