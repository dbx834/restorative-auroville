// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import withSizes from 'react-sizes'
import Division from '@bodhi-project/components/lib/Division'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

import Video from '@bodhi-project/components/lib/Video'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import Copy from '../components/Copy'
import StandardPage from '../components/wrappers/StandardPage'
import EventsThisMonth from '../components/lists/EventsThisMonth'

import TeamHighlight from '../components/home-page/TeamHighlight'
import GatsbyImageVideoCover from '../components/GatsbyImageVideoCover'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

const pageData = {
  pageTitle: 'Restorative Circles in Auroville',
  nakedPageSlug: '',
  pageAbstract:
    'Restorative Auroville is an independent project that aims to bring the practice of Restorative Circles, a holistic, community-based form of conflict resolution, to Auroville, and to explore what a consciously designed justice system could look like here – one that reflects our ideals, but that is also effective and has the power to bring about constructive change, both on the individual and community levels.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    banner: file(relativePath: { eq: "banner.png" }) {
      ...defaultImage
    }
    banner21: file(relativePath: { eq: "banner2-1.png" }) {
      ...defaultImage
    }
    banner25: file(relativePath: { eq: "banner2-5.png" }) {
      ...defaultImage
    }
    banner25: file(relativePath: { eq: "banner2-5.png" }) {
      ...defaultImage
    }
    banner24Hover: file(relativePath: { eq: "banner2-4-hover.png" }) {
      ...defaultImage
    }
    banner23Hover: file(relativePath: { eq: "banner2-3-hover.png" }) {
      ...defaultImage
    }
    banner22Hover: file(relativePath: { eq: "banner2-2-hover.png" }) {
      ...defaultImage
    }
    banner24: file(relativePath: { eq: "banner2-4.png" }) {
      ...defaultImage
    }
    banner23: file(relativePath: { eq: "banner2-3.png" }) {
      ...defaultImage
    }
    banner22: file(relativePath: { eq: "banner2-2.png" }) {
      ...defaultImage
    }
    banner11Mobile: file(
      relativePath: { eq: "homepage/banner-mobile-1-1.png" }
    ) {
      ...defaultImage
    }
    banner12Mobile: file(
      relativePath: { eq: "homepage/banner-mobile-1-2.png" }
    ) {
      ...defaultImage
    }
    banner12HoverMobile: file(
      relativePath: { eq: "homepage/banner-mobile-1-2-hover.png" }
    ) {
      ...defaultImage
    }
    banner21Mobile: file(
      relativePath: { eq: "homepage/banner-mobile-2-1.png" }
    ) {
      ...defaultImage
    }
    banner21HoverMobile: file(
      relativePath: { eq: "homepage/banner-mobile-2-1-hover.png" }
    ) {
      ...defaultImage
    }
    banner22Mobile: file(
      relativePath: { eq: "homepage/banner-mobile-2-2.png" }
    ) {
      ...defaultImage
    }
    banner22HoverMobile: file(
      relativePath: { eq: "homepage/banner-mobile-2-2-hover.png" }
    ) {
      ...defaultImage
    }
    bluePaintbrush: file(relativePath: { eq: "bluePaintbrush.png" }) {
      ...defaultImage
    }
    orangePaintbrush: file(relativePath: { eq: "orangePaintbrush.png" }) {
      ...defaultImage
    }
    playNow: file(relativePath: { eq: "power-of-dialogue/playNow.jpg" }) {
      ...defaultImage
    }
    videoCover1: file(
      relativePath: {
        eq: "power-of-dialogue/designing-our-justice-system-consciously.jpg"
      }
    ) {
      ...defaultImage
    }
    videoCover2: file(
      relativePath: { eq: "power-of-dialogue/surya-on-restorative-circles.jpg" }
    ) {
      ...defaultImage
    }
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

  '& .yellow-block-padding': {
    '@media(min-width: 992px)': {
      paddingLeft: '12.5%',
      paddingRight: '12.5%',
    },
    '@media(max-width: 992px)': {
      paddingLeft: '10%',
      paddingRight: '14%',
    },
  },
})
const pageStyle = styleObject.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
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
      <Img fluid={bannerImage} alt={alt} />
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
        <Img fluid={bannerHover} alt={alt} />
      </div>
    </div>
  </Link>
)

