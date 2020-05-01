// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import { css } from 'glamor'

// import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import UpdateTitle from '@bodhi-project/seo/lib/UpdateTitle'
import GeneralMeta from '@bodhi-project/seo/lib/GeneralMeta'
import TwitterSummaryCard from '@bodhi-project/seo/lib/TwitterSummaryCard'
import OpenGraphSummary from '@bodhi-project/seo/lib/OpenGraphSummary'
import WebpageSchema from '@bodhi-project/seo/lib/WebpageSchema'
import BreadcrumbSchema from '@bodhi-project/seo/lib/BreadcrumbSchema'

import PrevNext from '@bodhi-project/components/lib/prev-next'

import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Layout from '../layout/Layout'

import Link from '../Link'
import DisqusComments from '../DisqusComments'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const { Item: BItem } = Breadcrumb

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({
  '& section': {
    padding: 0,
  },
})
const pageStyles = pageStyle.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Functions
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** StandardPage */
const StandardPage = props => {
  const {
    className,
    seoData,
    children,
    pageData,
    next = {},
    prev = {},
    notes = [],
  } = props
  const {
    pageTitle,
    generalMetaData,
    twitterSummaryCardData,
    openGraphSummaryData,
    webpageSchemaData,
    breadcrumbSchemaData,
  } = seoData

  return (
    <Layout {...props} className={`${pageStyles} ${className}`}>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
      <UpdateTitle title={pageTitle} />
      <GeneralMeta data={generalMetaData} />
      <TwitterSummaryCard data={twitterSummaryCardData} />
      <OpenGraphSummary data={openGraphSummaryData} />
      <WebpageSchema data={webpageSchemaData} />
      <BreadcrumbSchema data={breadcrumbSchemaData} />

      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
      <Fragment>
        <Breadcrumb
          className="mask-p"
          separator="»"
          style={{ marginBottom: 30 }}
        >
          <BItem>
            <Link to="/">Home</Link>
          </BItem>
          <BItem>
            <Link to="/outreach">Outreach</Link>
          </BItem>
          <BItem>{pageTitle}</BItem>
        </Breadcrumb>
        {children}
        <div style={{ borderTop: '1px dotted #00006F' }}>
          <h2 className="mask-h4">More projects</h2>
          <PrevNext next={next} prev={prev} Link={Link} />
        </div>
        <DisqusComments pageData={pageData} />
      </Fragment>
    </Layout>
  )
}

StandardPage.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default StandardPage
