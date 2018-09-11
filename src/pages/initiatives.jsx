// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import SectionAstridAlt from "@bodhi-project/blocks/lib/SectionAstridAlt";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/tag/style/css";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/card/style/css";

// import SectionHalley from "@bodhi-project/blocks/lib/SectionHalley";
// import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/list/style/css";
// import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/spin/style/css";
// import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/button/style/css";

import MainBlock from "../components/MainBlock";
import StandardPage from "../components/StandardPage";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
const currentProjects = [
  {
    route: "initiatives/cross-cultural-dialogue",
    humanDate: "2018",
    elapsed: "2 years ago",
    abstract:
      "We want to explore and understand this question: Are we divided in Auroville, as local Tamil Aurovilians and non-local Aurovilians?",
    title: "Cross-Cultural Dialogue",
    cover:
      "https://images.unsplash.com/photo-1533529318682-0c3e2fc1e225?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=66bef43351b3fe01a5b3b41f9d7d3a64&auto=format&fit=crop&w=1440&h=900&q=60",
    date: "2016-09-16T00:00:00.000Z",
    category: "2.RC",
  },
  {
    route: "initiatives/aikyam-school",
    humanDate: "2017-2018",
    elapsed: "2 years ago",
    abstract:
      "We want to explore and understand this question: Are we divided in Auroville, as local Tamil Aurovilians and non-local Aurovilians?",
    title: "Aikyam School Project",
    cover:
      "https://images.unsplash.com/photo-1533153309598-39dd04d03af2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=762be954da945ab02dc032fa36850d9c&auto=format&fit=crop&w=1440&h=900&q=60",
    date: "2016-09-16T00:00:00.000Z",
    category: "2.RC",
  },
  {
    route: "writings/cross-cultural-dialogue3",
    humanDate: "2016-2018",
    elapsed: "2 years ago",
    abstract:
      "We want to explore and understand this question: Are we divided in Auroville, as local Tamil Aurovilians and non-local Aurovilians?",
    title: "Ongoing Project #3",
    cover:
      "https://images.unsplash.com/photo-1533153405494-6cf1f6354349?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2852890a231e91ae67186703503c9736&auto=format&fit=crop&w=1440&h=900&q=60",
    date: "2016-09-16T00:00:00.000Z",
    category: "2.RC",
  },
  {
    route: "writings/cross-cultural-dialogue4",
    humanDate: "2018",
    elapsed: "2 years ago",
    abstract:
      "We want to explore and understand this question: Are we divided in Auroville, as local Tamil Aurovilians and non-local Aurovilians?",
    title: "Ongoing Project #4",
    cover:
      "https://images.unsplash.com/photo-1533141947706-226ac3586b0a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=62cfb92bd22d6e1f80062e04e41dac6e&auto=format&fit=crop&w=1440&h=900&q=60",
    date: "2016-09-16T00:00:00.000Z",
    category: "2.RC",
  },
];

const pastProjects = [
  {
    title: "Welcome to the Aquarium, the first of its kind",
    subTitle:
      "The aquarium, which has 250 species, took more than a year to set up and was funded by a group of investors.",
    image:
      "https://www.aljazeera.com/mritems/imagecache/mbdresplarge/mritems/Images/2018/7/30/b42634d5f9484791893dfb7c21a8c3b0_18.jpg",
    date: "2017-2018",
  },
  {
    title: "Welcome to the Aquarium, the first of its kind",
    subTitle:
      "The aquarium, which has 250 species, took more than a year to set up and was funded by a group of investors.",
    image:
      "https://www.aljazeera.com/mritems/imagecache/mbdresplarge/mritems/Images/2018/7/30/b42634d5f9484791893dfb7c21a8c3b0_18.jpg",
    date: "2017-2018",
  },
  {
    title: "Welcome to the Aquarium, the first of its kind",
    subTitle:
      "The aquarium, which has 250 species, took more than a year to set up and was funded by a group of investors.",
    image:
      "https://www.aljazeera.com/mritems/imagecache/mbdresplarge/mritems/Images/2018/7/30/b42634d5f9484791893dfb7c21a8c3b0_18.jpg",
    date: "2017-2018",
  },
  {
    title: "Welcome to the Aquarium, the first of its kind",
    subTitle:
      "The aquarium, which has 250 species, took more than a year to set up and was funded by a group of investors.",
    image:
      "https://www.aljazeera.com/mritems/imagecache/mbdresplarge/mritems/Images/2018/7/30/b42634d5f9484791893dfb7c21a8c3b0_18.jpg",
    date: "2017-2018",
  },
  {
    title: "Welcome to the Aquarium, the first of its kind",
    subTitle:
      "The aquarium, which has 250 species, took more than a year to set up and was funded by a group of investors.",
    image:
      "https://www.aljazeera.com/mritems/imagecache/mbdresplarge/mritems/Images/2018/7/30/b42634d5f9484791893dfb7c21a8c3b0_18.jpg",
    date: "2017-2018",
  },
];

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Projects",
  nakedPageSlug: "projects",
  pageAbstract: "Page abstract.",
};

const seoData = seoHelper(pageData);

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({
  display: "block",

  "& .project": {
    display: "flex",
    borderBottom: "1px solid #f2f2f2",
    paddingBottom: 30,
    marginBottom: 30,

    "& > div:nth-child(1)": {
      flexGrow: 58,
      flexBasis: 0,
    },

    "& > div:nth-child(2)": {
      flexGrow: 42,
      flexBasis: 0,
    },

    "& p.date": {
      marginBottom: 0,

      "& span": {
        fontSize: "80%",
      },
    },

    "& p.subTitle": {
      marginBottom: 0,
    },
  },
});
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
      },
      categoryMap: {
        NVC: "Nonviolent Communication",
        RC: "Restorative Circles",
      },
    };

    return (
      <StandardPage className={pageStyles} seoData={seoData}>
        <h1 className="mask-h3">Ongoing Initiatives</h1>
        <SectionAstridAlt data={astridData} />
        <br />
        <br />
        <h1 className="mask-h3" style={{ borderTop: "1px dotted #00006F" }}>
          Past Initiatives
        </h1>
        <br />
        <br />
        {map(pastProjects, project => {
          const { title, subTitle, image, date } = project;
          return (
            <div className="project">
              <div>
                <p className="date">
                  <span>{date}</span>
                </p>
                <h3 className="title mask-h4">{title}</h3>
                <p className="subTitle">{subTitle}</p>
              </div>
              <div>
                <Image
                  src={image}
                  style={{
                    height: "auto",
                    width: "100%",
                    border: 0,
                    background: "transparent",
                  }}
                  alt={`${title} – ${subTitle}`}
                />
              </div>
            </div>
          );
        })}
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
