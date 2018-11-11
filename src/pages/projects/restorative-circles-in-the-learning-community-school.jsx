// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Images from '@bodhi-project/components/lib/Images'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../../components/StandardPage'
import DisqusComments from '../../components/DisqusComments'
import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'Restorative Circles in TLC (the Learning Community School)',
  nakedPageSlug:
    'projects/restorative-circles-in-the-learning-community-school',
  pageAbstract: 'Coming soon.',
}

const seoData = seoHelper(pageData)

const { Item: BItem } = Breadcrumb

const photos = [
  { src: '/project-assets/tlc/img1.jpg', width: 600, height: 979 },
  { src: '/project-assets/tlc/img2.jpg', width: 600, height: 338 },
  { src: '/project-assets/tlc/img3.jpg', width: 600, height: 338 },
  { src: '/project-assets/tlc/img4.jpg', width: 600, height: 435 },
  { src: '/project-assets/tlc/img5.jpg', width: 600, height: 430 },
  { src: '/project-assets/tlc/img6.jpg', width: 600, height: 800 },
  { src: '/project-assets/tlc/img7.jpg', width: 600, height: 800 },
  { src: '/project-assets/tlc/img8.jpg', width: 600, height: 800 },
  { src: '/project-assets/tlc/img9.jpg', width: 600, height: 361 },
  { src: '/project-assets/tlc/img10.jpg', width: 600, height: 1444 },
  { src: '/project-assets/tlc/img11.jpg', width: 600, height: 828 },
  { src: '/project-assets/tlc/img12.jpg', width: 600, height: 327 },
  { src: '/project-assets/tlc/img13.jpg', width: 600, height: 739 },
  { src: '/project-assets/tlc/img14.jpg', width: 600, height: 1067 },
]

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
          <Link to="/projects/ongoing">Projects</Link>
        </BItem>
        <BItem>
          <Link to="/projects/past">Past Projects</Link>
        </BItem>
        <BItem>
          Restorative Circles in TLC (the Learning Community School)
        </BItem>
      </Breadcrumb>
      <h1 className="mask-h3">
        Restorative Circles in TLC (the Learning Community School)
      </h1>
      <p>Coming soon...</p>
      <div className="mask-p">
        <Images photos={photos} loader="gradient" />
      </div>
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
