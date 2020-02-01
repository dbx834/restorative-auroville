// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'

import isUndefined from 'lodash/isUndefined'
import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Box, Button } from 'grommet'
import MediaQuery from 'react-responsive'

import Division from '@bodhi-project/components/lib/Division'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

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

import Image from '@bodhi-project/components/lib/Image'

import Tag from 'antd/lib/tag'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/tag/style/css'

import YouTubeIcon from 'react-feather/dist/icons/youtube'

import smallKey from '@bodhi-project/components/lib/methods/smallKey'
import mapHoverCovers from '@bodhi-project/components/lib/methods/mapHoverCovers'

// import mockTimestamp from '@bodhi-project/components/lib/methods/mockTimestamp'
import { tags } from '@bodhi-project/components/lib/methods/mockTag'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'
import DisqusComments from '../components/DisqusComments'

import seoHelper from '../methods/seoHelper'

import grungeBox from '../assets/grungeBg.jpg'
import camera from '../assets/camera.png'

import rawData from '../data/the-power-of-dialogue'

import '../styles/pages/the-power-of-dialogue.less'

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
    abstract: (
      <Fragment>
        <strong style={{ position: 'relative' }}>
          <span
            style={{
              fontSize: '108%',
              position: 'absolute',
              transform: 'rotate(48deg)',
              width: 20,
              marginTop: -4,
            }}
          >
            ⤻
          </span>
          <span style={{ paddingLeft: 24 }}>
            community members talk about their experience
          </span>
        </strong>
        &nbsp;being in live Circles
      </Fragment>
    ),
    categoryShortCode: 'experiences',
    __typename: 'Category',
  },
  {
    categoryId: smallKey(),
    key: smallKey(),
    categoryName: 'The Restorative System',
    abstract: (
      <Fragment>
        <strong style={{ position: 'relative' }}>
          <span
            style={{
              fontSize: '108%',
              position: 'absolute',
              transform: 'rotate(48deg)',
              width: 20,
              marginTop: -4,
            }}
          >
            ⤻
          </span>
          <span style={{ paddingLeft: 24 }}>engaging with RC as a System</span>
        </strong>
        &nbsp;and highlighting the need to talk about the meaning of justice and
        conflict in our community
      </Fragment>
    ),
    categoryShortCode: 'theRestorativeSystem',
    __typename: 'Category',
  },
  {
    categoryId: smallKey(),
    key: smallKey(),
    categoryName: 'In Action',
    abstract: (
      <Fragment>
        <strong style={{ position: 'relative' }}>
          <span
            style={{
              fontSize: '108%',
              position: 'absolute',
              transform: 'rotate(48deg)',
              width: 20,
              marginTop: -4,
            }}
          >
            ⤻
          </span>
          <span style={{ paddingLeft: 24 }}>touching “live” moments</span>
        </strong>
        &nbsp;from different stages of real Circles that have been called in the
        community
      </Fragment>
    ),
    categoryShortCode: 'inAction',
    __typename: 'Category',
  },
  {
    categoryId: smallKey(),
    key: smallKey(),
    categoryName: 'The Craft',
    abstract: (
      <Fragment>
        <strong style={{ position: 'relative' }}>
          <span
            style={{
              fontSize: '108%',
              position: 'absolute',
              transform: 'rotate(48deg)',
              width: 20,
              marginTop: -4,
            }}
          >
            ⤻
          </span>
          <span style={{ paddingLeft: 24 }}>a learning resource</span>
        </strong>
        &nbsp;to highlight the RC process in its different steps and stages
        (COMING SOON)
      </Fragment>
    ),
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
  hydrate: {
    chronology: 'oldest-first',
  },
  renderCategoryAbstract: true,
  allCategoryAbstract: (
    <Fragment>
      <strong style={{ position: 'relative' }}>
        <span
          style={{
            fontSize: '108%',
            position: 'absolute',
            transform: 'rotate(48deg)',
            width: 20,
            marginTop: -4,
          }}
        >
          ⤻
        </span>
        <span style={{ paddingLeft: 24 }}>see all our videos</span>
      </strong>
      &nbsp;at one glance, or select category by category
    </Fragment>
  ),
  hashFilter: true,
}

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
    geniesPreCircleWithJanet: file(
      relativePath: {
        eq: "the-power-of-dialogue/genies-precircle-with-janet.jpg"
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
        <p>
          {map(files, file => {
            return (
              <Fragment>
                <Link
                  to={file.link}
                  style={{ display: 'flex', marginBottom: 12 }}
                >
                  <YouTubeIcon />
                  &nbsp;
                  {file.title}
                </Link>
              </Fragment>
            )
          })}
        </p>
      )}
    </div>
  )
}

/** Page */
const Page = props => {
  const { data: images } = props
  const data = mapHoverCovers(
    rawData,
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
          <p>
            We offer this video series as an opportunity for you to journey
            along with our journey. Restorative Circles is still very new to the
            world, and learning material and resources are somewhat limited. So
            here’s our attempt to celebrate this body of work and to offer back
            a few nuggets from our unfolding journey.
          </p>
        </Fragment>
        <Fragment>
          <div className="margin-p box small-box">
            <div
              style={{
                position: 'absolute',
                top: 5,
                right: 10,
                height: 40,
                zIndex: -1,
              }}
              className="desktop-only"
            >
              <Image
                src={camera}
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
            <p style={{ marginBottom: 0 }}>
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
      <br className="mobile-only" />
      <Grid
        {...props}
        loading={false}
        Link={Link}
        Box={Box}
        Button={Button}
        Img={Img}
        MediaQuery={MediaQuery}
        data={data}
        allCategories={categories}
        allTags={tags}
        strictChronology
        conf={conf}
      />
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
