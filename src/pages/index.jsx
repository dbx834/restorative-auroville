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
import FacebookProvider, { Page as FBPage } from "react-facebook";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Tabs from "antd/lib/tabs";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/tabs/style/css";

import Card from "antd/lib/card";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/card/style/css";

import SectionHalley from "@bodhi-project/blocks/lib/SectionHalley";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/list/style/css";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/spin/style/css";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/button/style/css";

import SectionAstridAlt from "@bodhi-project/blocks/lib/SectionAstridAlt";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/tag/style/css";
// import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/card/style/css";

import LearnMore from "../components/LearnMore";
import StandardPage from "../components/StandardPage";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";

import banner from "../assets/banner.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;
const { TabPane } = Tabs;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Restorative Circles in Auroville",
  nakedPageSlug: "",
  pageAbstract: "Page abstract.",
};

const seoData = seoHelper(pageData);

const currentProjects = [
  {
    route: "writings/cross-cultural-dialogue1",
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
    route: "writings/cross-cultural-dialogue2",
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
];

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({
  "& .event-tabs": {
    "& .ant-card-body": {
      padding: 0,

      "& .ant-tabs-bar": {
        marginBottom: 0,
      },

      "& .ant-list": {
        padding: "1em",
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
      <StandardPage className={pageStyles} seoData={seoData}>
        <Image
          src={banner}
          style={{
            height: "auto",
            width: "100%",
            border: 0,
            background: "transparent",
            marginBottom: 10,
          }}
          alt="Restorative Auroville"
        />

        <h1 className="mask-h3">Restorative Auroville</h1>
        <p>
          Restorative Auroville is an independent project that aims to bring the
          practice of{" "}
          <Link to="www.restorativecircles.org">Restorative Circles</Link>, a
          holistic, community-based form of conflict resolution, to Auroville,
          and to explore what a consciously designed justice system could look
          like here – one that reflects our ideals, but that is also effective
          and has the power to bring about constructive change, both on the
          individual and community levels.
        </p>

        <h1 className="mask-h3" style={{ borderBottom: "1px dotted #00006F" }}>
          Current & Upcoming Events
        </h1>

        <div style={{ display: "flex" }}>
          <div style={{ flexGrow: 1, flexBasis: 0, paddingRight: 10 }}>
            <Image
              src="https://images.unsplash.com/photo-1472722266948-a898ab5ff257?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd8bab6c7d222fec4d2f89a12db3fe66&auto=format&fit=crop&w=1400&h=700&q=80"
              style={{
                height: "auto",
                width: "100%",
                border: 0,
                background: "transparent",
                marginBottom: 10,
              }}
              alt="Restorative Auroville"
            />
            <h4>Event blah blah</h4>
            <p>
              <strong>Event blah blah</strong>
            </p>
          </div>
          <div style={{ flexGrow: 1, flexBasis: 0, paddingRight: 10 }}>
            <Image
              src="https://images.unsplash.com/photo-1472722266948-a898ab5ff257?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd8bab6c7d222fec4d2f89a12db3fe66&auto=format&fit=crop&w=1400&h=700&q=80"
              style={{
                height: "auto",
                width: "100%",
                border: 0,
                background: "transparent",
                marginBottom: 10,
              }}
              alt="Restorative Auroville"
            />
            <h4>Event blah bleh</h4>
            <p>
              <strong>Event blah bleh</strong>
            </p>
          </div>
          <div style={{ flexGrow: 1, flexBasis: 0 }}>
            <Image
              src="https://images.unsplash.com/photo-1472722266948-a898ab5ff257?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd8bab6c7d222fec4d2f89a12db3fe66&auto=format&fit=crop&w=1400&h=700&q=80"
              style={{
                height: "auto",
                width: "100%",
                border: 0,
                background: "transparent",
                marginBottom: 10,
              }}
              alt="Restorative Auroville"
            />
            <h4>Event bluh bleh</h4>
            <p>
              <strong>Event bluh bleh</strong>
            </p>
          </div>
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
