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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import OutLink from "@bodhi-project/components/lib/OutLink";
import Images from "@bodhi-project/components/lib/Images";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
// import Tabs from "antd/lib/tabs";
// import "antd/lib/tabs/style/css";

import StandardPage from "../../components/StandardPage";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../../helpers/seoHelper";

import yurt4 from "../../assets/yurt/yurt4.jpeg";
import yurt2 from "../../assets/yurt/yurt2.jpeg";
import yurt3 from "../../assets/yurt/yurt3.jpeg";
import yurt5 from "../../assets/yurt/yurt5.jpeg";

const photos = [
  { src: yurt4, width: 600, height: 450 },
  { src: yurt2, width: 600, height: 800 },
  { src: yurt3, width: 600, height: 450 },
  { src: yurt5, width: 600, height: 450 },
];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Building an RC Yurt",
  nakedPageSlug: "building-an-rc-yurt",
  pageAbstract: "Page abstract.",
};

const seoData = seoHelper(pageData);

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({});
const pageStyles = pageStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Initiative */
const Initiative = props => {
  return (
    <StandardPage className={pageStyles} seoData={seoData}>
      <h1 className="mask-h3">Building a Yurt</h1>
      <p>
        With our work growing, it’s high-time that we build a physical structure
        for our RC gatherings. We’re hoping to raise Rs.5 lakhs, in order to set
        up a dismountable yurt in Centre Field.
      </p>
      <p>
        Over the past 3 years, we’ve hosted almost 30 live Circles, and each
        time we’re faced with the challenge of finding a suitable meeting space.
        As we don’t have a budget for this work, we try our best to find a space
        that’s available for free, and oftentimes we end up sitting in L’aura’s
        living room -- which is cozy, but not workable as a long-term
        professional space.
      </p>
      <p>
        We’d like to create a space that’s more neutral, and that’s designed to
        accommodate about 30-40 people sitting in a circle.
      </p>
      <div className="mask-p">
        <Images photos={photos} loader="gradient" columns={2} />
      </div>
      <p>
        In the context of today’s Auroville, we think a dismountable and
        moveable structure would be the best. We visited a yurt built by
        Jean-Marc, and we loved its circular design. We’d like to set up a
        similar yurt in Centre Field, next to L’aura’s house.
      </p>
      <p>
        The estimated cost to put up this yurt is Rs.5 lakhs, and we’re looking
        for financial support. If you’re inspired by our project and would like
        to help, we welcome your contributions. Please know that any amount is
        greatly appreciated.
      </p>
      <p>We look forward to providing a new space for community growth.</p>
      <p>
        To contribute, you may choose from the options below, and receipts can
        be provided if requested.
      </p>
      <ol className="mask-p">
        <li>
          From within Auroville:
          <ul>
            <li style={{ fontSize: "unset" }}>
              Make a transfer/deposit at Financial Services to “Joy Living
              Projects,” Acct # 252235
              <ul>
                <li style={{ fontSize: "unset" }}>
                  Please specify “for RC Yurt, Joy Living Learning Project.”
                </li>
                <li style={{ fontSize: "unset" }}>
                  Please notify us by email (restorative@auroville.org.in) that
                  you’ve made a transfer, so that we can track your
                  contribution.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          From within India and/or abroad:
          <ul>
            <li style={{ fontSize: "unset" }}>
              Follow the payment link{" "}
              <OutLink to="https://donations.auroville.com/">here</OutLink>.
              <ul>
                <li style={{ fontSize: "unset" }}>
                  Please select “Other” in the Project select, specify “for RC
                  Yurt, Joy Living Learning Project.”
                </li>
                <li style={{ fontSize: "unset" }}>
                  Please notify us by email (restorative@auroville.org.in) that
                  you’ve made a transfer, so that we can track your
                  contribution.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
    </StandardPage>
  );
};

Initiative.propTypes = {
  data: PropTypes.object,
};

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Initiative;
