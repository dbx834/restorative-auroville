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
import FacebookProvider, { Page as FBPage } from "react-facebook";
import { Page } from "@bodhi-project/semantic-webflow";
import {
  // --------------- Basic
  UpdateTitle,
  GeneralMeta,
  // --------------- Twitter
  TwitterSummaryCard,
  // --------------- Open Graph
  OpenGraphSummary,
  // --------------- Schema.org JSON-LD
  WebpageSchema,
  BreadcrumbSchema,
} from "@bodhi-project/seo";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Container from "@bodhi-project/components/lib/Container";
import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Tabs from "antd/lib/tabs";
import "antd/lib/tabs/style/css";

import SectionAstridAlt from "@bodhi-project/blocks/lib/SectionAstridAlt";
import "@bodhi-project/antrd/lib/restorative-auroville/tag/style/css";
import "@bodhi-project/antrd/lib/restorative-auroville/card/style/css";

import SectionHalley from "@bodhi-project/blocks/lib/SectionHalley";
import "@bodhi-project/antrd/lib/restorative-auroville/list/style/css";
import "@bodhi-project/antrd/lib/restorative-auroville/spin/style/css";
import "@bodhi-project/antrd/lib/restorative-auroville/button/style/css";

import MainBlock from "../components/MainBlock";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const TabPane = Tabs.TabPane;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
const currentProjects = [
  {
    route: "writings/cross-cultural-dialogue1",
    humanDate: "Fri, September 16, 2016",
    elapsed: "2 years ago",
    abstract:
      "We want to explore and understand this question: Are we divided in Auroville, as local Tamil Aurovilians and non-local Aurovilians?",
    title: "Cross-Cultural Dialogue",
    cover:
      "https://www.joylivinglearning.org/content-assets/covers/cross-cultural-dialogue.jpg",
    date: "2016-09-16T00:00:00.000Z",
    category: "2.RC",
  },
  {
    route: "writings/cross-cultural-dialogue2",
    humanDate: "Fri, September 16, 2016",
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
    humanDate: "Fri, September 16, 2016",
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
    humanDate: "Fri, September 16, 2016",
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
    date: "30 Jul 2018 12:37 GMT",
  },
  {
    title: "Welcome to the Aquarium, the first of its kind",
    subTitle:
      "The aquarium, which has 250 species, took more than a year to set up and was funded by a group of investors.",
    image:
      "https://www.aljazeera.com/mritems/imagecache/mbdresplarge/mritems/Images/2018/7/30/b42634d5f9484791893dfb7c21a8c3b0_18.jpg",
    date: "30 Jul 2018 12:37 GMT",
  },
  {
    title: "Welcome to the Aquarium, the first of its kind",
    subTitle:
      "The aquarium, which has 250 species, took more than a year to set up and was funded by a group of investors.",
    image:
      "https://www.aljazeera.com/mritems/imagecache/mbdresplarge/mritems/Images/2018/7/30/b42634d5f9484791893dfb7c21a8c3b0_18.jpg",
    date: "30 Jul 2018 12:37 GMT",
  },
  {
    title: "Welcome to the Aquarium, the first of its kind",
    subTitle:
      "The aquarium, which has 250 species, took more than a year to set up and was funded by a group of investors.",
    image:
      "https://www.aljazeera.com/mritems/imagecache/mbdresplarge/mritems/Images/2018/7/30/b42634d5f9484791893dfb7c21a8c3b0_18.jpg",
    date: "30 Jul 2018 12:37 GMT",
  },
  {
    title: "Welcome to the Aquarium, the first of its kind",
    subTitle:
      "The aquarium, which has 250 species, took more than a year to set up and was funded by a group of investors.",
    image:
      "https://www.aljazeera.com/mritems/imagecache/mbdresplarge/mritems/Images/2018/7/30/b42634d5f9484791893dfb7c21a8c3b0_18.jpg",
    date: "30 Jul 2018 12:37 GMT",
  },
];

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Projects",
  nakedPageSlug: "",
  pageAbstract: "Page abstract.",
};

const seoData = seoHelper(pageData);

const {
  pageTitle,
  generalMetaData,
  twitterSummaryCardData,
  openGraphSummaryData,
  webpageSchemaData,
  breadcrumbSchemaData,
} = seoData;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({
  "& .projects": {
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
      <Fragment>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <UpdateTitle title={pageTitle} />
        <GeneralMeta data={generalMetaData} />
        <TwitterSummaryCard data={twitterSummaryCardData} />
        <OpenGraphSummary data={openGraphSummaryData} />
        <WebpageSchema data={webpageSchemaData} />
        <BreadcrumbSchema data={breadcrumbSchemaData} />

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
        <Page className={pageStyles}>
          <Container block>
            <h1>Ongoing Projects</h1>
            <SectionAstridAlt data={astridData} />
            <br />
            <br />
            <br />
            <br />

            <MainBlock>
              <div className="projects">
                <h1>Past Projects</h1>

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
              </div>
              <div>Etc...</div>
            </MainBlock>
          </Container>
        </Page>
      </Fragment>
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
