// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'

import isUndefined from 'lodash/isUndefined'
import map from 'lodash/map'
import filter from 'lodash/filter'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Box, Button } from 'grommet'
import MediaQuery from 'react-responsive'

import Division from '@bodhi-project/components/lib/division'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

import Image from '@bodhi-project/components/lib/image/Image'

import Grid from '@bodhi-project/components/lib/grid/gatsby'
import '@bodhi-project/components/lib/grid/style.less'
import '@bodhi-project/components/lib/standard-renderers/article/vertical.less'
// import '@bodhi-project/components/lib/grid/buttons-as-links.less'
import '@bodhi-project/components/lib/snippets/hover-underline-animation.less'
import '@bodhi-project/components/lib/features/loading-detection/style.less'
import '@bodhi-project/components/lib/features/tag-filter/style.less'
import '@bodhi-project/components/lib/hover-cover/grid-item-article-hover.less'
import '@bodhi-project/components/lib/features/category-filter/style.less'
import '@bodhi-project/components/lib/features/chronology-sort/style.less'
import '@bodhi-project/components/lib/features/year-filter/style.less'

import Tag from 'antd/lib/tag'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/tag/style/css'

import YouTubeIcon from 'react-feather/dist/icons/youtube'

import smallKey from '@bodhi-project/components/lib/methods/smallKey'
import inArray from '@bodhi-project/components/lib/methods/inArray'
import mapHoverCovers from '@bodhi-project/components/lib/methods/mapHoverCovers'

// import mockTimestamp from '@bodhi-project/components/lib/methods/mockTimestamp'
import { tags } from '@bodhi-project/components/lib/methods/mockTag'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'
import DisqusComments from '../components/DisqusComments'

import seoHelper from '../methods/seoHelper'

import rawData from '../data/the-power-of-dialogue'

import '../styles/pages/the-power-of-dialogue.less'

import grungeBox from '../assets/grungeBg.jpg'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const pageData = {
  pageTitle: 'The Power of Dialogue',
  nakedPageSlug: 'the-power-of-dialogue',
  pageAbstract:
    'We offer this video series as an opportunity for you to journey along with our journey. Restorative Circles is still very new to the world, and learning material and resources are somewhat limited. So here’s our attempt to celebrate this body of work and to offer back a few nuggets from our unfolding journey.',
}

const seoData = seoHelper(pageData)

const categories = [
  {
    categoryId: smallKey(),
    key: smallKey(),
    categoryName: 'Experiences',
    categoryShortCode: 'experiences',
    __typename: 'Category',
  },
  {
    categoryId: smallKey(),
    key: smallKey(),
    categoryName: 'The Restorative System',
    categoryShortCode: 'theRestorativeSystem',
    __typename: 'Category',
  },
  {
    categoryId: smallKey(),
    key: smallKey(),
    categoryName: 'In Action',
    categoryShortCode: 'inAction',
    __typename: 'Category',
  },
  {
    categoryId: smallKey(),
    key: smallKey(),
    categoryName: 'The Craft',
    categoryShortCode: 'theCraft',
    __typename: 'Category',
  },
]

const conf = {
  wrapper: '',
  articleType: 'linkedArticle',
  render: ['hover-cover', 'abstract'],
  layout: 'vertical',
  columns: 3,
  titleMask: 'mask-h5',
  filterMethod: {
    categories: 'exclusive',
    tags: 'exclusive',
  },
  renderCategoryAbstract: false,
  hashFilter: false,
  hydrate: {
    activeFilter: false,
    chronology: 'oldest-first',
  },
}

