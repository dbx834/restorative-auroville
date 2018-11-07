// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Loadable from 'react-loadable'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'
import Loader from '@bodhi-project/components/lib/Loader'
import Images from '@bodhi-project/components/lib/Images'
import OutLink from '@bodhi-project/components/lib/OutLink'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../../components/StandardPage'
import EqualHalves from '../../components/EqualHalves'

import DisqusComments from '../../components/DisqusComments'
import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'Restorative Circles in Aikiyam School',
  nakedPageSlug: 'projects/restorative-circles-in-aikiyam-school',
  pageAbstract: 'Page abstract.',
}

const seoData = seoHelper(pageData)

const LazyPDFReader = Loadable({
  loader: () => import('../../components/PDFReader'),
  loading: Loader,
  render(loaded, props) {
    const Component = loaded.default
    return <Component {...props} />
  },
})

const photos = [
  { src: '/project-assets/aikiyam/aikiyam1.jpeg', width: 1280, height: 960 },
  { src: '/project-assets/aikiyam/aikiyam2.jpeg', width: 1280, height: 960 },
  { src: '/project-assets/aikiyam/aikiyam3.jpeg', width: 1280, height: 774 },
  { src: '/project-assets/aikiyam/aikiyam4.jpeg', width: 1280, height: 774 },
  { src: '/project-assets/aikiyam/aikiyam6.jpeg', width: 1280, height: 960 },
  { src: '/project-assets/aikiyam/aikiyam5.jpeg', width: 1280, height: 960 },
]

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Initiative */
const Initiative = props => {
  return (
    <StandardPage className="" seoData={seoData}>
      <h1 className="mask-h3">Restorative Circles in Aikiyam School</h1>
      <p>
        <OutLink to="https://www.aikiyamschool.org/">Aikiyam School</OutLink> is
        one of Auroville’s outreach schools. The staff and teachers there asked
        us to support them with conflict resolution, and so we’ve been helping
        the teachers build an RC System amongst themselves.
      </p>
      <LazyPDFReader file="/project-assets/aikiyam/conflict-resolution.pdf" />
      <LazyPDFReader file="/project-assets/aikiyam/intensive.pdf" />
      <Images photos={photos} loader="gradient" columns={3} />
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
