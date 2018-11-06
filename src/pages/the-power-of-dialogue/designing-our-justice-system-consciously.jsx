// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { FacebookProvider, Like as FBLike } from 'react-facebook'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../../components/StandardPage'
import DisqusComments from '../../components/DisqusComments'
import Video from '../../components/Video'

import seoHelper from '../../methods/seoHelper'
import withUrl from '../../methods/withUrl'
import data from '../../data/website.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Designing our Justice System Consciously',
  nakedPageSlug:
    'the-power-of-dialogue/designing-our-justice-system-consciously',
  pageAbstract: 'Page abstract.',
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
    <h1 className="mask-h3">Designing our Justice System Consciously</h1>
    <div style={{ position: 'relative' }} className="mask-p">
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 101,
          backgroundColor: '#ffffff',
          zIndex: 10,
          height: 20,
          width: 'calc(100% - 96px)',
        }}
      />
      <div style={{ maxWidth: 96 }} id="fb" className="margin-p">
        <FacebookProvider appId="218604115574634">
          <FBLike
            href={withUrl(
              'the-power-of-dialogue/designing-our-justice-system-consciously',
              data
            )}
            colorScheme="dark"
            showFaces
            share
          />
        </FacebookProvider>
      </div>
    </div>
    <p>
      We all have preferences and biases. For instance, do you have a bias for
      clarity/formalization or for ambiguity/emergence? It's helpful to know
      your preferences, to become more flexible and adapt to what's needed.
    </p>
    <div style={{ maxWidth: '60em' }} className="margin-p">
      <Video url="https://www.youtube.com/watch?v=ur4OvDPkoSE" />
    </div>
    <DisqusComments pageData={pageData} />
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
