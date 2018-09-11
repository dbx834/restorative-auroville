// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";
// import classNames from "classnames";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import isArray from "lodash/isArray";
import isString from "lodash/isString";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Footer as SemanticFooter } from "@bodhi-project/semantic-webflow";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import OutLink from "@bodhi-project/components/lib/OutLink";
import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Row from "antd/lib/row";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/row/style/css";

import Col from "antd/lib/col";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/col/style/css";

import Icon from "antd/lib/icon";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/icon/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import quotes from "../../data/quotes.json";
import underArea from "../../assets/underArea.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import vimeo from "../../assets/vimeo.png";
import paypal from "../../assets/paypal.png";
import payu from "../../assets/payu.png";
import soundcloud from "../../assets/soundcloud.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
/** returns a random number between min (inclusive) and max (exclusive) */
const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

/** returns a random int between min (inclusive) and max (exclusive) */
const getRandomArbitraryInt = (min, max) => {
  return Math.round(getRandomArbitrary(min, max));
};

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Footer
const footerStyle = css({
  borderTop: "2px dotted #00006F",
  paddingTop: 30,
  marginTop: 30,
  // background: "#d9d9d9",
});

const footerStyles = footerStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Footer */
const Footer = props => {
  const random = getRandomArbitraryInt(0, quotes.length);
  const quoteObj = quotes[random];
  const { quote, author } = quoteObj;

  return (
    <SemanticFooter className={footerStyles}>
      <p
        style={{
          textAlign: "center",
        }}
      >
        "<i>{isString(quote) && quote}</i>"
        <br />
        ~ {author}
      </p>
      <br />
      <div className="mask-p hidden-sm" style={{ textAlign: "center" }}>
        <OutLink to="https://www.facebook.com/RestorativeAuroville/">
          <Image
            src={facebook}
            rawWidth={450}
            rawHeight={450}
            style={{
              display: "inline-block",
              border: "none",
              background: "none",
              height: 45,
              width: 45,
            }}
            alt="Follow us on Facebook - https://www.facebook.com/JoyLivingLearning/"
          />
        </OutLink>
        <OutLink
          to="https://www.youtube.com/playlist?list=PLQbEiEQu-L1YAIZY5pLrNA5Z41yJ1L8pF"
          style={{ marginLeft: 17 }}
        >
          <Image
            src={youtube}
            rawWidth={450}
            rawHeight={450}
            style={{
              display: "inline-block",
              border: "none",
              background: "none",
              height: 45,
              width: 45,
            }}
            alt="See more videos on YouTube - https://www.youtube.com/playlist?list=PLQbEiEQu-L1YAIZY5pLrNA5Z41yJ1L8pF"
          />
        </OutLink>
        <OutLink to="https://vimeo.com/laurajoyful" style={{ marginLeft: 17 }}>
          <Image
            src={vimeo}
            rawWidth={450}
            rawHeight={450}
            style={{
              display: "inline-block",
              border: "none",
              background: "none",
              height: 42,
              width: 42,
            }}
            alt="See more videos on Vimeo - https://vimeo.com/laurajoyful"
          />
        </OutLink>
        <OutLink
          to="https://soundcloud.com/laura-joy-145472107"
          style={{ marginLeft: 17 }}
        >
          <Image
            src={soundcloud}
            rawWidth={450}
            rawHeight={450}
            style={{
              display: "inline-block",
              border: "none",
              background: "none",
              height: 42,
              width: 42,
            }}
            alt="Listen to our dialogues on Soundcloud - https://soundcloud.com/laura-joy-145472107"
          />
        </OutLink>
        <OutLink
          to="https://www.payumoney.com/paybypayumoney/#/767B47CF78C16C75195046663CFE75CD"
          style={{ marginLeft: 17 }}
        >
          <Image
            src={payu}
            rawWidth={450}
            rawHeight={450}
            style={{
              display: "inline-block",
              border: "none",
              background: "none",
              height: 42,
              width: 42,
            }}
            alt="Donate or pay fees through PayU - https://www.payumoney.com/paybypayumoney/#/767B47CF78C16C75195046663CFE75CD"
          />
        </OutLink>
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_blank"
          style={{ display: "inline-block", marginLeft: 17 }}
          className="hover"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="WFXM5RNDGBXL4" />
          <input
            type="image"
            src={paypal}
            border="0"
            name="submit"
            alt="PayPal – The safer, easier way to pay online!"
            style={{
              height: 42,
              width: 42,
            }}
          />
          <img
            alt=""
            border="0"
            src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </div>
      <p
        style={{
          textAlign: "center",
        }}
      >
        Made with&nbsp;
        <Icon type="heart" style={{ fontSize: "80%" }} />&nbsp;by&nbsp;
        <OutLink to="https://www.bodhiproject.org/">Bodhi Project</OutLink>.
      </p>
      <p
        style={{
          textAlign: "center",
        }}
      >
        Copyright © 2018 Joy Living Learning & Restorative Auroville
      </p>
    </SemanticFooter>
  );
};

Footer.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

// --------------------------------------------------------------------- Export
export default Footer;
