// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// import Link from "gatsby-link";
import ReactReader from "react-reader/lib/ReactReader/ReactReader";
import ContainerDimensions from "react-container-dimensions";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
// import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Row from "antd/lib/row";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/row/style/css";

import Col from "antd/lib/col";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/col/style/css";

import Button from "antd/lib/button";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/button/style/css";

import Modal from "antd/lib/modal";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/modal/style/css";

import StandardPage from "../components/StandardPage";
import Video from "../components/Video";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Volunteer",
  nakedPageSlug: "volunteer",
  pageAbstract: "Page abstract.",
};

const seoData = seoHelper(pageData);

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyles = css({});
const pageStyle = pageStyles.toString();

const fullscreenStyles = css({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  transition: "all 0.6s ease",
  zIndex: 1001,
  overflowX: "hidden",
  overflowY: "hidden",
});
const fullscreenStyle = fullscreenStyles.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** IndexPage */
class IndexPage extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);

    this.state = {
      fullscreen: false,
      location: null,
      largeText: false,
    };
    this.rendition = null;

    this.toggleFullscreen = this.toggleFullscreen.bind(this);
    this.onToggleFontSize = this.onToggleFontSize.bind(this);
    this.onLocationChanged = this.onLocationChanged.bind(this);
    this.getRendition = this.getRendition.bind(this);
  }

  /** onToggleFontSize */
  onToggleFontSize(location) {
    const nextState = !this.state.largeText;
    this.setState(
      {
        largeText: nextState,
      },
      () => {
        this.rendition.themes.fontSize(nextState ? "140%" : "100%");
      },
    );
  }

  /** onLocationChanged */
  onLocationChanged(location) {
    this.setState({ location });
  }

  /** getRendition */
  getRendition(rendition) {
    // Set inital font-size, and add a pointer to rendition for later updates
    const { largeText } = this.state;
    this.rendition = rendition;
    rendition.themes.fontSize(largeText ? "140%" : "100%");
  }

  /** toggleFullscreen */
  toggleFullscreen() {
    this.setState({ fullscreen: !this.state.fullscreen });
  }

  /** standard renderer */
  render() {
    const { fullscreen, location } = this.state;
    console.log(location);

    return (
      <StandardPage className={pageStyle} seoData={seoData}>
        <h1 className="mask-h3">Videos</h1>
        <Row gutter={{ md: 24 }}>
          <Col md={12}>
            <Video url="https://www.youtube.com/watch?v=tuJrfIFd3IY" />
          </Col>
          <Col md={12}>
            <Video url="https://www.youtube.com/watch?v=ur4OvDPkoSE" />
          </Col>
        </Row>
        <div style={{ position: "relative" }}>
          <h1 className="mask-h3">Book Reader</h1>
          <Button
            onClick={this.toggleFullscreen}
            style={{ position: "absolute", top: 0, right: 0 }}
          >
            Fullscreen
          </Button>
          <ContainerDimensions>
            {({ width }) => {
              const screenWidth = width / 0.625;
              const isNotSmallScreen = screenWidth > 800;
              const large = width + 200;

              return (
                <Fragment>
                  {isNotSmallScreen === true && (
                    <div
                      style={{
                        position: "relative",
                        width: large,
                        marginLeft: -100,
                        height: "calc(100vh - 180px)",
                        border: "1px solid #00006F",
                      }}
                    >
                      {fullscreen === false && (
                        <ReactReader
                          url="/alice.epub"
                          title="Alice in wonderland"
                          locationChanged={this.onLocationChanged}
                          location={location}
                          getRendition={this.getRendition}
                        />
                      )}
                    </div>
                  )}
                </Fragment>
              );
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
                position: "relative",
                width: "90vw",
                height: "90vh",
              }}
            >
              {fullscreen === true && (
                <ReactReader
                  url="/alice.epub"
                  title="Alice in wonderland"
                  locationChanged={this.onLocationChanged}
                  location={location}
                  getRendition={this.getRendition}
                />
              )}
            </div>
          </Modal>
        </div>
      </StandardPage>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object,
};

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default IndexPage;
