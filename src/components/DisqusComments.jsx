// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Disqus from 'disqus-react'

import Image from '@bodhi-project/components/lib/Image'

import Collapse from 'antd/lib/collapse'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/collapse/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import data from '../data/website.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const { Panel } = Collapse

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
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
      lineHeight: '34px !important',
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

  '& .chirpy': {
    position: 'absolute',
    bottom: -4,
    right: -3,
    height: 75,
    width: 150,
    zIndex: 100,

    '& .chirpy-bird': {
      height: 75,
      width: 150,
    },

    '@media(max-width: 400px)': {
      height: 35,
      width: 70,
      bottom: -4,
      right: -7,

      '& .chirpy-bird': {
        height: 35,
        width: 70,
      },
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** DisqusComments */
const DisqusComments = props => {
  const { pageData } = props
  const disqusShortname = 'restorativeauroville'
  const disqusConfig = {
    url: `${data.websiteUrl}${pageData.nakedPageSlug}`,
    identifier: `${data.websiteUrl}${pageData.nakedPageSlug}`,
    title: pageData.pageTitle,
  }

  return (
    <div className="mask-p">
      <Collapse
        defaultActiveKey={['9']}
        accordion
        bordered={false}
        className={style}
      >
        <Panel
          header={
            <div
              style={{
                position: 'relative',
                width: '100%',
              }}
            >
              <div className="chirpy">
                <Image
                  src="/assets/chirp.webp"
                  style={{
                    background: 'transparent',
                    border: 'unset',
                  }}
                  className="chirpy"
                  rawWidth={1800}
                  rawHeight={900}
                />
              </div>
              <div
                style={{
                  paddingLeft: 20,
                  width: 'calc(100% - 160px)',
                  minWidth: 310,
                }}
              >
                <p className="mask-h6">
                  <span>Read and/or leave a comment...</span>
                </p>
                <p style={{ marginTop: 0 }}>
                  <span>
                    Please share your thoughts and inspiration. Our hope is for
                    these comments to create a space for collective wisdom to
                    emerge on Restorative Circles and justice. And a little
                    request to please stay on topic and to keep your comments
                    relevant and practical, so that other viewers are benefited.
                  </span>
                </p>
                <p style={{ marginBottom: 0 }}>
                  <span>Click to open the Disqus window.</span>
                </p>
              </div>
            </div>
          }
          key="1"
          showArrow
        >
          <aside>
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </aside>
        </Panel>
      </Collapse>
    </div>
  )
}

DisqusComments.propTypes = {
  pageData: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default DisqusComments
