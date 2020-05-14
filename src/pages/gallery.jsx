// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";

// import map from "lodash/map";
// import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Gallery from 'react-photo-gallery'
import MediaQuery from 'react-responsive'
import GalleryX from '@bodhi-project/components/lib/gatsby/Gallery'

import { Header } from '@bodhi-project/semantic-webflow'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Gallery',
  nakedPageSlug: 'gallery',
  pageAbstract:
    'Restorative Auroville is an independent project that aims to bring the practice of Restorative Circles, a holistic, community-based form of conflict resolution, to Auroville, and to explore what a consciously designed justice system could look like here – one that reflects our ideals, but that is also effective and has the power to bring about constructive change, both on the individual and community levels.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    nvcX87: file(relativePath: { eq: "gallery/nvcX87.jpg" }) {
      ...max900
    }
    nvcX1: file(relativePath: { eq: "gallery/nvcX1.jpg" }) {
      ...max900
    }
    nvcX2: file(relativePath: { eq: "gallery/nvcX2.jpg" }) {
      ...max900
    }
    nvcX4: file(relativePath: { eq: "gallery/nvcX4.jpg" }) {
      ...max900
    }
    nvcX86: file(relativePath: { eq: "gallery/nvcX86.jpg" }) {
      ...max900
    }
    nvcX3: file(relativePath: { eq: "gallery/nvcX3.jpg" }) {
      ...max900
    }
    nvcX83: file(relativePath: { eq: "gallery/nvcX83.jpg" }) {
      ...max900
    }
    nvcX6: file(relativePath: { eq: "gallery/nvcX6.jpg" }) {
      ...max900
    }
    nvcX7: file(relativePath: { eq: "gallery/nvcX7.jpg" }) {
      ...max900
    }
    nvcX8: file(relativePath: { eq: "gallery/nvcX8.jpg" }) {
      ...max900
    }
    nvcX9: file(relativePath: { eq: "gallery/nvcX9.jpg" }) {
      ...max900
    }
    nvcX10: file(relativePath: { eq: "gallery/nvcX10.jpg" }) {
      ...max900
    }
    nvcX11: file(relativePath: { eq: "gallery/nvcX11.jpg" }) {
      ...max900
    }
    nvcX12: file(relativePath: { eq: "gallery/nvcX12.jpg" }) {
      ...max900
    }
    nvcX13: file(relativePath: { eq: "gallery/nvcX13.jpg" }) {
      ...max900
    }
    nvcX14: file(relativePath: { eq: "gallery/nvcX14.jpg" }) {
      ...max900
    }
    nvcX15: file(relativePath: { eq: "gallery/nvcX15.jpg" }) {
      ...max900
    }
    nvcX16: file(relativePath: { eq: "gallery/nvcX16.jpg" }) {
      ...max900
    }
    nvcX17: file(relativePath: { eq: "gallery/nvcX17.jpg" }) {
      ...max900
    }
    nvcX18: file(relativePath: { eq: "gallery/nvcX18.jpg" }) {
      ...max900
    }
    nvcX19: file(relativePath: { eq: "gallery/nvcX19.jpg" }) {
      ...max900
    }
    nvcX20: file(relativePath: { eq: "gallery/nvcX20.jpg" }) {
      ...max900
    }
    nvcX21: file(relativePath: { eq: "gallery/nvcX21.jpg" }) {
      ...max900
    }
    nvcX22: file(relativePath: { eq: "gallery/nvcX22.jpg" }) {
      ...max900
    }
    nvcX23: file(relativePath: { eq: "gallery/nvcX23.jpg" }) {
      ...max900
    }
    nvcX24: file(relativePath: { eq: "gallery/nvcX24.jpg" }) {
      ...max900
    }
    nvcX25: file(relativePath: { eq: "gallery/nvcX25.jpg" }) {
      ...max900
    }
    nvcX26: file(relativePath: { eq: "gallery/nvcX26.jpg" }) {
      ...max900
    }
    nvcX27: file(relativePath: { eq: "gallery/nvcX27.jpg" }) {
      ...max900
    }
    nvcX28: file(relativePath: { eq: "gallery/nvcX28.jpg" }) {
      ...max900
    }
    nvcX29: file(relativePath: { eq: "gallery/nvcX29.jpg" }) {
      ...max900
    }
    nvcX30: file(relativePath: { eq: "gallery/nvcX30.jpg" }) {
      ...max900
    }
    nvcX31: file(relativePath: { eq: "gallery/nvcX31.jpg" }) {
      ...max900
    }
    nvcX32: file(relativePath: { eq: "gallery/nvcX32.jpg" }) {
      ...max900
    }
    nvcX33: file(relativePath: { eq: "gallery/nvcX33.jpg" }) {
      ...max900
    }
    nvcX34: file(relativePath: { eq: "gallery/nvcX34.jpg" }) {
      ...max900
    }
    nvcX35: file(relativePath: { eq: "gallery/nvcX35.jpg" }) {
      ...max900
    }
    nvcX36: file(relativePath: { eq: "gallery/nvcX36.jpg" }) {
      ...max900
    }
    nvcX37: file(relativePath: { eq: "gallery/nvcX37.jpg" }) {
      ...max900
    }
    nvcX38: file(relativePath: { eq: "gallery/nvcX38.jpg" }) {
      ...max900
    }
    nvcX39: file(relativePath: { eq: "gallery/nvcX39.jpg" }) {
      ...max900
    }
    nvcX40: file(relativePath: { eq: "gallery/nvcX40.jpg" }) {
      ...max900
    }
    nvcX41: file(relativePath: { eq: "gallery/nvcX41.jpg" }) {
      ...max900
    }
    nvcX42: file(relativePath: { eq: "gallery/nvcX42.jpg" }) {
      ...max900
    }
    nvcX43: file(relativePath: { eq: "gallery/nvcX43.jpg" }) {
      ...max900
    }
    nvcX44: file(relativePath: { eq: "gallery/nvcX44.jpg" }) {
      ...max900
    }
    nvcX45: file(relativePath: { eq: "gallery/nvcX45.jpg" }) {
      ...max900
    }
    nvcX46: file(relativePath: { eq: "gallery/nvcX46.jpg" }) {
      ...max900
    }
    nvcX47: file(relativePath: { eq: "gallery/nvcX47.jpg" }) {
      ...max900
    }
    nvcX48: file(relativePath: { eq: "gallery/nvcX48.jpg" }) {
      ...max900
    }
    nvcX49: file(relativePath: { eq: "gallery/nvcX49.jpg" }) {
      ...max900
    }
    nvcX50: file(relativePath: { eq: "gallery/nvcX50.jpg" }) {
      ...max900
    }
    nvcX51: file(relativePath: { eq: "gallery/nvcX51.jpg" }) {
      ...max900
    }
    nvcX52: file(relativePath: { eq: "gallery/nvcX52.jpg" }) {
      ...max900
    }
    nvcX53: file(relativePath: { eq: "gallery/nvcX53.jpg" }) {
      ...max900
    }
    nvcX54: file(relativePath: { eq: "gallery/nvcX54.jpg" }) {
      ...max900
    }
    nvcX55: file(relativePath: { eq: "gallery/nvcX55.jpg" }) {
      ...max900
    }
    nvcX56: file(relativePath: { eq: "gallery/nvcX56.jpg" }) {
      ...max900
    }
    nvcX57: file(relativePath: { eq: "gallery/nvcX57.jpg" }) {
      ...max900
    }
    nvcX58: file(relativePath: { eq: "gallery/nvcX58.jpg" }) {
      ...max900
    }
    nvcX59: file(relativePath: { eq: "gallery/nvcX59.jpg" }) {
      ...max900
    }
    nvcX60: file(relativePath: { eq: "gallery/nvcX60.jpg" }) {
      ...max900
    }
    nvcX61: file(relativePath: { eq: "gallery/nvcX61.jpg" }) {
      ...max900
    }
    nvcX62: file(relativePath: { eq: "gallery/nvcX62.jpg" }) {
      ...max900
    }
    nvcX63: file(relativePath: { eq: "gallery/nvcX63.jpg" }) {
      ...max900
    }
    nvcX64: file(relativePath: { eq: "gallery/nvcX64.jpg" }) {
      ...max900
    }
    nvcX65: file(relativePath: { eq: "gallery/nvcX65.jpg" }) {
      ...max900
    }
    nvcX66: file(relativePath: { eq: "gallery/nvcX66.jpg" }) {
      ...max900
    }
    nvcX67: file(relativePath: { eq: "gallery/nvcX67.jpg" }) {
      ...max900
    }
    nvcX68: file(relativePath: { eq: "gallery/nvcX68.jpg" }) {
      ...max900
    }
    nvcX69: file(relativePath: { eq: "gallery/nvcX69.jpg" }) {
      ...max900
    }
    nvcX70: file(relativePath: { eq: "gallery/nvcX70.jpg" }) {
      ...max900
    }
    nvcX71: file(relativePath: { eq: "gallery/nvcX71.jpg" }) {
      ...max900
    }
    nvcX72: file(relativePath: { eq: "gallery/nvcX72.jpg" }) {
      ...max900
    }
    nvcX73: file(relativePath: { eq: "gallery/nvcX73.jpg" }) {
      ...max900
    }
    nvcX74: file(relativePath: { eq: "gallery/nvcX74.jpg" }) {
      ...max900
    }
    nvcX75: file(relativePath: { eq: "gallery/nvcX75.jpg" }) {
      ...max900
    }
    nvcX76: file(relativePath: { eq: "gallery/nvcX76.jpg" }) {
      ...max900
    }
    nvcX77: file(relativePath: { eq: "gallery/nvcX77.jpg" }) {
      ...max900
    }
    nvcX78: file(relativePath: { eq: "gallery/nvcX78.jpg" }) {
      ...max900
    }
    nvcX79: file(relativePath: { eq: "gallery/nvcX79.jpg" }) {
      ...max900
    }
    nvcX80: file(relativePath: { eq: "gallery/nvcX80.jpg" }) {
      ...max900
    }
    nvcX81: file(relativePath: { eq: "gallery/nvcX81.jpg" }) {
      ...max900
    }
    nvcX82: file(relativePath: { eq: "gallery/nvcX82.jpg" }) {
      ...max900
    }
    nvcX84: file(relativePath: { eq: "gallery/nvcX84.jpg" }) {
      ...max900
    }
    nvcX85: file(relativePath: { eq: "gallery/nvcX85.jpg" }) {
      ...max900
    }
    nvcX88: file(relativePath: { eq: "gallery/nvcX88.jpg" }) {
      ...max900
    }
  }
`

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = props => (
  <StandardPage className="" seoData={seoData} {...props}>
    <Header>
      <h1 className="mask-h3">Gallery: Restorative Auroville in Action…</h1>
    </Header>
    <div className="mask-p">
      <GalleryX
        data={props.data}
        lookup="nvcX"
        columns={{ min: 2, max: 3 }}
        Img={Img}
        Gallery={Gallery}
        MediaQuery={MediaQuery}
      />
    </div>
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
