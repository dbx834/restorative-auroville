// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import withSizes from "react-sizes";
import Link from "gatsby-link";
import "moment/locale/en-gb";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/blocks
import Tabs from "antd/lib/tabs";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/tabs/style/css";

import Row from "antd/lib/row";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/row/style/css";

import Col from "antd/lib/col";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/col/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";
import StandardPage from "../components/StandardPage";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const TabPane = Tabs.TabPane;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Events",
  nakedPageSlug: "calendar",
  pageAbstract:
    "We offer learning opportunities through workshops and practice groups on Nonviolent Communication and Restorative Circles. We are also available for individual coaching and mediation, and we are happy to consult with community-based projects that are seeking to shift paradigms.",
};

const seoData = seoHelper(pageData);

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({
  "& .ant-tabs-nav-scroll": {
    textAlign: "unset !important",
  },

  "& .item": {
    width: "100%",
    display: "block",
    position: "relative",
    transition: "all 0.3s linear, opacity 0.2s linear",
    lineHeight: "50px",

    "&:before": {
      content: `""`,
      width: "100%",
      height: 2,
      position: "absolute",
      backgroundColor: "#272727",
      opacity: 0.08,
      top: 25,
      left: 0,
      zIndex: 1,
      transition: "all 0.2s linear",
    },

    "& a": {
      width: "100%",
      display: "block",
      position: "relative",
      border: 0,
      zIndex: 4,
      overflow: "hidden",
      lineHeight: "50px",

      "&:hover": {
        "& .day": {
          paddingRight: 20,
        },

        "&::after": {
          opacity: 1,
          zIndex: 20,
        },
      },

      "&:after": {
        content: `""`,
        width: 20,
        height: 15,
        position: "absolute",
        top: 17,
        right: 0,
        backgroundImage: `url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8"?><svg width="17px" height="14px" viewBox="0 0 17 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.7"><g id="Artboard-Copy-11" transform="translate(-872.000000, -2066.000000)" stroke="black" stroke-width="1.5"><g id="arrow" transform="translate(880.490381, 2073.069507) rotate(180.000000) translate(-880.490381, -2073.069507) translate(872.490381, 2066.569507)"><path d="M1.0804038,6.76950694 L15.6703738,6.76950694" id="Line"></path><path d="M0.487749094,7.37181072 L6.82588282,0.68336081" id="Line-Copy"></path><path d="M0.486030816,12.6847475 L6.6364344,6.19440378" id="Line-Copy-2" transform="translate(3.561233, 9.439576) scale(-1, 1) rotate(-180.000000) translate(-3.561233, -9.439576) "></path></g></g></g></svg>')`,
        backgroundSize: 16,
        backgroundColor: "white",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        zIndex: 2,
        opacity: 0,
        transition: "all 0.15s ease",
      },
    },

    "& .title": {
      display: "block",
      float: "left",
      position: "relative",
      backgroundColor: "#FFFFFF",
      paddingRight: 4,
    },

    "& .day": {
      position: "absolute",
      top: 0,
      right: 0,
      zIndex: 4,
      transition: "all 0.15s linear",
      backgroundColor: "#FFFFFF",
      paddingLeft: 4,
    },
  },
});
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
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const years = ["2019", "2018"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthColors = {
      Jan: "#6D00FF",
      Feb: "#0000C0",
      Mar: "#FFBF00",
      Jun: "#D5C200",
      Jul: "#FFE800",
      Aug: "#FFE800",
      Sep: "#8E3CFC",
      Oct: "#010195",
      Nov: "#6D00FF",
      Dec: "#3E0091",
    };

    return (
      <StandardPage className={pageStyles} seoData={seoData}>
        <Row gutter={{ xs: 24, sm: 24, md: 24 }}>
          <Col span={15}>
            <h1 className="mask-h3">Workshops & Events</h1>
            <Tabs type="card">
              {map(years, year => {
                return (
                  <TabPane tab={year} key={year}>
                    {map(months, month => {
                      return (
                        <div
                          style={{
                            paddingLeft: 12,
                            borderLeft: `8px solid ${monthColors[month]}`,
                            marginBottom: 12,
                            position: "relative",
                          }}
                        >
                          <h2
                            className="mask-h6"
                            style={{ textAlign: "right" }}
                          >
                            {month}
                          </h2>
                          <ul style={{ listStyle: "none", padding: 0 }}>
                            {map(postEdges, ({ node }) => {
                              const showThis =
                                node.fields.year === year &&
                                node.fields.month === month;
                              if (showThis === true) {
                                return (
                                  <li className="item">
                                    <Link to="#">
                                      <div className="title">
                                        {node.frontmatter.title}
                                      </div>
                                      <div className="day">
                                        {node.fields.dayOfMonth}
                                      </div>
                                    </Link>
                                  </li>
                                );
                              }
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </TabPane>
                );
              })}
            </Tabs>
          </Col>
          <Col span={9}>
            <h1 className="mask-h3">Workshops and Events</h1>
            <p>
              Joy Living Learning continues to offer regular NVC and RC
              workshops in Auroville and other cities in the country, plus
              weekly practice groups in Auroville.
            </p>
            <p>
              Joy Living Learning has also incorporated RC into Auroville's
              conflict resolution policy and is working towards building an
              alternative justice system in Auroville based on the principles
              that underly the NVC movement.
            </p>
          </Col>
        </Row>
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
            year
            month
            monthN
            dayOfMonth
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
