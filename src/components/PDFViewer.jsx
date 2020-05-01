// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import MediaQuery from 'react-responsive'

import PDFReader from '@bodhi-project/components/lib/pdf/reader'

import Image from '@bodhi-project/components/lib/image/Image'

import Collapse from 'antd/lib/collapse'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/collapse/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
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
      lineHeight: '24px !important',
      marginTop: '-2px',

      '@media(min-width: 992px)': {
        lineHeight: '34px !important',
      },
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

  '& .chirp': {
    bottom: -18,

    '& .chirp-image': {
      height: '30px !important',
      width: '30px !important',
    },

    '@media(min-width: 992px)': {
      bottom: -8,

      '& .chirp-image': {
        height: '40px !important',
        width: '40px !important',
      },
    },
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
class PDFViewer extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      client: false,
    }
  }

  /** after mount */
  componentDidMount() {
    this.setState({ client: true })
  }

  /** standard renderer */
  render() {
    const { url, title = 'See PDF', width = '100%' } = this.props
    const { client } = this.state

    return (
      <Fragment>
        {client === true && (
          <Fragment>
            <br style={{ display: 'none' }} />
            <MediaQuery minWidth={992}>
              {matches => (
                <div
                  className="mask-p"
                  style={{ maxWidth: matches ? 'calc(100% - 200px)' : '100%' }}
                >
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
                              className="chirp"
                              style={{
                                position: 'absolute',
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
                                }}
                                className="chirp-image"
                                rawWidth={900}
                                rawHeight={900}
                              />
                            </div>
                            <div
                              style={{
                                paddingLeft: 20,
                                width: 'calc(100% - 50px)',
                              }}
                            >
                              <p
                                className="mask-h6"
                                style={{ marginBottom: 0 }}
                              >
                                <span>{title}</span>
                              </p>
                            </div>
                          </div>
                        }
                        key="1"
                        showArrow
                      >
                        <div style={{ background: '#d1d1d1', padding: 12 }}>
                          <div
                            style={{
                              width: matches ? width : '100%',
                              margin: 'auto',
                            }}
                          >
                            <PDFReader url={url} className={pdfStyles} />
                          </div>
                          &nbsp;
                        </div>
                      </Panel>
                    </Collapse>
                  </div>
                </div>
              )}
            </MediaQuery>
            <br style={{ display: 'none' }} />
          </Fragment>
        )}
      </Fragment>
    )
  }
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default PDFViewer
