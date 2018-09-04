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
            marginTop: -100,
          }}
          alt="Restorative Auroville"
        />

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Intro block */}
        <div style={{ display: "flex", marginBottom: 30, padding: "0em 2em" }}>
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
        <div style={{ display: "flex", marginBottom: 30, padding: "0em 2em" }}>
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
            <Card>
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
            </Card>
          </div>
        </div>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ RC block */}
        <div
          style={{
            marginBottom: 30,
            padding: "2em 2em",
          }}
        >
          <h1>Our Projects</h1>
          <div
            style={{
              display: "flex",
            }}
          >
            <div style={{ flexGrow: 62, flexBasis: 0 }}>
              <p>
                Joy Living Learning is situated in Auroville, an international
                community in south India that aims to actualize human unity.
                Given this environment, we are surrounded by opportunities for
                growth, learning and exploration.
              </p>
            </div>
            <div style={{ flexGrow: 38, flexBasis: 0 }}>&nbsp;</div>
          </div>
          <SectionAstridAlt data={astridData} />
        </div>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Team block */}
        <div style={{ display: "flex", marginBottom: 30, padding: "2em 2em" }}>
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
              community in south India that aims to actualize human unity. Given
              this environment, we are surrounded by opportunities for growth,
              learning and exploration.
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
              community in south India that aims to actualize human unity. Given
              this environment, we are surrounded by opportunities for growth,
              learning and exploration.
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
              community in south India that aims to actualize human unity. Given
              this environment, we are surrounded by opportunities for growth,
              learning and exploration.
            </p>
            <p>Find out more...</p>
          </Card>
        </div>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Extra */}
        <div style={{ display: "flex", marginBottom: 30, padding: "2em 2em" }}>
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
