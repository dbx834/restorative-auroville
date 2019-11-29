// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import DisqusComments from '@bodhi-project/components/lib/DisqusComments'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/collapse/style/css'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/icon/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  position: 'relative',
  marginTop: '80px !important',

  '& .chirpy': {
    width: 150,
    height: 60,
    position: 'absolute',
    top: -75,
    right: 0,
    zIndex: 100,
  },

  '&.simple': {
    '& aside': {
      background: '#f8f8ff !important',
      paddingLeft: '16px !important',
      paddingRight: '16px !important',
      paddingTop: '8px !important',
      // paddingBottom: '8px !important',
      border: '1px solid #00006F !important',
      borderRadius: '8px !important',

      '& > p:nth-child(1)': {
        display: 'none',
      },

      '& > p:nth-child(2)': {
        marginTop: '0px !important',
      },
    },
  },

  '& .ant-collapse-header': {
    background: '#f8f8ff !important',
    border: '1px solid #00006F !important',
    paddingLeft: '16px !important',
    paddingRight: '16px !important',
    paddingTop: '8px !important',
    paddingBottom: '8px !important',
    borderRadius: '8px !important',
    marginBottom: '10px !important',
    display: 'flex',
    alignItems: 'flex-start',

    '& .anticon': {
      verticalAlign: 'unset !important',
      top: 'unset !important',
      transform: 'unset !important',
      lineHeight: '26px !important',
    },

    '& > div': {
      '& > p': {
        '& > span': {
          fontSize: '90%',
        },
      },
    },
  },

  '& .ant-collapse-item': {
    border: 'unset !important',
  },

  '& .ant-collapse-content-box': {
    background: '#f8f8ff !important',
    border: '1px solid #00006F !important',
    padding: '16px !important',
    borderRadius: '8px !important',
    marginBottom: '20px !important',
  },

  '& .instructions': {
    paddingLeft: 20,

    '@media(min-width: 992px)': {
      width: 'calc(100% - 160px)',
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
const query = graphql`
  query {
    chirpy: file(relativePath: { eq: "chirpy.png" }) {
      ...defaultImage
    }
  }
`

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** DisqusCommentsX */
const DisqusCommentsX = ({
  pageData,
  collapsible = true,
  text = [
    <p>
      <strong>Please share your thoughts and inspiration…</strong>
      <br />
      Our hope is to create a space for sharing on Restorative Circles and
      justice. And a little request to please stay on topic and to keep your
      comments relevant and practical, so that other readers can also benefit
      from the exchange.
    </p>,
  ],
}) => {
  const styleX = `${style} mask-p`

  return (
    <div
      className={`${collapsible === false ? 'simple' : 'collapse'} ${styleX}`}
    >
      <StaticQuery
        query={query}
        render={data => (
          <div className="chirpy">
            <Img fluid={data.chirpy.childImageSharp.fluid} />
          </div>
        )}
      />
      <DisqusComments
        data={{
          websiteUrl: 'https://www.restorativeauroville.org/',
          disqusConfig: {
            disqusShortname: 'restorativeauroville',
          },
        }}
        pageData={pageData}
        text={text}
        collapsible={collapsible}
      />
    </div>
  )
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default DisqusCommentsX
