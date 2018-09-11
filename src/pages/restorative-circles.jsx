// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Images from "@bodhi-project/components/lib/Images";
import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Video from "../components/Video";
import Quote from "../components/Quote";
import MainBlock from "../components/MainBlock";
import StandardPage from "../components/StandardPage";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";

import nvcX1 from "../assets/gallery/nvcX1.jpg";
import nvcX2 from "../assets/gallery/nvcX2.jpg";
import nvcX4 from "../assets/gallery/nvcX4.jpg";

const photos = [
  { src: nvcX1, width: 600, height: 450 },
  { src: nvcX4, width: 600, height: 800 },
  { src: nvcX2, width: 600, height: 353 },
  { src: nvcX1, width: 600, height: 450 },
];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions

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
      <StandardPage className={pageStyles} seoData={seoData}>
        <h1 className="mask-h3">Restorative Circles</h1>
        <h2 className="mask-p">
          A Restorative Circle (RC) is a community process designed to hold
          space for those in conflict. It brings together the three parties in a
          conflict – those who acted, those directly impacted, and the wider
          community – within an intentional systemic context, to dialogue as
          equals. Participants invite each other and attend voluntarily. The
          dialogue process used is shared openly with all participants, and
          facilitated by a community member. The process ends when actions have
          been found that bring mutual benefit and nurture the inherent
          integrity of all those involved in the conflict.
        </h2>
        <p>
          Restorative Circles are facilitated in 3 stages, and are designed to
          identify the key factors in the conflict, reach agreements on next
          steps, and evaluate the results. As Circles form, they invite shared
          power, mutual understanding, self-responsibility and effective action
          within the community.
        </p>
        <div className="mask-p">
          <Image
            src="https://www.joylivinglearning.org/content-assets/restorative-circles/rc_800X561.png"
            style={{
              height: "auto",
              width: "75%",
              border: 0,
              background: "transparent",
            }}
            alt="Restorative Auroville"
          />
        </div>
        <p>
          Restorative Circles offer a form of conflict resolution, but the
          practice also offers a consciousness – and a large part of integrating
          this work into our community involves a cultural shift around how we
          perceive conflict and how we can find co-creative, empowered ways of
          restoring harmony and trust amongst us.
        </p>
        <p>
          Restorative Circles are a specific restorative practice whose
          development began with the work of Dominic Barker in the favelas in
          Rio de Janeiro in the mid 1990s and continues with a growing community
          both in Brazil and internationally. [Source: Dominic Barter and
          Restorative Circles]
        </p>

        <h1 className="mask-h3">Call a Circle</h1>
        <p>
          Send an email to restorative@auroville.org.in, or speak in person to
          any of the following: L’aura, Janet, Kati or Pranjal. A Facilitator
          will follow up with you, hear your concerns, explain the RC process,
          and confirm whether you’d like to go ahead with a Circle or not.
        </p>
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
