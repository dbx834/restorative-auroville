// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import map from "lodash/map";
// import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Header } from '@bodhi-project/semantic-webflow'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
// import Image from '@bodhi-project/components/lib/Image'
import Images from '@bodhi-project/components/lib/Images'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
// import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

import nvcX1 from '../assets/gallery/nvcX1.jpg'
import nvcX2 from '../assets/gallery/nvcX2.jpg'
import nvcX4 from '../assets/gallery/nvcX4.jpg'
// import nvcX5 from "../assets/gallery/nvcX5.jpg";
import nvcX6 from '../assets/gallery/nvcX6.jpg'
import nvcX7 from '../assets/gallery/nvcX7.jpg'
import nvcX8 from '../assets/gallery/nvcX8.jpg'
// import nvcX9 from "../assets/gallery/nvcX9.jpg";
import nvcX10 from '../assets/gallery/nvcX10.jpg'
import nvcX11 from '../assets/gallery/nvcX11.jpg'
import nvcX12 from '../assets/gallery/nvcX12.jpg'
import nvcX13 from '../assets/gallery/nvcX13.jpg'
import nvcX14 from '../assets/gallery/nvcX14.jpg'
import nvcX15 from '../assets/gallery/nvcX15.jpg'
import nvcX16 from '../assets/gallery/nvcX16.jpg'
import nvcX17 from '../assets/gallery/nvcX17.jpg'
import nvcX18 from '../assets/gallery/nvcX18.jpg'
import nvcX19 from '../assets/gallery/nvcX19.jpg'
import nvcX20 from '../assets/gallery/nvcX20.jpg'
import nvcX21 from '../assets/gallery/nvcX21.jpg'
import nvcX22 from '../assets/gallery/nvcX22.jpg'
import nvcX23 from '../assets/gallery/nvcX23.jpg'
import nvcX24 from '../assets/gallery/nvcX24.jpg'
import nvcX25 from '../assets/gallery/nvcX25.jpg'
import nvcX26 from '../assets/gallery/nvcX26.jpg'
import nvcX27 from '../assets/gallery/nvcX27.jpg'
import nvcX28 from '../assets/gallery/nvcX28.jpg'
import nvcX29 from '../assets/gallery/nvcX29.jpg'
import nvcX30 from '../assets/gallery/nvcX30.jpg'
import nvcX31 from '../assets/gallery/nvcX31.jpg'
import nvcX32 from '../assets/gallery/nvcX32.jpg'
import nvcX33 from '../assets/gallery/nvcX33.jpg'
import nvcX34 from '../assets/gallery/nvcX34.jpg'
import nvcX35 from '../assets/gallery/nvcX35.jpg'
import nvcX36 from '../assets/gallery/nvcX36.jpg'
import nvcX37 from '../assets/gallery/nvcX37.jpg'
import nvcX38 from '../assets/gallery/nvcX38.jpg'
import nvcX39 from '../assets/gallery/nvcX39.jpg'
import nvcX40 from '../assets/gallery/nvcX40.jpg'
import nvcX41 from '../assets/gallery/nvcX41.jpg'
import nvcX42 from '../assets/gallery/nvcX42.jpg'
import nvcX43 from '../assets/gallery/nvcX43.jpg'
import nvcX44 from '../assets/gallery/nvcX44.jpg'
import nvcX45 from '../assets/gallery/nvcX45.jpg'
import nvcX46 from '../assets/gallery/nvcX46.jpg'
import nvcX47 from '../assets/gallery/nvcX47.jpg'
import nvcX48 from '../assets/gallery/nvcX48.jpg'
import nvcX49 from '../assets/gallery/nvcX49.jpg'
import nvcX50 from '../assets/gallery/nvcX50.jpg'
import nvcX51 from '../assets/gallery/nvcX51.jpg'
import nvcX52 from '../assets/gallery/nvcX52.jpg'
import nvcX53 from '../assets/gallery/nvcX53.jpg'
import nvcX54 from '../assets/gallery/nvcX54.jpg'
import nvcX55 from '../assets/gallery/nvcX55.jpg'
import nvcX56 from '../assets/gallery/nvcX56.jpg'
import nvcX57 from '../assets/gallery/nvcX57.jpg'
import nvcX58 from '../assets/gallery/nvcX58.jpg'
import nvcX59 from '../assets/gallery/nvcX59.jpg'
import nvcX60 from '../assets/gallery/nvcX60.jpg'
import nvcX61 from '../assets/gallery/nvcX61.jpg'
import nvcX62 from '../assets/gallery/nvcX62.jpg'
import nvcX63 from '../assets/gallery/nvcX63.jpg'
import nvcX64 from '../assets/gallery/nvcX64.jpg'
import nvcX65 from '../assets/gallery/nvcX65.jpg'
import nvcX66 from '../assets/gallery/nvcX66.jpg'
import nvcX67 from '../assets/gallery/nvcX67.jpg'
import nvcX68 from '../assets/gallery/nvcX68.jpg'
import nvcX69 from '../assets/gallery/nvcX69.jpg'
import nvcX70 from '../assets/gallery/nvcX70.jpg'
import nvcX71 from '../assets/gallery/nvcX71.jpg'
import nvcX72 from '../assets/gallery/nvcX72.jpg'
import nvcX73 from '../assets/gallery/nvcX73.jpg'
import nvcX74 from '../assets/gallery/nvcX74.jpg'
import nvcX75 from '../assets/gallery/nvcX75.jpg'
import nvcX76 from '../assets/gallery/nvcX76.jpg'
import nvcX77 from '../assets/gallery/nvcX77.jpg'
import nvcX78 from '../assets/gallery/nvcX78.jpg'
import nvcX85 from '../assets/gallery/nvcX85.jpg'
import nvcX79 from '../assets/gallery/nvcX79.jpg'
import nvcX80 from '../assets/gallery/nvcX80.jpg'
import nvcX81 from '../assets/gallery/nvcX81.jpg'
import nvcX82 from '../assets/gallery/nvcX82.jpg'
import nvcX83 from '../assets/gallery/nvcX83.jpg'
import nvcX84 from '../assets/gallery/nvcX84.jpg'