/** Page */
const Page = props => {
  const { data, isMobile } = props

  return (
    <StandardPage className={pageStyle} seoData={seoData} {...props}>
      <Division bigGolden>
        <Fragment>
          <Img fluid={props.data.banner.childImageSharp.fluid} />
        </Fragment>
        <div className="desktop-only">
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexDirection: 'column',
            }}
          >
            <div style={{ flexGrow: 165, flexBasis: 0 }}>
              <Img fluid={props.data.banner21.childImageSharp.fluid} />
            </div>
            <div style={{ flexGrow: 195, flexBasis: 0 }}>
              <BannerLink
                to="/restorative-circles"
                bannerImage={props.data.banner22.childImageSharp.fluid}
                alt="We offer Restorative Circles"
                bannerHover={props.data.banner22Hover.childImageSharp.fluid}
              />
            </div>
            <div style={{ flexGrow: 195, flexBasis: 0 }}>
              <BannerLink
                to="/system-building-initiatives"
                bannerImage={props.data.banner23.childImageSharp.fluid}
                alt="We can bring Restorative Circles to your community"
                bannerHover={props.data.banner23Hover.childImageSharp.fluid}
              />
            </div>
            <div style={{ flexGrow: 195, flexBasis: 0 }}>
              <BannerLink
                to="/events"
                bannerImage={props.data.banner24.childImageSharp.fluid}
                alt="We offer learning opportunities"
                bannerHover={props.data.banner24Hover.childImageSharp.fluid}
              />
            </div>
            <div style={{ flexGrow: 150, flexBasis: 0 }}>
              <Img fluid={props.data.banner25.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </Division>
      <Division className="mobile-only">
        <Fragment>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            <div style={{ flexGrow: 100, flexBasis: 0 }}>
              <Img fluid={props.data.banner11Mobile.childImageSharp.fluid} />
            </div>
            <div style={{ flexGrow: 100, flexBasis: 0 }}>
              <BannerLink
                to="/system-building-initiatives"
                bannerImage={props.data.banner12Mobile.childImageSharp.fluid}
                alt="We can bring Restorative Circles to your community"
                bannerHover={
                  props.data.banner12HoverMobile.childImageSharp.fluid
                }
              />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            <div style={{ flexGrow: 100, flexBasis: 0 }}>
              <BannerLink
                to="/restorative-circles"
                bannerImage={props.data.banner21Mobile.childImageSharp.fluid}
                alt="We offer Restorative Circles"
                bannerHover={
                  props.data.banner21HoverMobile.childImageSharp.fluid
                }
              />
            </div>
            <div style={{ flexGrow: 100, flexBasis: 0 }}>
              <BannerLink
                to="/system-building-initiatives"
                bannerImage={props.data.banner22Mobile.childImageSharp.fluid}
                alt="We can bring Restorative Circles to your community"
                bannerHover={
                  props.data.banner22HoverMobile.childImageSharp.fluid
                }
              />
            </div>
          </div>
        </Fragment>
        <Fragment>
          <br />
        </Fragment>
      </Division>
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

      <div
        style={{
          marginTop: 30,
          paddingTop: 48,
          paddingBottom: 48,
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
            width: '100%',
            zIndex: -2,
            overflow: 'hidden',
          }}
        >
          <Img
            fluid={props.data.bluePaintbrush.childImageSharp.fluid}
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'unset',
              objectPosition: 'unset',
            }}
            imgStyle={{
              height: '100%',
              width: '100%',
              objectFit: 'unset',
              objectPosition: 'unset',
            }}
          />
        </div>
        <div className="margin-p">
          <h2
            className="mask-h3"
            style={{
              color: '#FFFFFF',
              marginBottom: 10,
            }}
          >
            Get Involved Today…
          </h2>
          <br className="mobile-only" />
          <Division byThree custom={[8, 8, 8]}>
            <Fragment>
              <hr
                style={{
                  borderTop: '6px solid #FFFFFF',
                  width: '12%',
                  marginLeft: 0,
                }}
              />
              <h3
                className="mask-h4"
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
              <br className="mobile-only" />
            </Fragment>
            <Fragment>
              <hr
                style={{
                  borderTop: '6px solid #FFFFFF',
                  width: '12%',
                  marginLeft: 0,
                }}
              />
              <h3
                className="mask-h4"
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
              <br className="mobile-only" />
            </Fragment>
            <Fragment>
              <hr
                style={{
                  borderTop: '6px solid #FFFFFF',
                  width: '12%',
                  marginLeft: 0,
                }}
              />
              <h3
                className="mask-h4"
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
                  to="/donate/filming-a-live-restorative-circle"
                  className="white"
                >
                  See more ⇝
                </Link>
              </p>
              <br className="mobile-only" />
              <br className="mobile-only" />
              <br className="mobile-only" />
            </Fragment>
          </Division>
        </div>
      </div>

      <div>
        <h2 className="mask-h3" style={{ marginBottom: 0 }}>
          "The Power of Dialogue"
        </h2>
        <p style={{ marginBottom: 30 }}>
          <Link to="/the-power-of-dialogue">See video series ⇝</Link>
        </p>
        <Division byThree>
          <Fragment>
            <GatsbyImageVideoCover
              to="/the-power-of-dialogue/designing-our-justice-system-consciously"
              cover={props.data.videoCover1.childImageSharp.fluid}
              text="L'aura shares about her experience of engaging with Restorative Circles in Auroville and the importance of designing a justice system consciously, otherwise we'll just inherit the old ways."
              playNow={props.data.playNow.childImageSharp.fluid}
            />
          </Fragment>
          <Fragment>
            <GatsbyImageVideoCover
              to="/the-power-of-dialogue/surya-on-restorative-circles"
              cover={props.data.videoCover2.childImageSharp.fluid}
              text="Surya shares about her experiences with Restoratives Circles."
              playNow={props.data.playNow.childImageSharp.fluid}
            />
          </Fragment>
          <Fragment>
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
          </Fragment>
        </Division>
      </div>

      <div
        style={{
          marginTop: 30,
          paddingTop: 48,
          paddingBottom: 48,
          position: 'relative',
        }}
        className="margin-p yellow-block-padding"
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: -2,
            overflow: 'hidden',
          }}
        >
          <Img
            fluid={props.data.orangePaintbrush.childImageSharp.fluid}
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'unset',
              objectPosition: 'unset',
            }}
            imgStyle={{
              height: '100%',
              width: '100%',
              objectFit: 'unset',
              objectPosition: 'unset',
            }}
          />
        </div>
        <div className="margin-p">
          <Division goldenAlt>
            <Copy style={{ paddingTop: 10 }}>
              <br className="mobile-only" />
              <br className="mobile-only" />
              <Video
                url="https://www.youtube.com/watch?v=6Ma-dnG53LU"
                style={{ border: 'unset' }}
              />
              <p
                style={{
                  color: '#2c2c2c',
                  marginBottom: 0,
                }}
              >
                <i style={{ display: 'block' }}>
                  Teachers at Aikiyam School are
                  <br className="desktop-only" />
                  inspired by Restorative Circles!
                </i>
                <Link
                  to="/system-building-initiatives/restorative-circles-in-aikiyam-school"
                  style={{ display: 'block' }}
                >
                  See more ⇝
                </Link>
              </p>
              <br className="mobile-only" />
              <br className="mobile-only" />
            </Copy>
            <Copy>
              <h2
                className="mask-h3"
                style={{
                  color: '#2c2c2c',
                  marginBottom: 10,
                }}
              >
                Bringing RC to You!
              </h2>
              <p
                style={{
                  color: '#2c2c2c',
                }}
              >
                In our aim to bring about a cultural shift in Auroville and how
                we engage with conflict, we’re hoping to bring RC and its
                principles to different groups in the community.
              </p>
              <p
                style={{
                  color: '#2c2c2c',
                }}
              >
                We invite any Working Groups, commercial Units, Services,
                schools and residential communities that are interested in
                learning more to reach out, so that we can design a training
                series together and/or look at how to collaborate.
              </p>
              <p
                style={{
                  color: '#2c2c2c',
                  marginBottom: 0,
                }}
              >
                <Link to="/system-building-initiatives">
                  See our System-Building Initiatives ⇝
                </Link>
              </p>
              <br className="mobile-only" />
              <br className="mobile-only" />
              <br className="mobile-only" />
              <br className="mobile-only" />
            </Copy>
          </Division>
        </div>
      </div>

      <TeamHighlight />
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
/** mapSizesToProps */
const mapSizesToProps = ({ width }) => ({
  isMobile: width <= 768,
})

export default withSizes(mapSizesToProps)(Page)
