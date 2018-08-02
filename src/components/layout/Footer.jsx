// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";
// import classNames from "classnames";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Footer as SemanticFooter } from "@bodhi-project/semantic-webflow";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import OutLink from "@bodhi-project/components/lib/OutLink";
import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Row from "antd/lib/row";
import "@bodhi-project/antrd/lib/restorative-auroville/row/style/css";

import Col from "antd/lib/col";
import "@bodhi-project/antrd/lib/restorative-auroville/col/style/css";

import Icon from "antd/lib/icon";
import "@bodhi-project/antrd/lib/restorative-auroville/icon/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import packageJson from "../../../package.json";
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

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Footer
const footerStyle = css({
  background: "#00006F",
  color: "#FFFFFF",
});

const footerStyles = footerStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Footer */
const Footer = props => {
  return (
    <SemanticFooter className={footerStyles}>
      <Image
        src={underArea}
        style={{
          height: 30,
          width: "100%",
          border: 0,
          background: "transparent",
          marginBottom: 100,
        }}
        alt="Restorative Auroville"
      />
      <Row type="flex">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <p
            style={{
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            <span style={{ fontSize: "125%" }}>
              The One Quality Needed for the Path is Love, it is the essence of
              Sufism, and all that is needed by the wayfarer.
            </span>
          </p>
          <br />
          <div className="mask-p hidden-sm" style={{ textAlign: "center" }}>
            <OutLink to="https://www.facebook.com/JoyLivingLearning/">
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
              to="https://www.youtube.com/user/laurajoyful/videos"
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
                alt="See more videos on YouTube - https://www.youtube.com/user/laurajoyful/videos"
              />
            </OutLink>
            <OutLink
              to="https://vimeo.com/laurajoyful"
              style={{ marginLeft: 17 }}
            >
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
              <input
                type="hidden"
                name="hosted_button_id"
                value="WFXM5RNDGBXL4"
              />
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
              color: "#FFFFFF",
            }}
          >
            Made with&nbsp;
            <Icon
              type="heart"
              style={{ color: "#FFFFFF", fontSize: "80%" }}
            />&nbsp;by&nbsp;
            <OutLink
              to="https://www.bodhiproject.org/"
              style={{ color: "#FFFFFF" }}
            >
              Bodhi Project
            </OutLink>.
          </p>
          <p
            style={{
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Copyright © 2018 L’aura Joy & Joy Living Learning
          </p>
        </Col>
      </Row>
    </SemanticFooter>
  );
};

Footer.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

// --------------------------------------------------------------------- Export
export default Footer;
