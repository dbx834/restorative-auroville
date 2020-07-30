// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";
// import moment from 'moment'

import isNull from 'lodash/isNull'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import ContainerDimensions from 'react-container-dimensions'

import EventSchema from '@bodhi-project/seo/lib/EventSchema'
import { Header, Footer } from '@bodhi-project/semantic-webflow'

import PrevNext from '@bodhi-project/components/lib/prev-next'
import Image from '@bodhi-project/components/lib/image/Image'

import Division from '@bodhi-project/components/lib/division'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'

import StandardPage from './StandardPage'

import seoHelper from '../../methods/seoHelper'
import withUrl from '../../methods/withUrl'

import data from '../../data/website.json'

import EventRegisterationForm from '../forms/EventRegisterationForm'

const { Fragment } = React
const { Item: BItem } = Breadcrumb

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = props => {
  const {
    children,
    pageData,
    frontmatter,
    humanDate,
    next,
    prev,
    formattedDate,
  } = props
  const {
    // pageTitle,
    pageTitle: title,
    nakedPageSlug: route,
    // publishedTimestamp,
    // author,
    pageAbstract: abstract,
    cover,
    startDate,
    endDate,
    cost,
  } = pageData

  const seoData = seoHelper(pageData)
  const eventSchemaData = {
    name: title,
    url: `${data.websiteUrl}${route}`,
    description: abstract,
    startDate,
    endDate,
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

  return (
    <StandardPage className="" seoData={seoData} {...props}>
      <EventSchema data={eventSchemaData} />
      <Breadcrumb className="mask-p event-breadcrumb" separator="»">
        <BItem>
          <Link to="/">Home</Link>
        </BItem>
        <BItem>
          <Link to="/events">Workshops & Practice Groups</Link>
        </BItem>
        <BItem>{title}</BItem>
      </Breadcrumb>
      <Division golden>
        <div>
          <div className="notice-container">
            <Header>
              <Division golden>
                <Fragment>
                  <Image
                    src={cover}
                    rawWidth={1440}
                    rawHeight={900}
                    style={{
                      border: '1px solid #00006F',
                      height: 'auto',
                      width: '100%',
                      marginBottom: 11,
                    }}
                    className="mask-p event-cover"
                  />
                </Fragment>
                <Fragment>
                  <h1 className="mask-h3" style={{ marginTop: -6 }}>
                    {title}
                  </h1>
                  <p>
                    <i>
                      {formattedDate}
                      <br />
                      {frontmatter.fromTime}&nbsp;-&nbsp;
                      {frontmatter.toTime}
                    </i>
                  </p>
                </Fragment>
              </Division>
            </Header>
            {children}
            <ContainerDimensions>
              {({ width, height }) => {
                return (
                  <svg
                    width={width}
                    height={height}
                    viewBox={`0 0 ${width} ${height}`}
                    className="notice-overlay"
                  >
                    <rect
                      x="10"
                      y="10"
                      width={width - 20}
                      height={height - 20}
                      style={{
                        stroke: '#ff3434',
                        strokeWidth: 10,
                        fill: 'none',
                      }}
                      rx={20}
                      ry={20}
                    />
                    <line
                      id="line"
                      x1="17.5"
                      y1="17.5"
                      x2={width - 17.5}
                      y2={height - 17.5}
                      stroke="#ff3434"
                      strokeWidth="20"
                    />
                    <g>
                      <circle
                        cx={width / 2}
                        cy={height / 2}
                        r={80}
                        style={{ fill: '#ff3434' }}
                      />
                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        fill="#fff"
                        dy={-8}
                      >
                        <tspan>Paused until</tspan>
                        <tspan dy={18} dx={-95}>
                          further notice...
                        </tspan>
                      </text>
                    </g>
                  </svg>
                )
              }}
            </ContainerDimensions>
          </div>
          <Footer style={{ borderTop: '1px dotted #00006F' }}>
            <h1 className="mask-h4">More events</h1>
            <PrevNext
              prev={!isNull(prev) && { nakedPageSlug: prev.fields.route }}
              next={!isNull(next) && { nakedPageSlug: next.fields.route }}
              Link={Link}
            />
          </Footer>
        </div>
        <Fragment>
          <EventRegisterationForm
            event={{ node: { frontmatter, fields: { route, humanDate } } }}
            formattedDate={formattedDate}
          />
        </Fragment>
      </Division>
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
