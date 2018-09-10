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
  pageTitle: "Coming Soon",
  nakedPageSlug: "",
  pageAbstract: "Page abstract.",
};

const seoData = seoHelper(pageData);

const events = [
  {
    route: "events/featured/2018/cross-cultural-dialogue",
    humanDate: "April Sat 28 - Sun 29, 2018",
    elapsed: "2 months ago",
    abstract:
      "In response to the recent claim of discrimination against some in the Tamil community in Auroville, we are hosting a 2-day Cross-Cultural Dialogue. We offer a space to explore this topic further and to have a deep sharing about our experiences and pain, as well as our felt sense of togetherness and aspiration to manifest Human Unity.",
    title: "Cross-Cultural Dialogue",
    subTitle: "na",
    cover:
      "https://www.joylivinglearning.org/content-assets/featured-events/2018/cross-cultural-dialogue.jpg",
    date: "2018-04-28T00:00:00.000Z",
    startDate: "2018-04-28T00:00:00.000Z",
    finishDate: "2018-04-29T00:00:00.000Z",
    fromTime: "9am",
    toTime: "5pm",
    category: "3.Featured",
    tags: ["workshop", "featured"],
    type: "event",
  },
  {
    route: "events/featured/2018/jul/restorative-circles-webinar-series",
    humanDate: "Tue, July 10, 2018",
    elapsed: "in 22 days",
    abstract:
      "Restorative Circles (RC) offer ways for individuals and communities to establish connection, discover meaning and recover power on profound levels.",
    title: "Restorative Circles Webinar Series (Online)",
    subTitle: "Every other Tuesday; July 10 thru November 13",
    cover:
      "https://www.joylivinglearning.org/content-assets/2018-events/onlinerc.png",
    date: "2018-07-10T00:00:00.000Z",
    startDate: null,
    finishDate: null,
    fromTime: "7pm",
    toTime: "9pm",
    category: "3.Featured",
    tags: ["rc", "workshop", "featured"],
    type: "event",
  },
  {
    route: "events/featured/2018/aug/nvc-mumbai",
    humanDate: "August Sat 4 - Sun 5, 2018",
    elapsed: "in 2 months",
    abstract:
      "We'll develop an understanding of NVC, and learn to embody these principles in our lives, moment-to-moment.",
    title: "Connection as Life Energy – NVC Level 1 (Mumbai)",
    subTitle: "na",
    cover:
      "https://www.joylivinglearning.org/content-assets/2018-events/nvc-mumbai.jpeg",
    date: "2018-08-04T00:00:00.000Z",
    startDate: "2018-08-04T00:00:00.000Z",
    finishDate: "2018-08-05T00:00:00.000Z",
    fromTime: "9.30am",
    toTime: "6pm",
    category: "3.Featured",
    tags: ["nvc", "workshop", "featured", "unregister", "unpay"],
    type: "event",
  },
  {
    route: "events/featured/2018/aug/restorative-circles-learning-community",
    humanDate: "August Thu 9 - Fri 10, 2018",
    elapsed: "in 2 months",
    abstract:
      "Restorative Circles (RC) offer ways for individuals and communities to establish connection, discover meaning and recover power on profound levels.",
    title: "Restorative Circles Learning Community (Pune)",
    subTitle: "na",
    cover:
      "https://www.joylivinglearning.org/content-assets/2018-events/punerc.png",
    date: "2018-08-09T00:00:00.000Z",
    startDate: "2018-08-09T00:00:00.000Z",
    finishDate: "2018-08-10T00:00:00.000Z",
    fromTime: "9.30am",
    toTime: "6pm",
    category: "3.Featured",
    tags: ["rc", "workshop", "featured", "unregister", "unpay"],
    type: "event",
  },
  {
    route: "events/featured/2018/aug/nvc-pune",
    humanDate: "August Sat 11 - Sun 12, 2018",
    elapsed: "in 2 months",
    abstract:
      "We'll develop an understanding of NVC, and learn to embody these principles in our lives, moment-to-moment.",
    title: "Connection as Life Energy – NVC Level 1 (Pune)",
    subTitle: "na",
    cover:
      "https://www.joylivinglearning.org/content-assets/2018-events/nvc-pune.jpeg",
    date: "2018-08-11T00:00:00.000Z",
    startDate: "2018-08-11T00:00:00.000Z",
    finishDate: "2018-08-12T00:00:00.000Z",
    fromTime: "9.30am",
    toTime: "6pm",
    category: "3.Featured",
    tags: ["nvc", "workshop", "featured", "unregister", "unpay"],
    type: "event",
  },
  {
    route: "events/featured/2018/restorative-circles-in-hungary",
    humanDate: "September Fri 14 - Sun 16, 2018",
    elapsed: "in 3 months",
    abstract:
      "Restorative Circles (RC) offer ways for individuals and communities to establish connection, discover meaning and recover power on profound levels. They create forums for reaching agreements that help sustain effective and nurturing relationships both personally and collectively.",
    title: "Restorative Circles in Hungary",
    subTitle: "na",
    cover:
      "https://www.joylivinglearning.org/content-assets/featured-events/2018/hungary-rc.jpg",
    date: "2018-09-14T00:00:00.000Z",
    startDate: "2018-09-14T00:00:00.000Z",
    finishDate: "2018-09-16T00:00:00.000Z",
    fromTime: "9am",
    toTime: "5pm",
    category: "3.Featured",
    tags: ["rc", "workshop", "featured"],
    type: "event",
  },
];

const halleyData = {
  cards: events,
  components: {
    localLink: Link,
  },
  show: 4,
  // tagMap: {
  //   nvc: nvc,
  //   rc: rc,
  // },
};

const learnMoreData = [
  {
    linkTo: "/writings/nonviolent-communication-and-restorative-circles",
    title: "Nonviolent Communication & Restorative Circles",
    image:
      "https://images.unsplash.com/photo-1472722266948-a898ab5ff257?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd8bab6c7d222fec4d2f89a12db3fe66&auto=format&fit=crop&w=1400&h=700&q=80",
  },
  {
    linkTo: "/writings/embracing-interdependence-with-nonviolent-communication",
    title: "Embracing Interdependence with Nonviolent Communication",
    image:
      "https://images.unsplash.com/photo-1472722266948-a898ab5ff257?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd8bab6c7d222fec4d2f89a12db3fe66&auto=format&fit=crop&w=1400&h=700&q=80",
  },
  {
    linkTo: "/writings/our-justice-system",
    title: "Our Justice System",
    image:
      "https://images.unsplash.com/photo-1472722266948-a898ab5ff257?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd8bab6c7d222fec4d2f89a12db3fe66&auto=format&fit=crop&w=1400&h=700&q=80",
  },
  {
    linkTo: "/writings/cross-cultural-dialogue",
    title: "Cross-Cultural Dialogue",
    image:
      "https://images.unsplash.com/photo-1472722266948-a898ab5ff257?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd8bab6c7d222fec4d2f89a12db3fe66&auto=format&fit=crop&w=1400&h=700&q=80",
  },
  {
    linkTo: "/writings/passivity-on-the-plane",
    title: "Passivity on the Plane",
    image:
      "https://images.unsplash.com/photo-1472722266948-a898ab5ff257?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd8bab6c7d222fec4d2f89a12db3fe66&auto=format&fit=crop&w=1400&h=700&q=80",
  },
  {
    linkTo: "/writings/ego",
    title: "ego",
    image:
      "https://images.unsplash.com/photo-1472722266948-a898ab5ff257?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd8bab6c7d222fec4d2f89a12db3fe66&auto=format&fit=crop&w=1400&h=700&q=80",
  },
];

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
