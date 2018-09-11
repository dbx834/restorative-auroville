// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import indexOf from "lodash/indexOf";
import map from "lodash/map";
import join from "lodash/join";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import withSizes from "react-sizes";
import Link, { withPrefix } from "gatsby-link";
import "moment/locale/en-gb";
import { applyType } from "@bodhi-project/typography";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/blocks
import SectionPhoebe from "@bodhi-project/blocks/lib/SectionPhoebe";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/locale-provider/style/css";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/calendar/style/css";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/popover/style/css";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/tag/style/css";

import SectionHalleyAlt from "@bodhi-project/blocks/lib/SectionHalleyAlt";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/list/style/css";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/spin/style/css";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/button/style/css";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/select/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";
import globalWithMediaQueries from "../helpers/globalWithMediaQueries";

import MainBlock from "../components/MainBlock";
import StandardPage from "../components/StandardPage";

import nvc from "../assets/nvc.png";
import rc from "../assets/rc.png";
import goldStar from "../assets/goldStar.png";

import start from "../assets/start.png";
import middle from "../assets/middle.png";
import end from "../assets/end.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

globalWithMediaQueries(
  ".ant-popover-inner-content .phoebe-popcontent",
  { ...applyType("dkc2ilk", { range: [12, 21] }) },
  true,
);

globalWithMediaQueries(
  ".ant-popover-inner-content",
  {
    padding: 0,
  },
  true,
);

globalWithMediaQueries(
  ".ant-popover-inner-content p",
  {
    margin: 0,
  },
  true,
);

/** inArray */
const inArray = (array, value) => {
  let rx = false;
  if (indexOf(array, value) >= 0) {
    rx = true;
  }
  return rx;
};

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Calendar Of Events",
  nakedPageSlug: "calendar",
  pageAbstract:
    "We offer learning opportunities through workshops and practice groups on Nonviolent Communication and Restorative Circles. We are also available for individual coaching and mediation, and we are happy to consult with community-based projects that are seeking to shift paradigms.",
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
/** EventsAndCalendar */
class EventsAndCalendar extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
  }

  /** standard renderer */
  render() {
    const { isMobile } = this.props;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const events = [];

    map(postEdges, ({ node }) => {
      // Make banner
      let eventBanner = null;
      if (node.frontmatter.cover === "fallback") {
        const coverHint = join(node.frontmatter.tags, "-");
        eventBanner = withPrefix(
          `/content-assets/event-fallbacks/${coverHint}.jpg`,
        );
      } else {
        eventBanner = withPrefix(node.frontmatter.cover);
      }

      events.push({
        route: node.fields.route,
        humanDate: node.fields.humanDate,
        elapsed: node.fields.elapsed,
        beginDateInt: node.fields.beginDateInt,
        diff: node.fields.diff,
        abstract: inArray(node.frontmatter.tags, "practice-group")
          ? null
          : node.frontmatter.abstract,
        title: node.frontmatter.title,
        subTitle: node.frontmatter.subTitle,
        cover: eventBanner,
        date: node.frontmatter.date,
        startDate: node.frontmatter.startDate,
        finishDate: node.frontmatter.finishDate,
        fromTime: node.frontmatter.fromTime,
        toTime: node.frontmatter.toTime,
        category: node.frontmatter.category,
        tags: node.frontmatter.tags,
        type: node.frontmatter.type,
      });
    });

    const phoebeData = {
      events,
      components: {
        localLink: Link,
      },
      conf: {
        multiDay: {
          start,
          middle,
          end,
        },
      },
      tagMap: {
        nvc,
        rc,
      },
      nullTag: goldStar,
      categoryMap: {
        nvc: "Nonviolent Communication",
        rc: "Restorative Circles",
        practiceGroup: "Practice Group",
      },
    };

    const altHalleyData = {
      cards: events,
      components: {
        localLink: Link,
      },
      show: 4,
      tagMap: {
        nvc,
        rc,
        star: goldStar,
      },
    };

    return (
      <StandardPage className={pageStyles} seoData={seoData}>
        <h1 className="mask-h3">Calendar</h1>
        {!isMobile ? (
          <div className="mask-p">
            <SectionPhoebe data={phoebeData} />
          </div>
        ) : (
          <div className="mask-p">
            <SectionHalleyAlt data={altHalleyData} style={{ padding: 0 }} />
          </div>
        )}
      </StandardPage>
    );
  }
}

EventsAndCalendar.propTypes = {
  data: PropTypes.object,
};

// ----------------------------------------------------------------------------
// ---------------------------------------------------------------------- Query
// ----------------------------------------------------------------------------
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query UpcomingEventsQuery {
    allMarkdownRemark(
      limit: 365
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { type: { eq: "event" } } }
    ) {
      edges {
        node {
          fields {
            route
            humanDate
            elapsed
            beginDateInt
            diff
          }
          frontmatter {
            abstract
            title
            subTitle
            cover
            date
            startDate
            finishDate
            fromTime
            toTime
            category
            tags
            type
          }
        }
      }
    }
  }
`;
/* eslint-enable no-undef */

/** mapSizesToProps */
const mapSizesToProps = ({ width }) => ({
  isMobile: width <= 768,
});

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default withSizes(mapSizesToProps)(EventsAndCalendar);
