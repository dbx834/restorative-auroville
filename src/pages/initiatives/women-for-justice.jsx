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
import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
// import Tabs from "antd/lib/tabs";
// import "antd/lib/tabs/style/css";

import StandardPage from "../../components/StandardPage";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../../helpers/seoHelper";

import flyer from "../../assets/women-for-justice-flyer.jpg";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Women for Justice",
  nakedPageSlug: "women-for-justice",
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
      <h1 className="mask-h3">Restorative Auroville presents:</h1>
      <Image
        src={flyer}
        style={{
          background: "transparent",
          border: "unset",
          height: "62vh",
          width: "auto",
          marginBottom: 10,
          display: "block",
        }}
        loader="gradient"
        rawWidth={598}
        rawHeight={677}
      />
      <p>live Tamil translation and English subtitles</p>
      <p>A Story About The Power of Solidarity (53 minutes)</p>
      <p>
        Violence against women is omnipresent and nearly all women, independent
        of class, caste and religion are affected. Because police and justice
        hardly give any protection or aid, women have organized to fight against
        this violence and injustice. In Gujarat, they founded the “Women for
        Justice” and the “Nari Adalat” women´s courts. Every week they gather on
        the roof terrace of the local government or under a tree and dispense
        justice themselves. With quick-wittedness and creativity they put
        beating husbands and quarrelsome mother-in-laws in their place. And – if
        necessary – they go in as a “heavy squad” to help a poor widow, who was
        thrown out of the house with her little daughter after the death of her
        husband, to regain her belongings.
      </p>
      <p>
        The movie will be presented by Nimisha Desai, Women-NGO "Olakh", Gujarat
      </p>
      <p>
        After the movie is enough time for discussion and for special guest
        Nimisha to introduce further the work of the Women for Justice.
      </p>
      <p>All are welcome,</p>
      <p>women & men, girls & boys !</p>
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
