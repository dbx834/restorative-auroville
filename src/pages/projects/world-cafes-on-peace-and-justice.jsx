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
import StandardPage from '../../components/wrappers/StandardPage'
import DisqusComments from '../../components/DisqusComments'
import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'World Cafés on Peace & Justice',
  nakedPageSlug: 'projects/world-cafes-on-peace-and-justice',
  pageAbstract: 'Coming soon.',
}

const seoData = seoHelper(pageData)

const { Item: BItem } = Breadcrumb

const photos = [
  {
    src: '/project-assets/world-cafes-on-peace-and-justice/img1.jpg',
    width: 600,
    height: 542,
  },
  {
    src: '/project-assets/world-cafes-on-peace-and-justice/img2.jpg',
    width: 600,
    height: 424,
  },
  {
    src: '/project-assets/world-cafes-on-peace-and-justice/img3.jpg',
    width: 600,
    height: 753,
  },
  {
    src: '/project-assets/world-cafes-on-peace-and-justice/img4.jpg',
    width: 600,
    height: 402,
  },
  {
    src: '/project-assets/world-cafes-on-peace-and-justice/img5.jpg',
    width: 600,
    height: 482,
  },
  {
    src: '/project-assets/world-cafes-on-peace-and-justice/img6.jpg',
    width: 600,
    height: 543,
  },
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
        <BItem>World Cafés on Peace & Justice</BItem>
      </Breadcrumb>
      <h1 className="mask-h3">World Cafés on Peace & Justice</h1>
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
