// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
// import { css } from 'glamor'

// import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Gallery from '@bodhi-project/components/lib/gatsby/Gallery'
import Division from '@bodhi-project/components/lib/Division'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import CommunityEventWrapper from '../../components/wrappers/CommunityEventWrapper'

import Link from '../../components/Link'
import GrungeBox from '../../components/GrungeBox'

import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

const pageData = {
  pageTitle: 'Cross-Cultural Dialogue',
  nakedPageSlug: 'community-events/cross-cultural-dialogue',
  pageAbstract:
    'In response to the recent claim of discrimination against some in the Tamil community in Auroville, we hosted a 2-day Cross-Cultural Dialogue. We offer a space to explore this topic further and to have a deep sharing about our experiences and pain, as well as our felt sense of togetherness and aspiration to manifest Human Unity.',
}

const seoData = seoHelper(pageData)

const { Item: BItem } = Breadcrumb

const prev = {
  nakedPageSlug: 'community-events/walk-of-hope-in-auroville-and-the-bioregion',
}

const next = {
  nakedPageSlug: 'community-events/women-for-justice',
}

const notes = [
  {
    url: 'https://www.restorativeauroville.org/pdfs2/ccd-english.pdf',
    title: 'See invitation (English)',
  },
  {
    url: 'https://www.restorativeauroville.org/pdfs2/ccd-tamil.pdf',
    title: 'See invitation (Tamil)',
  },
  {
    url: 'https://www.restorativeauroville.org/pdfs2/ccd-action-list.pdf',
    title: 'Action Agreements',
  },
]

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    englishPoster: file(
      relativePath: {
        eq: "community-events/cross-cultural-dialogue/english-poster2.jpg"
      }
    ) {
      ...max900
    }
    tamilPoster: file(
      relativePath: {
        eq: "community-events/cross-cultural-dialogue/tamil-poster2.jpg"
      }
    ) {
      ...max900
    }
    ccd3: file(
      relativePath: { eq: "community-events/cross-cultural-dialogue/ccd3.jpeg" }
    ) {
      ...max900
    }
    ccd1: file(
      relativePath: { eq: "community-events/cross-cultural-dialogue/ccd1.jpeg" }
    ) {
      ...max900
    }
    ccd2: file(
      relativePath: { eq: "community-events/cross-cultural-dialogue/ccd2.jpeg" }
    ) {
      ...max900
    }
    ccd4: file(
      relativePath: { eq: "community-events/cross-cultural-dialogue/ccd4.jpeg" }
    ) {
      ...max900
    }
  }
`

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Initiative */
const Initiative = props => {
  return (
    <CommunityEventWrapper
      className=""
      seoData={seoData}
      next={next}
      prev={prev}
      pageData={pageData}
      notes={notes}
      {...props}
    >
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
      <p>
        In response to the recent claims of discrimination against some in the
        Tamil community in Auroville, we hosted a 2-day Cross-Cultural Dialogue.
        We offered a space to explore this topic further and to have a deep
        sharing about our experiences and pain, as well as our felt sense of
        togetherness and aspiration to manifest Human Unity.
      </p>
      <Division>
        <div style={{ paddingLeft: 4 }}>
          <Img fluid={props.data.englishPoster.childImageSharp.fluid} />
        </div>
        <div style={{ paddingRight: 4 }}>
          <Img fluid={props.data.tamilPoster.childImageSharp.fluid} />
        </div>
      </Division>
      <div className="margin-p">
        <Gallery
          data={props.data}
          lookup="ccd"
          columns={{ min: 2, max: 2 }}
          Img={Img}
        />
      </div>
      <Division golden>
        <Fragment>
          <h2 className="mask-h4" style={{ marginBottom: 0 }}>
            <Link to="/writings/can-we-talk-about-discrimination-in-auroville">
              Can we talk about discrimination in Auroville? ⇝
            </Link>
          </h2>
          <h3 className="mask-h5">
            Read our article published after our Cross-Cultural Dialogue in
            Auroville Today…
          </h3>
          <p>
            <i>
              "Feelings of discrimination surfaced after two Tamil members of
              the Working Committee were not given proximity passes for the
              Prime Minister's visit on February 24th. This led to a rift within
              the Working Committee, and the debate spilled over into the larger
              community. The Auroville Council, asked by many members of the
              community to look into the matter of feelings of discrimination,
              called for a Restorative Circle to support the Working Committee
              to work through some of their internal dynamics. In addition,
              Restorative Auroville also organized a Cross-Cultural Dialogue on
              the topic of discrimination. L'aura reports."
            </i>
          </p>
          <p>
            <strong>
              <Link to="/writings/can-we-talk-about-discrimination-in-auroville">
                Read now ⇝
              </Link>
            </strong>
          </p>
        </Fragment>
        <Fragment>
          <GrungeBox>
            <p style={{ marginBottom: 0, fontWeight: 200 }} className="mask-h3">
              We filmed this event, and our documentary will come out soon...!
              Stand by!
            </p>
          </GrungeBox>
        </Fragment>
      </Division>
    </CommunityEventWrapper>
  )
}

Initiative.propTypes = {
  data: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Initiative
