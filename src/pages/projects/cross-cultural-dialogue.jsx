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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../../components/Link'
import StandardPage from '../../components/wrappers/StandardPage'
import EqualHalves from '../../components/EqualHalves'
import GoldenMajorHalves from '../../components/GoldenMajorHalves'
import GrungeBox from '../../components/GrungeBox'
import PDFReader from '../../components/PDFReader'

import DisqusComments from '../../components/DisqusComments'
import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'Cross-Cultural Dialogue',
  nakedPageSlug: 'projects/cross-cultural-dialogue',
  pageAbstract:
    'In response to the recent claim of discrimination against some in the Tamil community in Auroville, we are hosting a 2-day Cross-Cultural Dialogue. We offer a space to explore this topic further and to have a deep sharing about our experiences and pain, as well as our felt sense of togetherness and aspiration to manifest Human Unity.',
}

const seoData = seoHelper(pageData)

const photos = [
  { src: '/project-assets/ccd/ccd3.jpeg', width: 1280, height: 852 },
  { src: '/project-assets/ccd/ccd1.jpeg', width: 1280, height: 852 },
  { src: '/project-assets/ccd/ccd2.jpeg', width: 1280, height: 852 },
  { src: '/project-assets/ccd/ccd4.jpeg', width: 1280, height: 852 },
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
        <BItem>Cross-Cultural Dialogue: Discrimination in Auroville</BItem>
      </Breadcrumb>
      <h1 className="mask-h3">
        Cross-Cultural Dialogue: Discrimination in Auroville
      </h1>
      <GoldenMajorHalves>
        <div>
          <p>
            In response to the recent claim of discrimination against some in
            the Tamil community in Auroville, we are hosting a 2-day
            Cross-Cultural Dialogue. We offer a space to explore this topic
            further and to have a deep sharing about our experiences and pain,
            as well as our felt sense of togetherness and aspiration to manifest
            Human Unity.
          </p>
          <p>
            With this Dialogue, our intention is not to prove facts or
            experiences, but instead to hold a space for deep listening, where
            everybody’s voice can be heard and respected, so that as a community
            we can better understand the complexities of our cross-cultural
            relations.
          </p>
          <p>
            We sincerely believe that if we can come together with a willingness
            to dialogue, we have the potential to reach a place of renewed
            understanding and trust. We hope to end with creative action
            agreements, so as to support our collective to live more
            harmoniously together.
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
      <div className="margin-p">
        <Images photos={photos} loader="gradient" columns={2} />
        &nbsp;
      </div>
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
        <PDFReader file="/project-assets/ccd/ccd-english.pdf" />
        &nbsp;
      </div>
      <div className="margin-p">
        <PDFReader file="/project-assets/ccd/ccd-tamil.pdf" />
        &nbsp;
      </div>
      <div className="margin-p">
        <PDFReader file="/project-assets/ccd/ccd-action-list.pdf" />
        &nbsp;
      </div>
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
        Minister's visit on February 24th. This led to a rift within the Working
        Committee, and the debate spilled over into the larger community. The
        Auroville Council, asked by many members of the community to look into
        the matter of feelings of discrimination, called for a Restorative
        Circle to support the Working Committee to work through some of their
        internal dynamics. In addition, Restorative Auroville also organized a
        Cross-Cultural Dialogue on the topic of discrimination. L'aura reports.
      </p>
      <p>
        <strong>
          <Link to="/writings/can-we-talk-about-discrimination-in-auroville">
            Read now ⇝
          </Link>
        </strong>
      </p>

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
