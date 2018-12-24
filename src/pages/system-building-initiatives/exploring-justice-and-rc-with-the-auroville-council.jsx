// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'
import PDFReader from '@bodhi-project/components/lib/PDFReader'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../../components/Link'
import StandardPage from '../../components/wrappers/StandardPage'
import DisqusComments from '../../components/DisqusComments'

import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'Exploring Justice and RC with the Auroville Council',
  nakedPageSlug:
    'system-building-initiatives/exploring-justice-and-rc-with-the-auroville-council',
  pageAbstract:
    'Our dream: that our collective processes and individual posture would include: Being rooted in oneness; feeling a lived aspiration for this oneness, Walking towards each other with an open heart...',
}

const seoData = seoHelper(pageData)

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
          <Link to="/system-building-initiatives">
            System Building Initiatives
          </Link>
        </BItem>
        <BItem>Exploring Justice and RC with the Auroville Council</BItem>
      </Breadcrumb>
      <h1 className="mask-h3">
        Exploring Justice and RC with the Auroville Council
      </h1>
      <Image
        src="/projects/avCouncil.jpg"
        rawWidth={1440}
        rawHeight={900}
        style={{
          height: 'auto',
          maxWidth: '600px',
          border: 0,
          background: 'transparent',
          marginBottom: 10,
          display: 'block',
          marginLeft: 0,
        }}
        alt="Exploring Justice and RC with the Auroville Council"
      />
      <div className="margin-p">
        <PDFReader url="https://www.restorativeauroville.org/project-assets/avc/avc.pdf" />
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