const d1 = filter(rawData, o => inArray(o.hasCategories, 'theCraft'))
const d2 = filter(rawData, o => inArray(o.hasCategories, 'inAction'))
const d3 = filter(rawData, o =>
  inArray(o.hasCategories, 'theRestorativeSystem')
)
const d4 = filter(rawData, o => inArray(o.hasCategories, 'experiences'))

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    defaultForegroundFallback: file(
      relativePath: { eq: "the-power-of-dialogue/playNow.jpg" }
    ) {
      ...max900
    }
    preCircleGettingTheAct: file(
      relativePath: {
        eq: "the-power-of-dialogue/pre-circle-getting-the-act.jpg"
      }
    ) {
      ...max900
    }
    preCircleWouldYouLikeToGoAhead: file(
      relativePath: {
        eq: "the-power-of-dialogue/pre-circle-would-you-like-to-go-ahead.jpg"
      }
    ) {
      ...max900
    }
    preCircleWhoNeedsToBeThere: file(
      relativePath: {
        eq: "the-power-of-dialogue/pre-circle-who-needs-to-be-there.jpg"
      }
    ) {
      ...max900
    }
    preCircleExplainingTheProcess: file(
      relativePath: {
        eq: "the-power-of-dialogue/pre-circle-explaining-the-process.jpg"
      }
    ) {
      ...max900
    }
    preCircleHearingMeaning: file(
      relativePath: {
        eq: "the-power-of-dialogue/pre-circle-hearing-meaning.jpg"
      }
    ) {
      ...max900
    }
    geniesPreCircleWithJanet: file(
      relativePath: {
        eq: "the-power-of-dialogue/genies-pre-circle-with-janet.jpg"
      }
    ) {
      ...max900
    }
    rakhalsPreCircleWithHenrike: file(
      relativePath: {
        eq: "the-power-of-dialogue/rakhals-pre-circle-with-henrike.jpg"
      }
    ) {
      ...max900
    }
    facilitatorsPreCircleOnSexualMisconduct: file(
      relativePath: {
        eq: "the-power-of-dialogue/facilitators-pre-circle-on-sexual-misconduct.jpg"
      }
    ) {
      ...max900
    }
    engagingWithRestorativeCirclesInAuroville: file(
      relativePath: {
        eq: "the-power-of-dialogue/engaging-with-restorative-circles-in-auroville.jpg"
      }
    ) {
      ...max900
    }
    designingOurJusticeSystemConsciously: file(
      relativePath: {
        eq: "the-power-of-dialogue/designing-our-justice-system-consciously.jpg"
      }
    ) {
      ...max900
    }
    definingTheAct: file(
      relativePath: { eq: "the-power-of-dialogue/defining-the-act.jpg" }
    ) {
      ...max900
    }
    rcChallengesUsToGrow: file(
      relativePath: { eq: "the-power-of-dialogue/rc-challenges-us-to-grow.jpg" }
    ) {
      ...max900
    }
    rcsRippleEffect: file(
      relativePath: { eq: "the-power-of-dialogue/rcs-ripple-effect.jpg" }
    ) {
      ...max900
    }
    suryaOnRestorativeCircles: file(
      relativePath: {
        eq: "the-power-of-dialogue/surya-on-restorative-circles.jpg"
      }
    ) {
      ...max900
    }
    theValueOfRcFacilitation: file(
      relativePath: {
        eq: "the-power-of-dialogue/the-value-of-rc-facilitation.jpg"
      }
    ) {
      ...max900
    }
    highlightsAndLearningOnRestorativeCircles1: file(
      relativePath: {
        eq: "the-power-of-dialogue/highlights-and-learning-on-restorative-circles-1.jpg"
      }
    ) {
      ...max900
    }
    highlightsAndLearningOnRestorativeCircles2: file(
      relativePath: {
        eq: "the-power-of-dialogue/highlights-and-learning-on-restorative-circles-2.jpg"
      }
    ) {
      ...max900
    }
    highlightsAndLearningOnRestorativeCircles3: file(
      relativePath: {
        eq: "the-power-of-dialogue/highlights-and-learning-on-restorative-circles-3.jpg"
      }
    ) {
      ...max900
    }
    engagingWithTheCommunityThroughRc: file(
      relativePath: {
        eq: "the-power-of-dialogue/engaging-with-the-community-through-rc.jpg"
      }
    ) {
      ...max900
    }
    listeningAsAMeansToCommunityResilience: file(
      relativePath: {
        eq: "the-power-of-dialogue/listening-as-a-means-to-community-resilience.jpg"
      }
    ) {
      ...max900
    }
    canRcReallyHandleChallengingCases: file(
      relativePath: {
        eq: "the-power-of-dialogue/can-rc-really-handle-challenging-cases.jpg"
      }
    ) {
      ...max900
    }
    yellowBorder: file(relativePath: { eq: "yellowBorder.jpg" }) {
      ...max900
    }
    blueBorder: file(relativePath: { eq: "blueBorder.jpg" }) {
      ...max900
    }
    greenBorder: file(relativePath: { eq: "greenBorder.jpg" }) {
      ...max900
    }
    redBorder: file(relativePath: { eq: "redBorder.jpg" }) {
      ...max900
    }
    grungeBox: file(relativePath: { eq: "grungeBox.png" }) {
      ...max900
    }
    camera: file(relativePath: { eq: "camera.png" }) {
      ...max900
    }
  }
