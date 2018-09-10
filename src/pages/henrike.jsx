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
        <h1 className="mask-h3">Henrike</h1>
        <p>
          I was born and raised in Holland, where I studied Anthropology and
          Law. In this time, I did some research into restorative justice models
          as they are found among native groups around the world. I was
          fascinated and convinced of the basic principles, but unsure whether
          these systems can still be relevant for communities that are bigger,
          less interdependent.
        </p>
        <p>
          When I came to settle in Auroville in 2017, I realized that the work
          of Restorative Auroville would be my chance to see how a restorative
          justice system might emerge outside of traditional ethnic groups.
          Auroville is still a relatively small community, but there are very
          few ‘set’ ways of doing things together. This provides an amazing
          opportunity to try and move towards a sense of justice that supports
          the whole community well-being. I am happy to work and do my small
          part to make it happen!
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
