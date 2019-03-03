// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Disqus from 'disqus-react'

//
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
    padding: '16px !important',
    borderRadius: '8px !important',
    marginBottom: '10px !important',
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
    <Collapse
      defaultActiveKey={['9']}
      accordion
      bordered={false}
      className={style}
    >
      <Panel
        header={
          <div style={{ paddingLeft: 20 }}>
            <p className="mask-h6" style={{ marginBottom: 0 }}>
              Leave a comment…
            </p>
          </div>
        }
        key="1"
        showArrow
      >
        <aside>
          <p>
            Please share your thoughts and inspiration. Our hope is for these
            comments to create a space for collective wisdom to emerge on
            Restorative Circles and justice.
          </p>
          <p>
            And a little request to please stay on topic and to keep your
            comments relevant and practical, so that other viewers are
            benefited.
          </p>
          <div className="mask-p">
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </aside>
      </Panel>
    </Collapse>
  )
}

DisqusComments.propTypes = {
  pageData: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default DisqusComments
