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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'
import Images from '@bodhi-project/components/lib/Images'
import PDFReader from '@bodhi-project/components/lib/PDFReader'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../../components/Link'
import StandardPage from '../../components/wrappers/StandardPage'
import EqualHalves from '../../components/EqualHalves'
import GoldenMajorHalves from '../../components/GoldenMajorHalves'
import GrungeBox from '../../components/GrungeBox'

import DisqusComments from '../../components/DisqusComments'
import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'Cross-Cultural Dialogue',
  nakedPageSlug: 'community-events/cross-cultural-dialogue',
  pageAbstract:
    'In response to the recent claim of discrimination against some in the Tamil community in Auroville, we hosted a 2-day Cross-Cultural Dialogue. We offer a space to explore this topic further and to have a deep sharing about our experiences and pain, as well as our felt sense of togetherness and aspiration to manifest Human Unity.',
}

const seoData = seoHelper(pageData)

const photos = [
  {
    src: '/event-assets/cross-cultural-dialogue/ccd3.jpeg',
    width: 1280,
    height: 852,
  },
  {
    src: '/event-assets/cross-cultural-dialogue/ccd1.jpeg',
    width: 1280,
    height: 852,
  },
  {
    src: '/event-assets/cross-cultural-dialogue/ccd2.jpeg',
    width: 1280,
    height: 852,
  },
  {
    src: '/event-assets/cross-cultural-dialogue/ccd4.jpeg',
    width: 1280,
    height: 852,
  },
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
          <Link to="/community-events">Community Events</Link>
        </BItem>
        <BItem>Cross-Cultural Dialogue: Discrimination in Auroville</BItem>
      </Breadcrumb>
      <h1 className="mask-h3">
        Cross-Cultural Dialogue: Discrimination in Auroville
      </h1>
      <EqualHalves>
        <div>
          <Image
            src="/event-assets/cross-cultural-dialogue/english-poster.jpeg"
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
            src="/event-assets/cross-cultural-dialogue/tamil-poster.jpeg"
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
        <Images
          photos={photos}
          loader="gradient"
          columns={{ min: 2, max: 2 }}
        />
        &nbsp;
      </div>
      <div className="margin-p">
        <PDFReader url="https://www.restorativeauroville.org/event-assets/cross-cultural-dialogue/ccd-english.pdf" />
        &nbsp;
      </div>
      <div className="margin-p">
        <PDFReader url="https://www.restorativeauroville.org/event-assets/cross-cultural-dialogue/ccd-tamil.pdf" />
        &nbsp;
      </div>
      <div className="margin-p">
        <PDFReader url="https://www.restorativeauroville.org/event-assets/cross-cultural-dialogue/ccd-action-list.pdf" />
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
