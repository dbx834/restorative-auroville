// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Images from '@bodhi-project/components/lib/Images'

import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../../components/Link'
import PrevNext from '../../components/PrevNext'
import StandardPage from '../../components/wrappers/StandardPage'
import DisqusComments from '../../components/DisqusComments'
import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'Restorative Circles in TLC (The Learning Community School)',
  nakedPageSlug:
    'system-building-initiatives/restorative-circles-in-the-learning-community-school',
  pageAbstract:
    'In late 2015, we were invited to share RC with the teachers at TLC (The Learning Community School). They developed a System and facilitated a couple of Circles among the children, while we facilitated a couple of Circles among the facilitators and parents.',
}

const seoData = seoHelper(pageData)

const { Item: BItem } = Breadcrumb

const photos = [
  { src: '/sbi-assets/tlc/img1.jpg', width: 600, height: 979 },
  { src: '/sbi-assets/tlc/img2.jpg', width: 600, height: 338 },
  { src: '/sbi-assets/tlc/img3.jpg', width: 600, height: 338 },
  { src: '/sbi-assets/tlc/img4.jpg', width: 600, height: 435 },
  { src: '/sbi-assets/tlc/img5.jpg', width: 600, height: 430 },
  { src: '/sbi-assets/tlc/img6.jpg', width: 600, height: 800 },
  { src: '/sbi-assets/tlc/img7.jpg', width: 600, height: 800 },
  { src: '/sbi-assets/tlc/img8.jpg', width: 600, height: 800 },
  { src: '/sbi-assets/tlc/img9.jpg', width: 600, height: 361 },
  { src: '/sbi-assets/tlc/img10.jpg', width: 600, height: 1444 },
  { src: '/sbi-assets/tlc/img11.jpg', width: 600, height: 828 },
  { src: '/sbi-assets/tlc/img12.jpg', width: 600, height: 327 },
  { src: '/sbi-assets/tlc/img15.jpeg', width: 1280, height: 720 },
  { src: '/sbi-assets/tlc/img13.jpg', width: 600, height: 739 },
  { src: '/sbi-assets/tlc/img14.jpg', width: 600, height: 1067 },
]

const prev = {
  nakedPageSlug:
    'system-building-initiatives/restorative-circles-in-aikiyam-school',
}

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Initiative */
const Initiative = props => {
  return (
    <StandardPage className="" seoData={seoData}>
      <Breadcrumb className="mask-p" separator="»" style={{ marginBottom: 30 }}>
        <BItem>
          <Link to="/">Home</Link>
        </BItem>
        <BItem>
          <Link to="/system-building-initiatives">
            System-Building Initiatives
          </Link>
        </BItem>
        <BItem>
          Restorative Circles in TLC (The Learning Community School)
        </BItem>
      </Breadcrumb>
      <h1 className="mask-h3">
        Restorative Circles in TLC (The Learning Community School)
      </h1>
      <p>
        In late 2015, we were invited to share RC with the teachers at TLC (The
        Learning Community School). They developed a System and facilitated a
        couple of Circles among the children, while we facilitated a couple of
        Circles among the facilitators and parents.
      </p>
      <div className="mask-p">
        <Images
          photos={photos}
          loader="gradient"
          columns={{ min: 2, max: 3 }}
        />
      </div>
      <PrevNext prev={prev} />
      <DisqusComments pageData={pageData} />
    </StandardPage>
  )
}

Initiative.propTypes = {
  data: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Initiative
