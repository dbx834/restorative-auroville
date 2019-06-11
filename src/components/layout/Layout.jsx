// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import moment from 'moment'
import { graphql } from 'gatsby'

import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import MediaQuery from 'react-responsive'
import Typekit from 'react-typekit'
import typefn from '@bodhi-project/typography/lib/methods/type'
import {
  InitializeMeta,
  UpdateTitle,
  WebsiteSchema,
  OrganisationSchema,
} from '@bodhi-project/seo'
import { StickyContainer } from 'react-sticky'
import container from '@bodhi-project/components/lib/methods/container'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import '../../styles/index.less'
import indexImage from '../../assets/launch.jpg'
import data from '../../data/website.json'

import Header from './Header'
import Footer from './Footer'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
export const defaultImage = graphql`
  fragment defaultImage on File {
    childImageSharp {
      fluid(
        maxWidth: 2400
        quality: 80
        srcSetBreakpoints: [200, 400, 600, 800, 1000, 1200, 1600, 2000, 2400]
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------- Global SEO
// ----------------------------------------------------------------------------
const websiteSchemaData = {
  url: data.websiteUrl,
  name: data.websiteName,
  description: data.websiteDescription,
  author: data.org.name,
  publisher: data.org.name,
  image: indexImage,
}

const organisationSchemaData = {
  name: data.org.name,
  legalName: data.org.legalName,
  url: data.org.url,
  logo: `${data.org.url}${data.org.logo}`,
  foundingDate: moment(data.org.foundingDate).format(),
  founders: data.org.founders,
  streetAddress: data.orgLocation.streetAddress,
  addressLocality: data.orgLocation.addressLocality,
  addressRegion: data.orgLocation.addressRegion,
  postalCode: data.orgLocation.postalCode,
  addressCountry: data.orgLocation.addressCountry,
  telephone: data.orgContact.telephone,
  email: data.orgContact.email,
  sameAs: data.orgSocialMediaProfiles,
  image: indexImage,
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const style = css({
  '&#layout': {
    '@media(max-width: 992px)': {
      paddingTop: '1rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },

    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',

      '& header': {
        flexGrow: 0,
        flexBasis: 0,
      },

      '& footer': {
        flexGrow: 0,
        flexBasis: 0,
      },

      '& main': {
        paddingTop: '1rem',
        paddingBottom: '1rem',
        flexGrow: 1,
        flexBasis: 0,
      },
    },
  },

  '@media(min-width: 1200px)': {
    '& .small-only': {
      display: 'none',
    },
  },

  '@media(max-width: 1200px)': {
    '& .large-only': {
      display: 'none',
    },
  },

  '@media(min-width: 992px)': {
    '& .mobile-only': {
      display: 'none',
    },
  },

  '@media(max-width: 992px)': {
    '& .desktop-only': {
      display: 'none',
    },
  },

  '& .coming-soon': {
    '@media(max-width: 992px)': {
      maxWidth: 400,
    },
  },

  '& #fb': {
    '& > div': {
      '& > div': {
        '& > span': {
          width: '96px !important',
          overflow: 'hidden !important',

          '& > iframe': {
            width: '96px !important',
            overflow: 'hidden !important',
          },
        },
      },
    },
  },
}).toString()

const goldenMajorBlock = container({ goldenMajor: true, block: true })
const bleedBlock = container({ bleed: true, block: true })

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Layout */
class Layout extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    const typeClass = typefn({
      kit: 'jdd4npp',
      options: {
        range: [12, 20], // Min and Max font-sizes
        paragraphSpacingFactor: 1.2, // Greater for tighter paragraph-paragraph spacing
        headingParagraphGapSpacingFactor: 0, // Greater for tighter header-paragraph spacing
        indentParagraphs: false,
      },
    })

    this.state = {
      typeClass,
      client: false,
    }
  }

  /** after mount */
  componentDidMount() {
    this.setState({ client: true })

    if (!isUndefined(document)) {
      const htmlElement = document.documentElement
      if (htmlElement.classList.contains('lk-loading')) {
        htmlElement.classList.toggle('lk-loading')
      }
      if (!htmlElement.classList.contains('lk-active')) {
        htmlElement.classList.toggle('lk-active')
      }
    }
  }

  /** on mount */
  componentDidUpdate() {
    if (!isUndefined(window)) {
      if (this.state.client === true) {
        const element = document.getElementById('layout')
        element.scrollTop = 0
      }
    }
  }

  /** standard renderer */
  render() {
    const { children, className = '' } = this.props
    const { typeClass, client } = this.state
    const classNameX = `${typeClass} ${style} ${className}`

    return (
      <Fragment>
        {client === true && (
          <Fragment>
            <br style={{ display: 'none' }} />
            <MediaQuery minWidth={992}>
              {matches => (
                <div className={classNameX} id="layout">
                  <InitializeMeta
                    data={{ titleTemplate: `%s | ${data.websiteName}` }}
                  />
                  <UpdateTitle title="Restorative Circles in Auroville" />
                  <WebsiteSchema data={websiteSchemaData} />
                  <OrganisationSchema data={organisationSchemaData} />
                  <StickyContainer>
                    <Header
                      isDesktop={matches}
                      typeClass={typeClass}
                      {...this.props}
                    />
                    <main
                      role="main"
                      className={matches ? goldenMajorBlock : bleedBlock}
                    >
                      {children}
                    </main>
                    <Footer isDesktop={matches} />
                  </StickyContainer>
                  <Typekit kitId="jdd4npp" />
                </div>
              )}
            </MediaQuery>
            <br style={{ display: 'none' }} />
          </Fragment>
        )}
        {client === false && (
          <Fragment>
            <div className={classNameX} id="layout">
              <InitializeMeta
                data={{ titleTemplate: `%s | ${data.websiteName}` }}
              />
              <UpdateTitle title="Restorative Circles in Auroville" />
              <WebsiteSchema data={websiteSchemaData} />
              <OrganisationSchema data={organisationSchemaData} />
              <StickyContainer>
                <Header isDesktop typeClass={typeClass} {...this.props} />
                <main role="main" className={goldenMajorBlock}>
                  {children}
                </main>
                <Footer isDesktop />
              </StickyContainer>
              <Typekit kitId="jdd4npp" />
            </div>
          </Fragment>
        )}
      </Fragment>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// ----------------------------------------------------------------------- Export
export default Layout