const photos = [
  { src: nvcX1, width: 600, height: 450 },
  { src: nvcX2, width: 600, height: 450 },
  { src: nvcX4, width: 600, height: 418 },
  { src: nvcX78, width: 600, height: 800 },
  { src: nvcX6, width: 600, height: 367 },
  { src: nvcX7, width: 600, height: 367 },
  { src: nvcX8, width: 600, height: 450 },
  { src: nvcX10, width: 600, height: 690 },
  { src: nvcX11, width: 600, height: 400 },
  { src: nvcX12, width: 600, height: 493 },
  { src: nvcX13, width: 600, height: 388 },
  { src: nvcX14, width: 600, height: 800 },
  { src: nvcX15, width: 600, height: 214 },
  { src: nvcX16, width: 600, height: 450 },
  { src: nvcX17, width: 600, height: 414 },
  { src: nvcX18, width: 600, height: 1067 },
  { src: nvcX19, width: 600, height: 800 },
  { src: nvcX20, width: 600, height: 411 },
  { src: nvcX21, width: 600, height: 450 },
  { src: nvcX22, width: 600, height: 450 },
  { src: nvcX23, width: 600, height: 450 },
  { src: nvcX24, width: 600, height: 450 },
  { src: nvcX25, width: 600, height: 441 },
  { src: nvcX26, width: 600, height: 456 },
  { src: nvcX27, width: 600, height: 450 },
  { src: nvcX28, width: 600, height: 400 },
  { src: nvcX29, width: 600, height: 400 },
  { src: nvcX30, width: 600, height: 450 },
  { src: nvcX31, width: 600, height: 354 },
  { src: nvcX32, width: 600, height: 450 },
  { src: nvcX33, width: 600, height: 450 },
  { src: nvcX34, width: 600, height: 450 },
  { src: nvcX35, width: 600, height: 450 },
  { src: nvcX36, width: 600, height: 450 },
  { src: nvcX37, width: 600, height: 400 },
  { src: nvcX38, width: 600, height: 450 },
  { src: nvcX39, width: 600, height: 450 },
  { src: nvcX40, width: 600, height: 450 },
  { src: nvcX41, width: 600, height: 399 },
  { src: nvcX42, width: 600, height: 399 },
  { src: nvcX43, width: 600, height: 399 },
  { src: nvcX44, width: 600, height: 399 },
  { src: nvcX45, width: 600, height: 450 },
  { src: nvcX46, width: 600, height: 330 },
  { src: nvcX47, width: 600, height: 450 },
  { src: nvcX48, width: 600, height: 450 },
  { src: nvcX49, width: 600, height: 1067 },
  { src: nvcX50, width: 600, height: 776 },
  { src: nvcX51, width: 600, height: 424 },
  { src: nvcX52, width: 600, height: 243 },
  { src: nvcX53, width: 600, height: 450 },
  { src: nvcX54, width: 600, height: 338 },
  { src: nvcX55, width: 600, height: 261 },
  { src: nvcX56, width: 600, height: 400 },
  { src: nvcX57, width: 600, height: 508 },
  { src: nvcX58, width: 600, height: 848 },
  { src: nvcX59, width: 600, height: 424 },
  { src: nvcX60, width: 600, height: 806 },
  { src: nvcX61, width: 600, height: 400 },
  { src: nvcX62, width: 600, height: 400 },
  { src: nvcX63, width: 600, height: 450 },
  { src: nvcX64, width: 600, height: 450 },
  { src: nvcX65, width: 600, height: 450 },
  { src: nvcX66, width: 600, height: 450 },
  { src: nvcX67, width: 600, height: 450 },
  { src: nvcX68, width: 600, height: 450 },
  { src: nvcX69, width: 600, height: 450 },
  { src: nvcX70, width: 600, height: 450 },
  { src: nvcX71, width: 600, height: 450 },
  { src: nvcX72, width: 600, height: 450 },
  { src: nvcX73, width: 600, height: 382 },
  { src: nvcX74, width: 600, height: 249 },
  { src: nvcX75, width: 600, height: 401 },
  { src: nvcX76, width: 600, height: 401 },
  { src: nvcX77, width: 600, height: 450 },
  { src: nvcX85, width: 600, height: 450 },
  { src: nvcX79, width: 600, height: 425 },
  { src: nvcX80, width: 600, height: 603 },
  { src: nvcX81, width: 600, height: 415 },
  { src: nvcX82, width: 600, height: 555 },
  { src: nvcX83, width: 600, height: 450 },
]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Gallery',
  nakedPageSlug: 'gallery',
  pageAbstract:
    'Restorative Auroville is an independent project that aims to bring the practice of Restorative Circles, a holistic, community-based form of conflict resolution, to Auroville, and to explore what a consciously designed justice system could look like here – one that reflects our ideals, but that is also effective and has the power to bring about constructive change, both on the individual and community levels.',
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
    <Header>
      <h1 className="mask-h3">Gallery – Restorative Auroville in Action…</h1>
    </Header>
    <Images photos={photos} loader="gradient" />
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
