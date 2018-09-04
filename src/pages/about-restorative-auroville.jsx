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
        <MainBlock>
          <div>
            <h1>About Restorative Auroville</h1>
            <h2 className="mask-p">
              We envision a world where everyone’s needs matter, where we live
              in a consciousness of trust and abundance, knowing that each one
              of us inherently belongs, and that together we are more powerful
              than apart.
            </h2>
            <p>
              Our mission is to live and share the principles of Nonviolence,
              not only in terms of an individual practice and way of life, but
              also in its application to social structures, such as in our
              families, schools, and organizations.
            </p>
            <div className="mask-p">
              <Images photos={photos} loader="gradient" columns={2} />
            </div>
            <p>
              Our mission is to live and share the principles of Nonviolence,
              not only in terms of an individual practice and way of life, but
              also in its application to social structures, such as in our
              families, schools, and organizations.
            </p>
            <p>
              Our mission is to live and share the principles of Nonviolence,
              not only in terms of an individual practice and way of life, but
              also in its application to social structures, such as in our
              families, schools, and organizations.
            </p>
          </div>
          <div>
            <h3>Etc...</h3>
            <Video />
            <Quote />
          </div>
        </MainBlock>
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
