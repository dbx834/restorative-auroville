// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import moment from 'moment'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Type } from '@bodhi-project/typography'
import {
  // --------------- Startup
  InitializeMeta,
  // --------------- Basic
  UpdateTitle,
  GeneralMeta,
  // --------------- Twitter
  TwitterSummaryCard,
  // --------------- Open Graph
  OpenGraphSummary,
  // --------------- Schema.org JSON-LD
  WebsiteSchema,
  OrganisationSchema,
  WebpageSchema,
  BreadcrumbSchema,
} from '@bodhi-project/seo'

import { StickyContainer, Sticky } from 'react-sticky'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import ResponsiveToggle from '@bodhi-project/components/lib/ResponsiveToggle'
import Container from '@bodhi-project/components/lib/Container'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import '../styles/index.less'
import indexImage from '../assets/launch.jpg'
import data from '../data/website.json'
import seoHelper from '../methods/seoHelper'

import WebsiteTitle from '../components/sandbox/WebsiteTitle'
import MobileNav from '../components/layout/MobileNav'
import DesktopNav from '../components/layout/DesktopNav'
import DesktopFooter from '../components/layout/DesktopFooter'
import MobileFooter from '../components/layout/MobileFooter'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions

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
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({
  // background: "#0053a5",
  padding: 0,

  '& #appWrapper': {
    // background: "#f2f2f2",
  },

  '& #contentWrapper': {
    paddingTop: '24px',

    '& #content': {
      minHeight: '100vh',
    },
  },

  '& #menuWrapper': {
    zIndex: 1000,
  },
})
const pageStyles = pageStyle.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Layout */
class Layout extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)
  }

  /** after mount */
  componentDidMount() {
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
      const element = document.getElementById('contentWrapper')
      element.scrollTop = 0
    }
  }

  /** standard renderer */
  render() {
    const { children } = this.props
    const {
      pageTitle,
      generalMetaData,
      twitterSummaryCardData,
      openGraphSummaryData,
      webpageSchemaData,
      breadcrumbSchemaData,
    } = seoData

    return (
      <Type kit="dkc2ilk" style={{ minHeight: '100vh' }} className={pageStyles}>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <InitializeMeta
          data={{ titleTemplate: `${pageTitle} | Restorative Auroville` }}
        />
        <WebsiteSchema data={websiteSchemaData} />
        <OrganisationSchema data={organisationSchemaData} />
        <UpdateTitle title={pageTitle} />
        <GeneralMeta data={generalMetaData} />
        <TwitterSummaryCard data={twitterSummaryCardData} />
        <OpenGraphSummary data={openGraphSummaryData} />
        <WebpageSchema data={webpageSchemaData} />
        <BreadcrumbSchema data={breadcrumbSchemaData} />

        <ResponsiveToggle id="appWrapper">
          {/* Mobile view */}
          <div id="mobile-app">
            <MobileNav {...this.props} />
            <div id="contentWrapper">
              <Container
                noFade
                bleed
                block
                id="content"
                style={{ paddingLeft: 6, paddingRight: 6 }}
              >
                {children()}
                <MobileFooter />
              </Container>
            </div>
          </div>

          {/* Desktop view */}
          <div id="desktop-app">
            <StickyContainer>
              <header>
                <Container goldenMajor block noFade>
                  <WebsiteTitle />
                </Container>
                <Sticky topOffset={100}>
                  {({ style, isSticky }) => (
                    <div id="menuWrapper" style={style}>
                      <DesktopNav isSticky={isSticky} {...this.props} />
                    </div>
                  )}
                </Sticky>
              </header>
              <div id="contentWrapper">
                <Container noFade goldenMajor block id="content">
                  {children()}
                </Container>
                <Container noFade goldenMajor block>
                  <DesktopFooter />
                </Container>
              </div>
            </StickyContainer>
          </div>
        </ResponsiveToggle>
      </Type>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// ----------------------------------------------------------------------- Export
export default Layout
