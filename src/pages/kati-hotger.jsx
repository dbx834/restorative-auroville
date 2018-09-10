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

import laura1 from "../assets/laura3.jpeg";
import laura2 from "../assets/laura2.jpeg";
import laura3 from "../assets/laura4.jpeg";

const lauraPhotos = [
  { src: laura1, width: 900, height: 600 },
  { src: laura2, width: 900, height: 600 },
  { src: laura3, width: 900, height: 600 },
  { src: laura1, width: 900, height: 600 },
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
        <h1 className="mask-h3">Kati Hötger</h1>
        <p>
          I was born, raised and educated in Germany. Based in the city of Köln
          (Cologne) for 44 years, I made my professional career as a director
          for documentaries and was active in building up a cooperative,
          independent film culture in Germany.
        </p>
        <p>
          After 25 years of filmmaking, my personal change came about by
          attending a training in conflict resolution and civil peace service. I
          was very inspired by this intense learning over several months, and
          felt immediately how it met my longing to contribute to society on a
          deeper human level.
        </p>
        <p>
          Two long-term assignments in (post-)conflict countries (3 years in Sri
          Lanka and 1.5 years in Georgia/Central Asia) proved that I was on the
          right track.
        </p>
        <p>
          Learning and implementing Restorative Circles with L'aura and
          "Restorative Auroville" is another milestone in my never-ending
          learning process. I feel blessed that I can join our steps towards a
          justice system for Auroville where connection is more important than
          punishment.
        </p>
        <div className="mask-p">
          <Images photos={lauraPhotos} loader="gradient" columns={2} />
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