`

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Theme */
const Theme = props => {
  const { border, title, files, tag, text } = props
  return (
    <div
      style={{
        paddingLeft: 12,
        borderLeft: `8px solid ${border}`,
      }}
    >
      <h2 className="mask-h4">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{title}</span>
          <Link to="/archives">
            <Tag color="geekblue">...from our Archives</Tag>
          </Link>
        </div>
      </h2>
      <p>{text}</p>
      {!isUndefined(files) && (
        <ul
          className="mask-p"
          style={{ marginBottom: 0, padding: 0, listStyle: 'none' }}
        >
          {map(files, file => {
            return (
              <li>
                <Link
                  to={file.link}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 6,
                  }}
                >
                  <YouTubeIcon />
                  &nbsp;
                  {file.title}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

/** Page */
const Page = props => {
  const { data: images } = props
  const d1C = mapHoverCovers(
    d1,
    images,
    images.defaultForegroundFallback.childImageSharp.fluid
  )
  const d2C = mapHoverCovers(
    d2,
    images,
    images.defaultForegroundFallback.childImageSharp.fluid
  )
  const d3C = mapHoverCovers(
    d3,
    images,
    images.defaultForegroundFallback.childImageSharp.fluid
  )
  const d4C = mapHoverCovers(
    d4,
    images,
    images.defaultForegroundFallback.childImageSharp.fluid
  )

  return (
    <StandardPage
      className="the-power-of-dialogue-page"
      seoData={seoData}
      {...props}
    >
      <Division>
        <Fragment>
          <h1 className="mask-h3">The Power of Dialogue</h1>
          <p className="abstract">
            We offer this video series as an opportunity for you to journey
            along with our journey. Restorative Circles is still very new to
            this so-called "modern world," and learning material and resources
            are somewhat limited. So here’s our attempt to celebrate this body
            of work and to offer back a few nuggets from our unfolding journey.
          </p>
        </Fragment>
        <Fragment>
          <div className="margin-p box small-box">
            <div
              style={{
                position: 'absolute',
                top: 2,
                right: 8,
                height: 40,
                zIndex: -1,
              }}
              className="desktop-only"
            >
              <Img
                fluid={images.camera.childImageSharp.fluid}
                style={{
                  background: 'transparent',
                  border: 'unset',
                  height: 40,
                  width: 40,
                }}
                rawWidth={900}
                rawHeight={900}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                zIndex: -2,
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <Image
                src={grungeBox}
                style={{
                  background: 'transparent',
                  border: 'unset',
                  height: '100%',
                  width: '100%',
                }}
                rawWidth={1440}
                rawHeight={900}
              />
            </div>
            <p style={{ marginBottom: 0, paddingRight: 25 }}>
              <Link to="/donate/filming-a-live-restorative-circle">
                Our big dream is to one day film an entire live Restorative
                Circle
              </Link>
              . It’s an intimate and delicate space, and so we’re crossing our
              fingers that sooner or later a group will be comfortable with the
              idea of being filmed… Would you like this Circle to be yours?
            </p>
          </div>
        </Fragment>
      </Division>
      <Img
        fluid={images.yellowBorder.childImageSharp.fluid}
        style={{
          height: 4,
          width: '100%',
          border: 0,
          background: 'transparent',
          marginBottom: 0,
        }}
        alt="Restorative Auroville - The Craft"
      />
      <h2 className="mask-h3" id="the-craft" style={{ marginBottom: 4 }}>
        1. The Craft
      </h2>
      <p className="mask-h5">
        <strong style={{ position: 'relative' }}>
          <span
            style={{
              fontSize: '108%',
              position: 'absolute',
              transform: 'rotate(48deg)',
              width: 20,
              marginTop: -2,
            }}
          >
            ⤻
          </span>
          <span style={{ paddingLeft: 24 }}>a learning resource</span>
        </strong>
        &nbsp;to highlight the RC process in its different steps and stages
      </p>
      <div id="d1">
        <Grid
          {...props}
          loading={false}
          Link={Link}
          Box={Box}
          Button={Button}
          Img={Img}
          MediaQuery={MediaQuery}
          documents={d1C}
          allCategories={categories}
          allTags={tags}
          strictChronology
          conf={{ ...conf, containerId: 'd1' }}
        />
      </div>
      <br />
      <Img
        fluid={images.blueBorder.childImageSharp.fluid}
        style={{
          height: 4,
          width: '100%',
          border: 0,
          background: 'transparent',
          marginBottom: 0,
        }}
        alt="Restorative Auroville - In Action"
      />
      <h2 className="mask-h3" id="in-action" style={{ marginBottom: 4 }}>
        2. In Action
      </h2>
      <p className="mask-h5">
        <strong style={{ position: 'relative' }}>
          <span
            style={{
              fontSize: '108%',
              position: 'absolute',
              transform: 'rotate(48deg)',
              width: 20,
              marginTop: -2,
            }}
          >
            ⤻
          </span>
          <span style={{ paddingLeft: 24 }}>touching “live” moments</span>
        </strong>
        &nbsp;from different stages of real Circles that have been called in the
        community
      </p>
      <div id="d2">
        <Grid
          {...props}
          loading={false}
          Link={Link}
          Box={Box}
          Button={Button}
          Img={Img}
          MediaQuery={MediaQuery}
          documents={d2C}
          allCategories={categories}
          allTags={tags}
          strictChronology
          conf={{ ...conf, containerId: 'd2' }}
        />
      </div>
      <br />
      <Img
        fluid={images.redBorder.childImageSharp.fluid}
        style={{
          height: 4,
          width: '100%',
          border: 0,
          background: 'transparent',
          marginBottom: 0,
        }}
        alt="Restorative Auroville - The Restorative System"
      />
      <h2
        className="mask-h3"
        id="the-restorative-system"
        style={{ marginBottom: 2 }}
      >
        3. The Restorative System
      </h2>
      <p className="mask-h5">
        <strong style={{ position: 'relative' }}>
          <span
            style={{
              fontSize: '108%',
              position: 'absolute',
              transform: 'rotate(48deg)',
              width: 20,
              marginTop: -2,
            }}
          >
            ⤻
          </span>
          <span style={{ paddingLeft: 24 }}>engaging with RC as a System</span>
        </strong>
        &nbsp;and highlighting the need to talk about the meaning of justice and
        conflict in our community
      </p>
      <div id="d3">
        <Grid
          {...props}
          loading={false}
          Link={Link}
          Box={Box}
          Button={Button}
          Img={Img}
          MediaQuery={MediaQuery}
          documents={d3C}
          allCategories={categories}
          allTags={tags}
          strictChronology
          conf={{ ...conf, containerId: 'd3' }}
        />
      </div>
      <br />
      <Img
        fluid={images.greenBorder.childImageSharp.fluid}
        style={{
          height: 4,
          width: '100%',
          border: 0,
          background: 'transparent',
          marginBottom: 0,
        }}
        alt="Restorative Auroville - The Restorative System"
      />
      <h2 className="mask-h3" id="experiences" style={{ marginBottom: 4 }}>
        4. Experiences
      </h2>
      <p className="mask-h5">
        <strong style={{ position: 'relative' }}>
          <span
            style={{
              fontSize: '108%',
              position: 'absolute',
              transform: 'rotate(48deg)',
              width: 20,
              marginTop: -2,
            }}
          >
            ⤻
          </span>
          <span style={{ paddingLeft: 24 }}>
            community members talk about their experience
          </span>
        </strong>
        &nbsp;being in live Circles
      </p>
      <div id="d4">
        <Grid
          {...props}
          loading={false}
          Link={Link}
          Box={Box}
          Button={Button}
          Img={Img}
          MediaQuery={MediaQuery}
          documents={d4C}
          allCategories={categories}
          allTags={tags}
          strictChronology
          conf={{ ...conf, containerId: 'd4' }}
        />
      </div>
      <br />
      <Theme
        border="#FAE300"
        title="Our RC-channel on YouTube (2011‒present)  "
        tag="...from our Archives"
        text="With somewhat regular updates…"
        files={[
          {
            title: 'See videos',
            icon: 'youtube',
            link:
              'https://www.youtube.com/playlist?list=PLQbEiEQu-L1YAIZY5pLrNA5Z41yJ1L8pF',
          },
        ]}
      />
      <DisqusComments pageData={pageData} />
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
