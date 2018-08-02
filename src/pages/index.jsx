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
import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Tabs from "antd/lib/tabs";
import "@bodhi-project/antrd/lib/restorative-auroville/tabs/style/css";

import Card from "antd/lib/card";
import "@bodhi-project/antrd/lib/restorative-auroville/card/style/css";

import SectionHalley from "@bodhi-project/blocks/lib/SectionHalley";
import "@bodhi-project/antrd/lib/restorative-auroville/list/style/css";
import "@bodhi-project/antrd/lib/restorative-auroville/spin/style/css";
import "@bodhi-project/antrd/lib/restorative-auroville/button/style/css";

import LearnMore from "../components/LearnMore";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const TabPane = Tabs.TabPane;

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

const {
  pageTitle,
  generalMetaData,
  twitterSummaryCardData,
  openGraphSummaryData,
  webpageSchemaData,
  breadcrumbSchemaData,
} = seoData;

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

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({
  marginTop: 60,
  "& section": {
    padding: 0,
  },

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
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Intro block */}
          <div
            style={{ display: "flex", marginBottom: 30, padding: "0em 2em" }}
          >
            <div style={{ flexGrow: 62, flexBasis: 0, paddingRight: 30 }}>
              <Card>
                <h1 className="squiggle">Restorative Auroville, Who we are</h1>
                <p>
                  Joy Living Learning is situated in Auroville, an international
                  community in south India that aims to actualize human unity.
                  Given this environment, we are surrounded by opportunities for
                  growth, learning and exploration.
                </p>
                <p>
                  Project write-up = what, why To Mention: AV, Dominic, NVC, RC
                  practice since 2010, Joy LL as legal entity, etc
                </p>
              </Card>
            </div>
            <div style={{ flexGrow: 38, flexBasis: 0 }}>
              <Card className="event-tabs">
                <Tabs defaultActiveKey="1">
                  <TabPane tab="Upcoming Events" key="1">
                    <SectionHalley data={halleyData} />
                  </TabPane>
                  <TabPane tab="Practice Groups" key="2">
                    <SectionHalley data={halleyData} />
                  </TabPane>
                  <TabPane tab="Workshops" key="3">
                    <SectionHalley data={halleyData} />
                  </TabPane>
                </Tabs>
              </Card>
            </div>
          </div>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ RC block */}
          <div
            style={{ display: "flex", marginBottom: 30, padding: "0em 2em" }}
          >
            <div style={{ flexGrow: 62, flexBasis: 0, paddingRight: 30 }}>
              <Card
                cover={
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
                }
              >
                <h2>Our RC System</h2>
                <p>
                  Joy Living Learning is situated in Auroville, an international
                  community in south India that aims to actualize human unity.
                  Given this environment, we are surrounded by opportunities for
                  growth, learning and exploration.
                </p>
                <p>Text explaining, visual</p>
              </Card>
            </div>
            <div style={{ flexGrow: 38, flexBasis: 0 }}>
              <h2>Call a Circle</h2>
              <p>
                Joy Living Learning is situated in Auroville, an international
                community in south India that aims to actualize human unity.
                Given this environment, we are surrounded by opportunities for
                growth, learning and exploration.
              </p>
              <p>
                <Link to="/call-a-restorative-circle">Find out more...</Link>
              </p>
              <h2>Testimonials</h2>
              <p>
                Joy Living Learning is situated in Auroville, an international
                community in south India that aims to actualize human unity.
                Given this environment, we are surrounded by opportunities for
                growth, learning and exploration.
              </p>
              <p>Find out more...</p>
              <h2>Statistics</h2>
              <p>
                Joy Living Learning is situated in Auroville, an international
                community in south India that aims to actualize human unity.
                Given this environment, we are surrounded by opportunities for
                growth, learning and exploration.
              </p>
              <p>Find out more...</p>
            </div>
          </div>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ RC block */}
          <div
            style={{
              display: "flex",
              marginBottom: 30,
              background: "#0054A5",
              padding: "2em 2em",
            }}
          >
            <div style={{ flexGrow: 62, flexBasis: 0, margin: "0px 20px" }}>
              <div>
                <h2>Our Projects</h2>
                <p>
                  Joy Living Learning is situated in Auroville, an international
                  community in south India that aims to actualize human unity.
                  Given this environment, we are surrounded by opportunities for
                  growth, learning and exploration.
                </p>
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
                <h3>Cross-Cultural Dialogue</h3>
                <p>
                  Joy Living Learning is situated in Auroville, an international
                  community in south India that aims to actualize human unity.
                  Given this environment, we are surrounded by opportunities for
                  growth, learning and exploration.
                </p>
                <p>Find out more...</p>
                <div style={{ display: "flex" }}>
                  <div
                    style={{ flexGrow: 50, flexBasis: 0, margin: "0px 20px" }}
                  >
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
                    <h3>Aikiyam School</h3>
                    <p>
                      Joy Living Learning is situated in Auroville, an
                      international community in south India that aims to
                      actualize human unity. Given this environment, we are
                      surrounded by opportunities for growth, learning and
                      exploration.
                    </p>
                    <p>Find out more...</p>
                  </div>
                  <div
                    style={{ flexGrow: 50, flexBasis: 0, margin: "0px 20px" }}
                  >
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
                    <h3>Building a system in AV</h3>
                    <p>
                      Joy Living Learning is situated in Auroville, an
                      international community in south India that aims to
                      actualize human unity. Given this environment, we are
                      surrounded by opportunities for growth, learning and
                      exploration.
                    </p>
                    <p>Find out more...</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ flexGrow: 38, flexBasis: 0, margin: "0px 20px" }}>
              <h2>Past Projects</h2>
              <p>
                Joy Living Learning is situated in Auroville, an international
                community in south India that aims to actualize human unity.
                Given this environment, we are surrounded by opportunities for
                growth, learning and exploration.
              </p>
              <h3>Film Festival</h3>
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
              <p>
                Joy Living Learning is situated in Auroville, an international
                community in south India that aims to actualize human unity.
                Given this environment, we are surrounded by opportunities for
                growth, learning and exploration.
              </p>
              <p>Find out more...</p>
              <h3>Walk of Hope</h3>
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
              <p>
                Joy Living Learning is situated in Auroville, an international
                community in south India that aims to actualize human unity.
                Given this environment, we are surrounded by opportunities for
                growth, learning and exploration.
              </p>
              <p>Find out more...</p>
              <p>See Archive...</p>
            </div>
          </div>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Team block */}
          <div
            style={{ display: "flex", marginBottom: 30, padding: "2em 2em" }}
          >
            <Card
              cover={
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
              }
              style={{
                flexGrow: 33,
                flexBasis: 0,
                marginRight: 20,
              }}
            >
              <h2>Organization</h2>
              <p>
                Joy Living Learning is situated in Auroville, an international
                community in south India that aims to actualize human unity.
                Given this environment, we are surrounded by opportunities for
                growth, learning and exploration.
              </p>
              <p>Find out more...</p>
            </Card>
            <Card
              cover={
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
              }
              style={{
                flexGrow: 33,
                flexBasis: 0,
                marginRight: 20,
              }}
            >
              <h2>Team</h2>
              <p>
                Joy Living Learning is situated in Auroville, an international
                community in south India that aims to actualize human unity.
                Given this environment, we are surrounded by opportunities for
                growth, learning and exploration.
              </p>
              <p>Find out more...</p>
            </Card>
            <Card
              cover={
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
              }
              style={{
                flexGrow: 33,
                flexBasis: 0,
                marginRight: 20,
              }}
            >
              <h2>Volunteer With Us</h2>
              <p>
                Joy Living Learning is situated in Auroville, an international
                community in south India that aims to actualize human unity.
                Given this environment, we are surrounded by opportunities for
                growth, learning and exploration.
              </p>
              <p>Find out more...</p>
            </Card>
          </div>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Extra */}
          <div
            style={{ display: "flex", marginBottom: 30, padding: "2em 2em" }}
          >
            <div style={{ flexGrow: 62, flexBasis: 0, paddingRight: 30 }}>
              <div>
                <h2>Further Links...</h2>
                <LearnMore data={learnMoreData} />
              </div>
            </div>
            <div style={{ flexGrow: 38, flexBasis: 0 }}>
              <h3>Find us on Facebook</h3>
              <FacebookProvider appId="218604115574634">
                <FBPage
                  href="https://www.facebook.com/JoyLivingLearning"
                  tabs="timeline,events,messages"
                />
              </FacebookProvider>
            </div>
          </div>
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
