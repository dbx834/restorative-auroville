// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
// import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Link } from 'gatsby'
import Loadable from 'react-loadable'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'
import Loader from '@bodhi-project/components/lib/Loader'
import Images from '@bodhi-project/components/lib/Images'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../../components/StandardPage'
import EqualHalves from '../../components/EqualHalves'
import GoldenMajorHalves from '../../components/GoldenMajorHalves'
import GrungeBox from '../../components/GrungeBox'

import DisqusComments from '../../components/DisqusComments'
import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'Cross-Cultural Dialogue',
  nakedPageSlug: 'projects/cross-cultural-dialogue',
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
  { src: '/project-assets/ccd/ccd3.jpeg', width: 1280, height: 852 },
  { src: '/project-assets/ccd/ccd1.jpeg', width: 1280, height: 852 },
  { src: '/project-assets/ccd/ccd2.jpeg', width: 1280, height: 852 },
  { src: '/project-assets/ccd/ccd4.jpeg', width: 1280, height: 852 },
]

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Initiative */
const Initiative = props => {
  return (
    <StandardPage className="" seoData={seoData}>
      <h1 className="mask-h3">Cross-Cultural Dialogue</h1>
      <EqualHalves>
        <div>
          <Image
            src="/project-assets/ccd/english-poster.jpeg"
            rawWidth={1280}
            rawHeight={905}
            style={{
              height: 'auto',
              width: '100%',
              border: 0,
              background: 'transparent',
              marginBottom: 10,
              display: 'block',
            }}
            alt="Cross-Cultural Dialogue"
          />
        </div>
        <div>
          <Image
            src="/project-assets/ccd/tamil-poster.jpeg"
            rawWidth={1280}
            rawHeight={905}
            style={{
              height: 'auto',
              width: '100%',
              border: 0,
              background: 'transparent',
              marginBottom: 10,
              display: 'block',
            }}
            alt="Cross-Cultural Dialogue"
          />
        </div>
      </EqualHalves>
      <div className="margin-p">
        <LazyPDFReader file="/project-assets/ccd/ccd-english.pdf" />
        &nbsp;
      </div>
      <div className="margin-p">
        <LazyPDFReader file="/project-assets/ccd/ccd-tamil.pdf" />
        &nbsp;
      </div>
      <div className="margin-p">
        <LazyPDFReader file="/project-assets/ccd/ccd-action-list.pdf" />
        &nbsp;
      </div>
      <div className="margin-p">
        <Images photos={photos} loader="gradient" columns={2} />
        &nbsp;
      </div>
      <GoldenMajorHalves>
        <div>
          <h2 className="mask-h4" style={{ marginBottom: 0 }}>
            <Link to="/writings/can-we-talk-about-discrimination-in-auroville">
              Can we talk about discrimination in Auroville? ⇝
            </Link>
          </h2>
          <h3 className="mask-h5">
            Read our article published in Auroville Today…
          </h3>
          <p>
            Feelings of discrimination surfaced after two Tamil members of the
            Working Committee were not given proximity passes for the Prime
            Minister's visit on February 24th. This led to a rift within the
            Working Committee, and the debate spilled over into the larger
            community. The Auroville Council, asked by many members of the
            community to look into the matter of feelings of discrimination,
            called for a Restorative Circle to support the Working Committee to
            work through some of their internal dynamics. In addition,
            Restorative Auroville also organized a Cross-Cultural Dialogue on
            the topic of discrimination. L'aura reports.
          </p>
          <p>
            <strong>
              <Link to="/writings/can-we-talk-about-discrimination-in-auroville">
                Read now ⇝
              </Link>
            </strong>
          </p>
        </div>
        <div>
          <GrungeBox>
            <p style={{ marginBottom: 0, fontWeight: 200 }} className="mask-h3">
              We filmed this event, and our documentary will come out soon...!
              Stand by!
            </p>
          </GrungeBox>
        </div>
      </GoldenMajorHalves>

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
