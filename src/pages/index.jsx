// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link'
import withSizes from 'react-sizes'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Row from 'antd/lib/row'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'

import Col from 'antd/lib/col'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../components/StandardPage'
import EventsThisMonth from '../components/EventsThisMonth'

import ProjectHighlight from '../components/home-page/ProjectHighlight'
import TeamHighlight from '../components/home-page/TeamHighlight'
import VideoCover from '../components/VideoCover'

import seoHelper from '../methods/seoHelper'

import banner from '../assets/banner.png'

import p32 from '../assets/designing-our-justice-system-consciously.jpg'
import p41 from '../assets/surya-on-restorative-circles.jpg'
import bluePaintbrush from '../assets/bluePaintbrush.png'

import banner21 from '../assets/banner2-1.png'
import banner25 from '../assets/banner2-5.png'
import banner24Hover from '../assets/banner2-4-hover.png'
import banner23Hover from '../assets/banner2-3-hover.png'
import banner22Hover from '../assets/banner2-2-hover.png'
import banner24 from '../assets/banner2-4.png'
import banner23 from '../assets/banner2-3.png'
import banner22 from '../assets/banner2-2.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Restorative Circles in Auroville',
  nakedPageSlug: '',
  pageAbstract:
    'Restorative Auroville is an independent project that aims to bring the practice of Restorative Circles, a holistic, community-based form of conflict resolution, to Auroville, and to explore what a consciously designed justice system could look like here – one that reflects our ideals, but that is also effective and has the power to bring about constructive change, both on the individual and community levels.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const styleObject = css({
  display: 'block',

  '& .ant-card': {
    boxShadow: '1px 2px 0 0 #FF7D00',

    '&:hover': {
      boxShadow: '2px 4px 0 0 #FF7D00',
    },
  },

  '& .one': {
    transition: 'all 300ms ease-in',

    '&:hover': {
      background: '#ffe59a',
    },
  },

  '& .two': {
    transition: 'all 300ms ease-in',

    '&:hover': {
      background: '#dfdffe',
    },
  },

  '& .three': {
    transition: 'all 300ms ease-in',

    '&:hover': {
      background: '#ffe7e7',
    },
  },

  '& .four': {
    transition: 'all 300ms ease-in',

    '&:hover': {
      background: '#bfd9bf',
    },
  },

  '& .banner-hover': {
    '& .hover': {
      transition: 'all 300ms ease-in',
      opacity: 0,
    },

    '&:hover': {
      '& .hover': {
        opacity: 1,
      },
    },
  },
})
const pageStyle = styleObject.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/**
 * [description]
 * @return {[type]} [description]
 */
const VideoSeriesBlock1 = () => (
  <div>
    <h2 className="mask-h3" style={{ marginBottom: 0 }}>
      "The Power of Dialogue"
    </h2>
    <p style={{ marginBottom: 30 }}>
      <Link to="/the-power-of-dialogue">See video series ⇝</Link>
    </p>
    <Row gutter={{ xs: 24, sm: 36, md: 48 }}>
      <Col sm={24} md={24} lg={8}>
        <VideoCover
          to="/the-power-of-dialogue/designing-our-justice-system-consciously"
          cover={p32}
          text="L'aura shares about her experience of engaging with Restorative Circles in Auroville and the importance of designing a justice system consciously, otherwise we'll just inherit the old ways."
        />
      </Col>
      <Col sm={24} md={24} lg={8}>
        <VideoCover
          to="/the-power-of-dialogue/surya-on-restorative-circles"
          cover={p41}
          text="Surya shares about her experiences with Restoratives Circles."
        />
      </Col>
      <Col sm={24} md={24} lg={8}>
        <h3 className="mask-h4">Our Video Series</h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <div>
            <Link
              to="/the-power-of-dialogue#the-craft"
              className="one"
              style={{
                marginBottom: 0,
                borderLeft: '4px solid #FFBF00',
                borderTop: '4px solid #FFBF00',
                display: 'block',
                paddingLeft: 12,
              }}
            >
              <h4 className="mask-h5" style={{ marginBottom: 0 }}>
                1. The Craft
              </h4>
              <p style={{ marginBottom: 20 }}>
                <i>Learning the steps</i>
              </p>
            </Link>
          </div>
          <div>
            <Link
              to="/the-power-of-dialogue#in-action"
              className="two"
              style={{
                marginBottom: 0,
                borderLeft: '4px solid #4949FC',
                borderTop: '4px solid #4949FC',
                display: 'block',
                paddingLeft: 12,
                marginLeft: '1vw',
              }}
            >
              <h4 className="mask-h5" style={{ marginBottom: 0 }}>
                2. In Action
              </h4>
              <p style={{ marginBottom: 20 }}>
                <i>Snippets from live Circles</i>
              </p>
            </Link>
          </div>
          <div>
            <Link
              to="/the-power-of-dialogue#the-restorative-system"
              className="three"
              style={{
                marginBottom: 0,
                borderLeft: '4px solid #FF4D4D',
                borderTop: '4px solid #FF4D4D',
                display: 'block',
                paddingLeft: 12,
                marginLeft: '2vw',
              }}
            >
              <h4 className="mask-h5" style={{ marginBottom: 0 }}>
                3. The Restorative System
              </h4>
              <p style={{ marginBottom: 20 }}>
                <i>Exploring justice in community</i>
              </p>
            </Link>
          </div>
          <div>
            <Link
              to="/the-power-of-dialogue#experiences"
              className="four"
              style={{
                marginBottom: 0,
                borderLeft: '4px solid #5FA15F',
                borderTop: '4px solid #5FA15F',
                display: 'block',
                paddingLeft: 12,
                marginLeft: '3vw',
              }}
            >
              <h4 className="mask-h5" style={{ marginBottom: 0 }}>
                4. Experiences
              </h4>
              <p style={{ marginBottom: 20 }}>
                <i>Participants share</i>
              </p>
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  </div>
)

