// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import ReactReader from 'react-reader/lib/ReactReader/ReactReader'
import ContainerDimensions from 'react-container-dimensions'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/button/style/css'

import Modal from 'antd/lib/modal'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/modal/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** IndexPage */
class IndexPage extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      fullscreen: false,
      location: null,
      largeText: false,
    }
    this.rendition = null

    this.toggleFullscreen = this.toggleFullscreen.bind(this)
    this.onToggleFontSize = this.onToggleFontSize.bind(this)
    this.onLocationChanged = this.onLocationChanged.bind(this)
    this.getRendition = this.getRendition.bind(this)
  }

  /** onToggleFontSize */
  onToggleFontSize(location) {
    const nextState = !this.state.largeText
    this.setState(
      {
        largeText: nextState,
      },
      () => {
        this.rendition.themes.fontSize(nextState ? '140%' : '100%')
      }
    )
  }

  /** onLocationChanged */
  onLocationChanged(location) {
    this.setState({ location })
  }

  /** getRendition */
  getRendition(rendition) {
    // Set inital font-size, and add a pointer to rendition for later updates
    const { largeText } = this.state
    this.rendition = rendition
    rendition.themes.fontSize(largeText ? '140%' : '100%')
  }

  /** toggleFullscreen */
  toggleFullscreen() {
    this.setState({ fullscreen: !this.state.fullscreen })
  }

  /** standard renderer */
  render() {
    const { fullscreen, location } = this.state
    const { title, url } = this.props

    return (
      <div style={{ position: 'relative', background: '#FFFFFF' }}>
        <h1 className="mask-h3">{title}</h1>
        <Button
          onClick={this.toggleFullscreen}
          style={{ position: 'absolute', top: 0, right: 0 }}
        >
          Fullscreen
        </Button>
        <ContainerDimensions>
          {({ width }) => {
            const screenWidth = width / 0.625
            const isNotSmallScreen = screenWidth > 800
            const large = width + 200

            return (
              <Fragment>
                {isNotSmallScreen === true && (
                  <div
                    style={{
                      position: 'relative',
                      width: large,
                      marginLeft: -100,
                      height: 'calc(100vh - 180px)',
                      border: '1px solid #00006F',
                      background: '#FFFFFF',
                    }}
                  >
                    {fullscreen === false && (
                      <ReactReader
                        url={url}
                        title="AV RC System"
                        locationChanged={this.onLocationChanged}
                        location={location}
                        getRendition={this.getRendition}
                      />
                    )}
                  </div>
                )}
              </Fragment>
            )
          }}
        </ContainerDimensions>
        <Modal
          title={false}
          visible={fullscreen}
          onCancel={this.toggleFullscreen}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Close
            </Button>,
          ]}
          width="100vw"
          style={{
            top: 0,
            paddingBottom: 0,
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '90vw',
              height: '90vh',
            }}
          >
            {fullscreen === true && (
              <ReactReader
                url={url}
                title="AV RC System"
                locationChanged={this.onLocationChanged}
                location={location}
                getRendition={this.getRendition}
              />
            )}
          </div>
        </Modal>
      </div>
    )
  }
}

IndexPage.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default IndexPage
