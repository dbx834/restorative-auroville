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
import { Page } from "@bodhi-project/semantic-webflow";

import {
  // --------------- Basic
  UpdateTitle,
  GeneralMeta,
  // --------------- Twitter
  TwitterSummaryCard,
  // --------------- Open Graph
  OpenGraphSummary,
  // --------------- Schema.org JSON-LD
  WebpageSchema,
  BreadcrumbSchema,
} from "@bodhi-project/seo";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from "@bodhi-project/components/lib/Image";
import OutLink from "@bodhi-project/components/lib/OutLink";
import Container from "@bodhi-project/components/lib/Container";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Tooltip from "antd/lib/tooltip";
import "@bodhi-project/antrd/lib/nvc-website/tooltip/style/css";

import Video from "../components/Video";
import Quote from "../components/Quote";
import MainBlock from "../components/MainBlock";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";
import domestic from "../assets/domestic.png";
import international from "../assets/international.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "About Restorative Auroville",
  nakedPageSlug: "",
  pageAbstract: "Page abstract.",
};

const seoData = seoHelper(pageData);

const {
  pageTitle,
  generalMetaData,
  twitterSummaryCardData,
  openGraphSummaryData,
  webpageSchemaData,
  breadcrumbSchemaData,
} = seoData;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({});
const pageStyles = pageStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** IndexPage */
class IndexPage extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
  }

  /** standard constructor */
  componentDidMount() {
    console.log("hit");
  }

  /** standard renderer */
  render() {
    return (
      <Fragment>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <UpdateTitle title={pageTitle} />
        <GeneralMeta data={generalMetaData} />
        <TwitterSummaryCard data={twitterSummaryCardData} />
        <OpenGraphSummary data={openGraphSummaryData} />
        <WebpageSchema data={webpageSchemaData} />
        <BreadcrumbSchema data={breadcrumbSchemaData} />

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
        <Page className={pageStyles}>
          <Container>
            <MainBlock>
              <div>
                <h1>Fee Payment</h1>
                <p>
                  You may pay your fees here, or directly on the event page
                  you’re registering for.
                </p>
                <p>
                  Select the Domestic option for Indian bank/credit cards, or
                  the International option for foreign bank/credit cards.
                </p>
                <br />
                <div>
                  <OutLink
                    to="https://www.payumoney.com/paybypayumoney/#/767B47CF78C16C75195046663CFE75CD"
                    style={{ marginRight: 17 }}
                  >
                    <Tooltip title="Indian Card">
                      <div style={{ display: "inline-block" }}>
                        <Image
                          src={domestic}
                          rawHeight={450}
                          rawWidth={450}
                          className="icon"
                          style={{
                            height: 65,
                            width: 65,
                            display: "inline-block",
                            background: "transparent",
                            border: "unset",
                          }}
                        />
                      </div>
                    </Tooltip>
                  </OutLink>
                  <form
                    action="https://www.paypal.com/cgi-bin/webscr"
                    method="post"
                    target="_blank"
                    style={{ display: "inline-block" }}
                    className="hover"
                  >
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input
                      type="hidden"
                      name="hosted_button_id"
                      value="WFXM5RNDGBXL4"
                    />
                    <Tooltip title="International Card">
                      <input
                        type="image"
                        src={international}
                        border="0"
                        name="submit"
                        alt="PayPal – The safer, easier way to pay online!"
                        style={{
                          height: 65,
                          width: 65,
                        }}
                      />
                    </Tooltip>
                    <img
                      alt=""
                      border="0"
                      src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif"
                      width="1"
                      height="1"
                    />
                  </form>
                </div>
              </div>
              <div>
                <h3>Etc...</h3>
                <Video />
                <Quote />
              </div>
            </MainBlock>
          </Container>
        </Page>
      </Fragment>
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