/**
 * [description]
 * @param  {[type]} banner      [description]
 * @param  {[type]} bannerHover [description]
 * @return {[type]}             [description]
 */
const BannerLink = ({ to, alt, bannerImage, bannerHover }) => (
  <Link to={to}>
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'block',
      }}
      className="banner-hover"
    >
      <Image
        src={bannerImage}
        rawWidth={1440}
        rawHeight={350}
        style={{
          height: 'auto',
          width: '100%',
          border: 0,
          background: 'transparent',
        }}
        alt={alt}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'block',
        }}
        className="hover"
      >
        <Image
          src={bannerHover}
          rawWidth={1440}
          rawHeight={350}
          style={{
            height: 'auto',
            width: '100%',
            border: 0,
            background: 'transparent',
          }}
          alt={alt}
        />
      </div>
    </div>
  </Link>
)

/** Page */
const Page = props => {
  const { data, isMobile } = props

  return (
    <StandardPage className={pageStyle} seoData={seoData}>
      <Row gutter={{ xs: 4, sm: 6, md: 8 }}>
        <Col sm={24} md={24} lg={16}>
          <Image
            src={banner}
            rawWidth={1440}
            rawHeight={900}
            style={{
              height: 'auto',
              width: '100%',
              border: 0,
              background: 'transparent',
            }}
            alt="Restorative Auroville"
          />
        </Col>
        <Col sm={24} md={24} lg={8}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexDirection: 'column',
            }}
          >
            <div style={{ flexGrow: 165, flexBasis: 0 }}>
              <Image
                src={banner21}
                rawWidth={1440}
                rawHeight={450}
                style={{
                  height: 'auto',
                  width: '100%',
                  border: 0,
                  background: 'transparent',
                }}
                alt="Restorative Auroville"
              />
            </div>
            <div style={{ flexGrow: 195, flexBasis: 0 }}>
              <BannerLink
                to="/restorative-circles"
                bannerImage={banner22}
                alt="We offer Restorative Circles"
                bannerHover={banner22Hover}
              />
            </div>
            <div style={{ flexGrow: 195, flexBasis: 0 }}>
              <BannerLink
                to="/projects/taking-rc-to-units-schools-and-residential-communities"
                bannerImage={banner23}
                alt="We can bring Restorative Circles to your community"
                bannerHover={banner23Hover}
              />
            </div>
            <div style={{ flexGrow: 195, flexBasis: 0 }}>
              <BannerLink
                to="/events"
                bannerImage={banner24}
                alt="We offer learning opportunities"
                bannerHover={banner24Hover}
              />
            </div>
            <div style={{ flexGrow: 150, flexBasis: 0 }}>
              <Image
                src={banner25}
                rawWidth={1440}
                rawHeight={300}
                style={{
                  height: 'auto',
                  width: '100%',
                  border: 0,
                  background: 'transparent',
                }}
                alt="Restorative Auroville"
              />
            </div>
          </div>
        </Col>
      </Row>
      <h1 className="mask-h3">Restorative Auroville</h1>
      <p>
        Restorative Auroville is an independent project that aims to bring the
        practice of&nbsp;
        <Link to="/restorative-circles">Restorative Circles</Link>, a holistic,
        community-based form of conflict resolution, to Auroville, and to
        explore what a consciously designed justice system could look like here
        – one that reflects our ideals, but that is also effective and has the
        power to bring about constructive change, both on the individual and
        community levels.
      </p>

      <EventsThisMonth data={data} />

      <ProjectHighlight />

      <VideoSeriesBlock1 />

      <div
        style={{
          paddingTop: 12,
          paddingBottom: 28,
          paddingLeft: '10%',
          paddingRight: '10%',
          position: 'relative',
        }}
        className="margin-p"
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            zIndex: -2,
            overflow: 'hidden',
          }}
        >
          <Image
            src={bluePaintbrush}
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
        <div className="margin-p">
          <h2
            className="mask-h2"
            style={{
              color: '#FFFFFF',
              marginBottom: 10,
            }}
          >
            Get Involved Today…
          </h2>
          <Row gutter={{ xs: 24, sm: 36, md: 48 }}>
            <Col sm={24} md={24} lg={8}>
              <hr
                style={{
                  borderTop: '6px solid #FFFFFF',
                  width: '12%',
                  marginLeft: 0,
                }}
              />
              <h3
                className="mask-h3"
                style={{
                  color: '#FFFFFF',
                  marginBottom: 10,
                  lineHeight: '30px',
                }}
              >
                Volunteer & Apprentice
              </h3>
              <p style={{ color: '#FFFFFF' }}>
                Would you like to immerse yourself in this work and learn by
                doing? We’re looking for support!
              </p>
              <p style={{ marginBottom: 0 }}>
                <Link to="/volunteer" className="white">
                  See more ⇝
                </Link>
              </p>
            </Col>
            <Col sm={24} md={24} lg={8}>
              <hr
                style={{
                  borderTop: '6px solid #FFFFFF',
                  width: '12%',
                  marginLeft: 0,
                }}
              />
              <h3
                className="mask-h3"
                style={{
                  color: '#FFFFFF',
                  marginBottom: 10,
                  lineHeight: '30px',
                }}
              >
                Donate
              </h3>
              <p style={{ color: '#FFFFFF' }}>
                Passion is what drives our project, and financial support would
                allow our passion to manifest even more powerfully! Please
                consider donating.
              </p>
              <p style={{ marginBottom: 0 }}>
                <Link to="/donate" className="white">
                  Donate now ⇝
                </Link>
              </p>
            </Col>
            <Col sm={24} md={24} lg={8}>
              <hr
                style={{
                  borderTop: '6px solid #FFFFFF',
                  width: '12%',
                  marginLeft: 0,
                }}
              />
              <h3
                className="mask-h3"
                style={{
                  color: '#FFFFFF',
                  marginBottom: 10,
                  lineHeight: '30px',
                }}
              >
                Be Our Film
              </h3>
              <p style={{ color: '#FFFFFF' }}>
                We’re wanting to film a live Circle and to share this work with
                the rest of the world. Would you like that Circle to be yours?
              </p>
              <p style={{ marginBottom: 0 }}>
                <Link
                  to="/projects/filming-a-live-restorative-circle"
                  className="white"
                >
                  See more ⇝
                </Link>
              </p>
            </Col>
          </Row>
        </div>
      </div>

      <TeamHighlight />
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// ---------------------------------------------------------------------- Query
// ----------------------------------------------------------------------------
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query HomepageQuery {
    allMarkdownRemark(
      limit: 365
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { type: { eq: "event" } } }
    ) {
      edges {
        node {
          fields {
            route
            humanDate
            elapsed
            beginDateInt
            diff
            year
            month
            monthN
            dayOfMonth
            displayDate
            formattedDate
          }
          frontmatter {
            abstract
            title
            subTitle
            cover
            date
            startDate
            finishDate
            fromTime
            toTime
            category
            tags
            type
            cost
          }
        }
      }
    }
  }
`
/* eslint-enable no-undef */

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
/** mapSizesToProps */
const mapSizesToProps = ({ width }) => ({
  isMobile: width <= 768,
})

export default withSizes(mapSizesToProps)(Page)
