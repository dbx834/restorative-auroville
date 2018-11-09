// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'
import moment from 'moment'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from 'lodash/map'
import filter from 'lodash/filter'
import reverse from 'lodash/reverse'
import values from 'lodash/values'
import isUndefined from 'lodash/isUndefined'
import join from 'lodash/join'
import isNull from 'lodash/isNull'
import slice from 'lodash/slice'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link'
import withSizes from 'react-sizes'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'
import OutLink from '@bodhi-project/components/lib/OutLink'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Row from 'antd/lib/row'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'

import Col from 'antd/lib/col'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../components/StandardPage'
import Video from '../components/Video'
import EventListing from '../components/EventListing'
import EventsThisMonth from '../components/EventsThisMonth'

import ProjectHighlight from '../components/home-page/ProjectHighlight'
import ArticleHighlight from '../components/home-page/ArticleHighlight'
import TeamHighlight from '../components/home-page/TeamHighlight'
import Feedback from '../components/home-page/Feedback'

import seoHelper from '../methods/seoHelper'

import banner from '../assets/banner.png'
import banner2 from '../assets/banner2.png'

import p32 from '../assets/designing-our-justice-system-consciously.jpg'
import bluePaintbrush from '../assets/bluePaintbrush.png'

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
  <Row gutter={{ xs: 24, sm: 36, md: 48 }}>
    <Col sm={24} md={24} lg={15}>
      <h2 className="mask-h3">"The Power of Dialogue"</h2>
      <Image
        src={p32}
        style={{
          background: 'transparent',
          border: 'unset',
          height: 'auto',
          width: '100%',
          marginBottom: 10,
        }}
        loader="gradient"
        rawWidth={1440}
        rawHeight={900}
      />
      <p>
        <strong>3.2 Designing our Justice System Consciously</strong>
        <br />
        L'aura shares about her experience of engaging with Restorative Circles
        in Auroville and the importance of designing a justice system
        consciously, otherwise we'll just inherit the old ways.&nbsp;
        <Link to="/the-power-of-dialogue">See more videos ⇝</Link>
      </p>
    </Col>
    <Col sm={24} md={24} lg={9}>
      <h3 className="mask-h3">Our Video Series</h3>
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
            style={{
              marginBottom: 0,
              borderLeft: '4px solid #FFBF00',
              borderTop: '4px solid #FFBF00',
              display: 'block',
              paddingLeft: 12,
            }}
          >
            <h4 className="mask-h4" style={{ marginBottom: 0 }}>
              The Craft
            </h4>
            <p style={{ marginBottom: 30 }}>
              <i>Learning the steps</i>
            </p>
          </Link>
        </div>
        <div>
          <Link
            to="/the-power-of-dialogue#in-action"
            style={{
              marginBottom: 0,
              borderLeft: '4px solid #4949FC',
              borderTop: '4px solid #4949FC',
              display: 'block',
              paddingLeft: 12,
              marginLeft: '1vw',
            }}
          >
            <h4 className="mask-h4" style={{ marginBottom: 0 }}>
              In Action
            </h4>
            <p style={{ marginBottom: 30 }}>
              <i>Snippets from live Circles</i>
            </p>
          </Link>
        </div>
        <div>
          <Link
            to="/the-power-of-dialogue#the-restorative-system"
            style={{
              marginBottom: 0,
              borderLeft: '4px solid #FF4D4D',
              borderTop: '4px solid #FF4D4D',
              display: 'block',
              paddingLeft: 12,
              marginLeft: '2vw',
            }}
          >
            <h4 className="mask-h4" style={{ marginBottom: 0 }}>
              The Restorative System
            </h4>
            <p style={{ marginBottom: 30 }}>
              <i>Exploring justice in community</i>
            </p>
          </Link>
        </div>
        <div>
          <Link
            to="/the-power-of-dialogue#experiences"
            style={{
              marginBottom: 0,
              borderLeft: '4px solid #5FA15F',
              borderTop: '4px solid #5FA15F',
              display: 'block',
              paddingLeft: 12,
              marginLeft: '3vw',
            }}
          >
            <h4 className="mask-h4" style={{ marginBottom: 0 }}>
              Experiences
            </h4>
            <p style={{ marginBottom: 30 }}>
              <i>Participants share</i>
            </p>
          </Link>
        </div>
      </div>
    </Col>
  </Row>
)

/**
 * [description]
 * @return {[type]} [description]
 */
