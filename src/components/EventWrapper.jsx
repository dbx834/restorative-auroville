// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";
import moment from 'moment'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import startsWith from 'lodash/startsWith'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// import { Link } from 'gatsby'
import { EventSchema } from '@bodhi-project/seo'
import { Header } from '@bodhi-project/semantic-webflow'
import { FacebookProvider, Like as FBLike } from 'react-facebook'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Row from 'antd/lib/row'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'

import Col from 'antd/lib/col'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from './StandardPage'

import seoHelper from '../methods/seoHelper'
import withUrl from '../methods/withUrl'

import data from '../data/website.json'

import EventRegisterationForm from './EventRegisterationForm'

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = props => {
  const { children, pageData, frontmatter, humanDate } = props
  const {
    // pageTitle,
    pageTitle: title,
    nakedPageSlug: route,
    publishedTimestamp,
    author,
    pageAbstract: abstract,
    cover,
    begins,
    ends,
    cost,
  } = pageData

  const seoData = seoHelper(pageData)
  const eventSchemaData = {
    name: title,
    url: `${data.nakedWebsiteUrl}${route}`,
    description: abstract,
    startDate: begins,
    endDate: ends,
    locationName: data.orgLocation.locationName,
    locationUrl: data.orgLocation.locationUrl,
    streetAddress: data.orgLocation.streetAddress,
    addressLocality: data.orgLocation.addressLocality,
    addressRegion: data.orgLocation.addressRegion,
    postalCode: data.orgLocation.postalCode,
    addressCountry: data.orgLocation.addressCountry,
    image: `${data.websiteUrl}${cover}`,
    performer: {
      name: data.org.founders[0],
      image: `${data.websiteUrl}${cover}`,
      sameAs: data.orgSocialMediaProfiles,
    },
    offers: {
      price: cost,
      priceCurrency: 'INR',
      url: `${data.websiteUrl}${route}`,
    },
  }
  const dateStr = moment(frontmatter.date).format('ddd, MMMM D, YYYY')

  return (
    <StandardPage className="" seoData={seoData}>
      <EventSchema data={eventSchemaData} />
      <Row gutter={{ xs: 24, sm: 36, md: 48 }}>
        <Col sm={24} md={15}>
          <Header>
            <h1 className="mask-h3">{title}</h1>
            <p>{dateStr}</p>
            <p>
              <i>{abstract}</i>
            </p>
            <div style={{ position: 'relative' }} className="mask-p">
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 101,
                  backgroundColor: '#ffffff',
                  zIndex: 10,
                  height: 20,
                  width: 'calc(100% - 96px)',
                }}
              />
              <div style={{ maxWidth: 96 }} id="fb">
                <FacebookProvider appId="218604115574634">
                  <FBLike
                    href={withUrl(route, data)}
                    colorScheme="dark"
                    showFaces
                    share
                  />
                </FacebookProvider>
              </div>
            </div>
            <Image
              src={cover}
              rawWidth={1440}
              rawHeight={900}
              style={{
                border: 0,
                height: 'auto',
                width: '100%',
                marginBottom: 11,
              }}
              className="mask-p"
            />
          </Header>
          {children}
        </Col>
        <Col sm={24} md={9}>
          <EventRegisterationForm
            event={{ node: { frontmatter, fields: { route, humanDate } } }}
          />
        </Col>
      </Row>
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
