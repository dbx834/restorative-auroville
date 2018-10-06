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
import Link from "gatsby-link";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
// import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import SectionAstridAlt from "@bodhi-project/blocks/lib/SectionAstridAlt";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/tag/style/css";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/card/style/css";

// import SectionHalley from "@bodhi-project/blocks/lib/SectionHalley";
// import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/list/style/css";
// import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/spin/style/css";
// import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/button/style/css";

import StandardPage from "../../components/StandardPage";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../../helpers/seoHelper";

import yurtCover from "../../assets/yurt/yurt4.jpeg";
import nvcX62 from "../../assets/gallery/nvcX62.jpg";
import nvcX20 from "../../assets/gallery/nvcX20.jpg";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
const currentProjects = [
  {
    route: "cross-cultural-dialogue", // http://localhost:8000/static/nvcX62.31bd6861.jpg
    humanDate: "2018",
    elapsed: "2 years ago",
    abstract:
      "We want to explore and understand this question: Are we divided in Auroville, as local Tamil Aurovilians and non-local Aurovilians?",
    title: "Cross-Cultural Dialogue",
    cover: nvcX62,
    date: "2016-09-16T00:00:00.000Z",
    category: "2.RC",
  },
  {
    route: "magazine",
    humanDate: "2017-2018",
    elapsed: "2 years ago",
    abstract:
      "We want to explore and understand this question: Are we divided in Auroville, as local Tamil Aurovilians and non-local Aurovilians?",
    title: "Magazine",
    cover:
      "https://images.unsplash.com/photo-1533153309598-39dd04d03af2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=762be954da945ab02dc032fa36850d9c&auto=format&fit=crop&w=1440&h=900&q=60",
    date: "2016-09-16T00:00:00.000Z",
    category: "2.RC",
  },
  {
    route: "restorative-circles-in-aikyam-school", // http://localhost:8000/static/nvcX20.bf58fb56.jpg
    humanDate: "2017-2018",
    elapsed: "2 years ago",
    abstract:
      "We want to explore and understand this question: Are we divided in Auroville, as local Tamil Aurovilians and non-local Aurovilians?",
    title: "Restorative Circles in Aikiyam School",
    cover: nvcX20,
    date: "2016-09-16T00:00:00.000Z",
    category: "2.RC",
  },
  {
    route: "filimng-a-live-restorative-circle",
    humanDate: "2016-2018",
    elapsed: "2 years ago",
    abstract:
      "We want to explore and understand this question: Are we divided in Auroville, as local Tamil Aurovilians and non-local Aurovilians?",
    title: "Filming a live Restorative Circle",
    cover:
      "https://images.unsplash.com/photo-1533153405494-6cf1f6354349?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2852890a231e91ae67186703503c9736&auto=format&fit=crop&w=1440&h=900&q=60",
    date: "2016-09-16T00:00:00.000Z",
    category: "2.RC",
  },
  {
    route: "building-a-yurt",
    humanDate: "2018",
    elapsed: "2 years ago",
    abstract:
      "We want to explore and understand this question: Are we divided in Auroville, as local Tamil Aurovilians and non-local Aurovilians?",
    title: "Building a Yurt",
    cover: yurtCover,
    date: "2016-09-16T00:00:00.000Z",
    category: "2.RC",
  },
  {
    route: "women-for-justice",
    humanDate: "2018",
    elapsed: "2 years ago",
    abstract:
      "We want to explore and understand this question: Are we divided in Auroville, as local Tamil Aurovilians and non-local Aurovilians?",
    title: "Women for Justice",
    cover:
      "https://images.unsplash.com/photo-1530231810657-c657c81a437d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c116b929e3b785f7100e8ec2204ba549&auto=format&fit=crop&w=1440&h=900&q=80",
    date: "2016-09-16T00:00:00.000Z",
    category: "2.RC",
  },
];

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Ongoing Initiatives",
  nakedPageSlug: "ongoing",
  pageAbstract: "Page abstract.",
};

const seoData = seoHelper(pageData);

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({
  display: "block",

  "& .ant-card": {
    boxShadow: "1px 2px 0 0 rgba(0, 0, 111, 1)",

    "&:hover": {
      boxShadow: "2px 4px 0 0 rgba(0, 0, 111, 1)",
    },
  },
});
const pageStyles = pageStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** OngoingInitiatives */
const OngoingInitiatives = props => {
  const astridData = {
    cards: currentProjects,
    components: {
      localLink: Link,
    },
    conf: {
      image: {
        rawCoverWidth: 1440,
        rawCoverHeight: 900,
      },
      columnWidth: "50%",
      tags: false,
    },
    categoryMap: {
      NVC: "Nonviolent Communication",
      RC: "Restorative Circles",
    },
  };

  return (
    <StandardPage className={pageStyles} seoData={seoData}>
      <h1 className="mask-h3">Ongoing Initiatives</h1>
      <p>
        Our approach incorporates different strategies, with the hope to connect
        with different aspects of our community life, so that we can better
        understand how to build systems that respond to our unique and complex
        reality.
      </p>
      <SectionAstridAlt data={astridData} />
    </StandardPage>
  );
};

OngoingInitiatives.propTypes = {
  data: PropTypes.object,
};

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default OngoingInitiatives;