const VideoSeriesBlock2 = () => (
  <Row gutter={{ xs: 24, sm: 36, md: 48 }}>
    <Col sm={24} md={24} lg={15}>
      <h2 className="mask-h3">"The Power of Dialogue"</h2>
      <Video url="https://www.youtube.com/watch?v=ur4OvDPkoSE" />
      <p>
        <strong>3.2 Designing our Justice System Consciously</strong>
        <br />
        L'aura shares about her experience of engaging with Restorative Circles
        in Auroville and the importance of designing a justice system
        consciously, otherwise we'll just inherit the old ways.&nbsp;
        <Link to="/the-power-of-dialogue/designing-our-justice-system-consciously">
          Visit page ⇝
        </Link>
      </p>
      <p>
        <Link to="/the-power-of-dialogue">See more videos ⇝</Link>
      </p>
    </Col>
    <Col sm={24} md={24} lg={9}>
      <h2 className="mask-h3">Testimonials</h2>
      <p>
        <i>
          "I've done a lot of learning with L'aura, including a three day
          conference & a ten week webinar, on the topic of Restorative Circles.
          She is fantastic, is really insightful with first-hand experience
          creating an RC system in a cross-cultural community. I love her
          perspective and experience in NVC stuff as well. I sooo heartily
          encourage you to check out her webinar series if you have any interest
          (it's open to people outside of India too)."
        </i>
        &nbsp;~ Naomi Christine
      </p>
      <p>
        <Link to="/the-power-of-dialogue">See more testimonials ⇝</Link>
      </p>
    </Col>
  </Row>
)

/**
 * [description]
 * @return {[type]} [description]
 */
const SummaryBlock = () => (
  <div
    style={{
      paddingTop: 64,
      paddingBottom: 12,
      paddingLeft: '12.5%',
      paddingRight: '12.5%',
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
        }}
      >
        Some of Our Offers…
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
          <h3 className="mask-h3" style={{ color: '#FFFFFF' }}>
            Facilitate Circles
          </h3>
          <p style={{ color: '#FFFFFF' }}>
            We facilitate Circles. Would you like a space to dialogue within the
            context of community about something that’s challenging you?
          </p>
          <p>
            <Link to="/restorative-circles" className="white">
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
          <h3 className="mask-h3" style={{ color: '#FFFFFF' }}>
            Bring RC to You
          </h3>
          <p style={{ color: '#FFFFFF' }}>
            If you’d like Circles to be better understood and more widely used
            within your networks (community, work place, schools), we’d love to
            collaborate.
          </p>
          <p>
            <Link to="/projects/ongoing" className="white">
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
          <h3 className="mask-h3" style={{ color: '#FFFFFF' }}>
            Learn Together
          </h3>
          <p style={{ color: '#FFFFFF' }}>
            We offer regular workshops and practice groups, both in person and
            online. Join us!
          </p>
          <p>
            <Link to="/events" className="white">
              See more ⇝
            </Link>
          </p>
        </Col>
      </Row>
    </div>
  </div>
)

/** Page */
const Page = props => {
  const { data, isMobile } = props

  return (
    <StandardPage className={pageStyle} seoData={seoData}>
      <Row gutter={{ xs: 24, sm: 36, md: 48 }}>
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
          <Image
            src={banner2}
            rawWidth={720}
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
      </Row>
      <h1 className="mask-h3">Restorative Auroville</h1>
      <p>
        Restorative Auroville is an independent project that aims to bring the
        practice of&nbsp;
        <OutLink to="https://www.restorativecircles.org">
          Restorative Circles
        </OutLink>
        , a holistic, community-based form of conflict resolution, to Auroville,
        and to explore what a consciously designed justice system could look
        like here – one that reflects our ideals, but that is also effective and
        has the power to bring about constructive change, both on the individual
        and community levels.
      </p>

      <ProjectHighlight />

      <VideoSeriesBlock1 />

      <div
        style={{
          paddingTop: 64,
          paddingBottom: 12,
          paddingLeft: '12.5%',
          paddingRight: '12.5%',
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
              <h3 className="mask-h3" style={{ color: '#FFFFFF' }}>
                Volunteer & Apprentice
              </h3>
              <p style={{ color: '#FFFFFF' }}>
                Would you like to immerse yourself in this work and learn by
                doing? We’re looking for support!
              </p>
              <p>
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
              <h3 className="mask-h3" style={{ color: '#FFFFFF' }}>
                Donate
              </h3>
              <p style={{ color: '#FFFFFF' }}>
                Passion is what drives our project, and financial support would
                allow our passion to manifest even more powerfully! Please
                consider donating.
              </p>
              <p>
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
              <h3 className="mask-h3" style={{ color: '#FFFFFF' }}>
                Be Our Film
              </h3>
              <p style={{ color: '#FFFFFF' }}>
                We’re wanting to film a live Circle and to share this work with
                the rest of the world. Would you like that Circle to be yours?
              </p>
              <p>
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

      <EventsThisMonth data={data} />

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
