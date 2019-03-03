// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import PDFReader from '@bodhi-project/components/lib/PDFReader'

import Collapse from 'antd/lib/collapse'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/collapse/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const { Panel } = Collapse

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  '& .ant-collapse-header': {
    // background: '#f8f8ff !important',
    // border: '1px solid #00006F !important',
    paddingBottom: '0px !important',
    paddingTop: '0px !important',
    borderRadius: '0px !important',
    marginBottom: '10px !important',

    '& .anticon.anticon-right.arrow': {
      lineHeight: '0px !important',
    },
  },

  '& .ant-collapse-item': {
    border: 'unset !important',
  },

  '& .ant-collapse-content-box': {
    // background: '#f8f8ff !important',
    // border: '1px solid #00006F !important',
    padding: '0px !important',
    borderRadius: '0px !important',
    marginBottom: '0px !important',
  },
}).toString()

const pdfStyles = css({
  maxHeight: '600px !important',
  height: '600px !important',

  '& > div': {
    height: '600px !important',
    maxHeight: '600px !important',

    '& > iframe': {
      height: '600px !important',
      maxHeight: '600px !important',
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** PDFViewer */
const PDFViewer = props => {
  const { url, title = 'See PDF', width = '100%' } = props

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
            <div>
              <p className="mask-h6" style={{ marginBottom: 0 }}>
                {title}
              </p>
            </div>
          }
          key="1"
          showArrow
        >
          <div style={{ background: '#d1d1d1' }}>
            <div style={{ width, margin: 'auto' }}>
              <PDFReader url={url} className={pdfStyles} />
            </div>
            &nbsp;
          </div>
        </Panel>
      </Collapse>
    </div>
  )
}

// PDFViewer.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default PDFViewer
