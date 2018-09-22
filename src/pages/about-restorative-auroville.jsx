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
  nakedPageSlug: "about-restorative-auroville",
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
        <h1 className="mask-h3">Our Project: Restorative Auroville</h1>
        <h2 className="mask-p">
          Restorative Auroville is an independent project that aims to bring the
          practice of{" "}
          <Link to="www.restorativecircles.org">Restorative Circles</Link>, a
          holistic, community-based form of conflict resolution, to Auroville,
          and to explore what a consciously designed justice system could look
          like here – one that reflects our ideals, but that is also effective
          and has the power to bring about constructive change, both on the
          individual and community levels.
        </h2>
        <p>
          As RC is a process that engages the community as an essential part of
          resolving conflicts, we trust that it will offer a way forward and
          support a shift in how we hold space for conflict and transformation.
        </p>
        <p>
          At present, Restorative Circles are offered as part of Auroville’s
          Conflict Resolution Policy (in addition to Mediation and Arbitration).
          However, our long-term dream is to bring about a radical shift in how
          we hold conflict as a community. Our project includes research,
          teaching, sharing of information, large-scale community involvement
          and events, experiments, testimonials, and more.
        </p>
        <p>
          After having studied and practiced the Restorative Circles process for
          5 years, we officially launched Restorative Auroville as a public
          service in September 2015. Because much of this work depends on how
          it’s received in the community, we do not know exactly where it will
          lead us and how long it will take.
        </p>
        <h2 className="mask-p">Aims & Objectives:</h2>
        <ul className="mask-p">
          <li>
            To co-create a Justice System in Auroville that reflects our values
            and is effective
          </li>
          <li>To continue to raise awareness in Auroville about RC</li>
          <li>
            To have a functioning Restorative System where people can call live
            Circles and a critical mass understands how the process works
          </li>
          <li>
            To train a large number of people and to have potential Facilitators
            across the community (in different neighbourhoods, Working Groups,
            schools, Units, Services, etc)
          </li>
          <li>
            To understand what is unique about Auroville and how to adapt RC to
            suit our needs and ideals
          </li>
          <li>
            To contribute to more ease and efficiency in resolving conflicts
            (increased goodwill, creativity, and inclusion instead of exclusion)
          </li>
          <li>
            To contribute towards a cultural shift in understanding conflict,
            its potential for transformation, and the need to take
            responsibility for our actions
          </li>
          <li>
            To contribute to restoring trust, communication and harmony amongst
            Aurovilians
          </li>
          <li>
            To potentially be an example for other communities seeking to
            improve their peace and justice systems
          </li>
        </ul>
        <p>
          Restorative Auroville is an initiative of{" "}
          <Link to="https://www.joylivinglearning.org/">
            Joy Living Learning
          </Link>, which is a Unit of the&nbsp;
          <Link to="https://www.auroville.org/">Auroville Foundation</Link>.
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
