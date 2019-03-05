// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import PDFReader from '@bodhi-project/components/lib/PDFReader'

import Image from '@bodhi-project/components/lib/Image'

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
    background: '#fff3e8 !important',
    border: '1px solid #e67100 !important',
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
      <div>
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
                <div
                  style={{
                    position: 'absolute',
                    bottom: -8,
                    right: -3,
                    height: 40,
                    zIndex: 100,
                  }}
                >
                  <Image
                    src="/assets/chirp-pdf.webp"
                    style={{
                      background: 'transparent',
                      border: 'unset',
                      height: 40,
                      width: 40,
                    }}
                    rawWidth={900}
                    rawHeight={900}
                  />
                </div>
                <div style={{ paddingLeft: 20, width: 'calc(100% - 50px)' }}>
                  <p className="mask-h6" style={{ marginBottom: 0 }}>
                    <span>{title}</span>
                  </p>
                </div>
              </div>
            }
            key="1"
            showArrow
          >
            <div style={{ background: '#d1d1d1', padding: 12 }}>
              <div style={{ width, margin: 'auto' }}>
                <PDFReader url={url} className={pdfStyles} />
              </div>
              &nbsp;
            </div>
          </Panel>
        </Collapse>
      </div>
    </div>
  )
}

// PDFViewer.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default PDFViewer
