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
        <h1 className="mask-h3">Pranjal</h1>
        <p>
          Originally from the north of India, I grew up in Pondicherry at the
          Sri Aurobindo Ashram School. I graduated in Political Science and
          International Relations and then studied Peace and Conflict. To better
          understand the ground realities of conflict, I volunteered in Jammu
          and Kashmir, India where I was able to understand a little bit of its
          complexity. I found myself lacking in skills to participate in any
          resolution.
        </p>
        <p>
          In my search for meaningful engagements with conflicts I came to
          Auroville, hoping to learn new ways to manage conflicts at the ‘City
          of Dawn’. When I heard about mediating through restorative circles I
          was naturally drawn to its attitude towards conflict, as a natural
          phenomenon that needs understanding. I have been an apprentice at
          Restorative Auroville since October 2017 and have learnt deeply about
          how to engage with conflict. During my time as a volunteer, I’ve
          assisted in circles, helped organize events like the Walk of Hope and
          Cross-cultural dialogue. I’m convinced that the principles of
          Restorative circles are the way forward to greater understanding and
          lasting harmony.
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
