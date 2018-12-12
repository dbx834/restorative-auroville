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
  pageTitle: 'Filming a Live Restorative Circle',
  nakedPageSlug: 'projects/filming-a-live-restorative-circle',
  pageAbstract:
    'We have a big, big, big dream to one day film a live Circle, so that we can document the entire process and share this beautiful work with the rest of the world.',
}

const seoData = seoHelper(pageData)

const photos = [
  { src: '/project-assets/filming/img1.jpg', width: 1037, height: 790 },
  { src: '/project-assets/filming/img2.jpg', width: 594, height: 421 },
]

const { Item: BItem } = Breadcrumb

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
        <BItem>Filming a Live Restorative Circle</BItem>
      </Breadcrumb>
      <h1 className="mask-h3">Filming a Live Restorative Circle</h1>
      <p>
        We have a big, big, big dream to one day film a live Circle, so that we
        can document the entire process and share this beautiful work with the
        rest of the world. But given the size and complexity of Auroville, we
        are not surprised that we haven’t yet had a Circle where people have
        been willing to expose themselves in this way. We once came close to
        filming a big Circle that was called within an alternative school
        community, but not everyone was on board with having this “public eye”
        in their intimate space.
      </p>
      <p>
        Would you like this Circle to be yours?&nbsp;
        <Link to="/contact-us">Contact us ⇝</Link>
      </p>
      <div className="margin-p">
        <Images photos={photos} loader="gradient" columns={2} />
        &nbsp;
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
