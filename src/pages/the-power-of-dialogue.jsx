// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
// import PropTypes from 'prop-types'
// import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import map from "lodash/map";
// import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";

import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Row from "antd/lib/row";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/row/style/css";

import Col from "antd/lib/col";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/col/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from "../components/StandardPage";

import seoHelper from "../helpers/seoHelper";

import p21 from "../assets/genies-precircle-with-janet.jpg";
import p31 from "../assets/engaging-with-restorative-circles-in-auroville.jpg";
import p32 from "../assets/designing-our-justice-system-consciously.jpg";
import p41 from "../assets/surya-on-restorative-circles.jpg";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: "The Power of Dialogue",
  nakedPageSlug: "the-power-of-dialogue",
  pageAbstract: "Page abstract.",
};

const seoData = seoHelper(pageData);

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = () => (
  <StandardPage className="" seoData={seoData}>
    <h1 className="mask-h3">The Power of Dialogue</h1>
    <p>
      We all have a certain idea - often unconscious! - about how change
      happens. And for the kind of transformation to a new paradigm we are
      talking about here, I've noticed that the models we have tend not to be
      useful. We all have quite a bit of unlearning and relearning to do.{" "}
    </p>
    <h1 className="mask-h3">1. The Craft</h1>
    <p>
      These videos are meant for the top leader ("CEO") of the organization, but
      they are equally relevant for other leaders championing the
      transformation. Remember the two conditions I believe are necessary for an
      organization to truly transform: the top leader is the one wanting and
      driving the change, and the board is supportive.
    </p>
    <h1 className="mask-h3">2. In Action</h1>
    <p>
      These videos are meant for the top leader ("CEO") of the organization, but
      they are equally relevant for other leaders championing the
      transformation. Remember the two conditions I believe are necessary for an
      organization to truly transform: the top leader is the one wanting and
      driving the change, and the board is supportive.
    </p>
    <Row gutter={{ md: 24 }}>
      <Col md={12}>
        <Link to="the-power-of-dialogue/genies-pre-circle-with-janet">
          <Image
            src={p21}
            style={{
              background: "transparent",
              border: "unset",
              height: "auto",
              width: "100%",
              marginBottom: 10,
            }}
            loader="gradient"
            rawWidth={1440}
            rawHeight={900}
          />
        </Link>
        <p>
          We all have preferences and biases. For instance, do you have a bias
          for clarity/formalization or for ambiguity/emergence? It's helpful to
          know your preferences, to become more flexible and adapt to what's
          needed.
        </p>
      </Col>
      <Col md={12}>&nbsp;</Col>
    </Row>
    <h1 className="mask-h3">3. The Restorative System</h1>
    <p>
      These videos are meant for the top leader ("CEO") of the organization, but
      they are equally relevant for other leaders championing the
      transformation. Remember the two conditions I believe are necessary for an
      organization to truly transform: the top leader is the one wanting and
      driving the change, and the board is supportive.
    </p>
    <Row gutter={{ md: 24 }}>
      <Col md={12}>
        <Link to="the-power-of-dialogue/engaging-with-restorative-circles-in-auroville">
          <Image
            src={p31}
            style={{
              background: "transparent",
              border: "unset",
              height: "auto",
              width: "100%",
              marginBottom: 10,
            }}
            loader="gradient"
            rawWidth={1440}
            rawHeight={900}
          />
        </Link>
        <p>
          We all have preferences and biases. For instance, do you have a bias
          for clarity/formalization or for ambiguity/emergence? It's helpful to
          know your preferences, to become more flexible and adapt to what's
          needed.
        </p>
      </Col>
      <Col md={12}>
        <Link to="the-power-of-dialogue/designing-our-justice-system-consciously">
          <Image
            src={p32}
            style={{
              background: "transparent",
              border: "unset",
              height: "auto",
              width: "100%",
              marginBottom: 10,
            }}
            loader="gradient"
            rawWidth={1440}
            rawHeight={900}
          />
        </Link>
        <p>
          We all have preferences and biases. For instance, do you have a bias
          for clarity/formalization or for ambiguity/emergence? It's helpful to
          know your preferences, to become more flexible and adapt to what's
          needed.
        </p>
      </Col>
    </Row>
    <h1 className="mask-h3">4. Experiences</h1>
    <p>
      These videos are meant for the top leader ("CEO") of the organization, but
      they are equally relevant for other leaders championing the
      transformation. Remember the two conditions I believe are necessary for an
      organization to truly transform: the top leader is the one wanting and
      driving the change, and the board is supportive.
    </p>
    <Row gutter={{ md: 24 }}>
      <Col md={12}>
        <Link to="the-power-of-dialogue/surya-on-restorative-circles">
          <Image
            src={p41}
            style={{
              background: "transparent",
              border: "unset",
              height: "auto",
              width: "100%",
              marginBottom: 10,
            }}
            loader="gradient"
            rawWidth={1440}
            rawHeight={900}
          />
        </Link>
        <p>
          We all have preferences and biases. For instance, do you have a bias
          for clarity/formalization or for ambiguity/emergence? It's helpful to
          know your preferences, to become more flexible and adapt to what's
          needed.
        </p>
      </Col>
      <Col md={12}>&nbsp;</Col>
    </Row>
  </StandardPage>
);

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page;
