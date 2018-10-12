// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";
import moment from "moment";
import axios from "axios";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from "lodash/map";
import filter from "lodash/filter";
import reverse from "lodash/reverse";
import values from "lodash/values";
import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import withSizes from "react-sizes";
import "moment/locale/en-gb";
import treeParser from "@bodhi-project/markdown-to-react/lib/treeParser";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/blocks
import Tabs from "antd/lib/tabs";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/tabs/style/css";

import Row from "antd/lib/row";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/row/style/css";

import Col from "antd/lib/col";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/col/style/css";

import Icon from "antd/lib/icon";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/icon/style/css";

import Button from "antd/lib/button";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/button/style/css";

import Drawer from "antd/lib/drawer";
import "@bodhi-project/antrd/lib/futuristic/3.8.4/drawer/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";
import StandardPage from "../components/StandardPage";

import EventRegisterationForm from "../components/EventRegisterationForm";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { TabPane } = Tabs;

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
    display: "flex",
    padding: "4px 9px",

    "&:nth-child(odd)": {
      backgroundColor: "rgba(255, 191, 0, 0.1)",
    },

    "&:nth-child(even)": {
      backgroundColor: "rgba(109, 0, 255, 0.1)",
    },

    "& .title": {
      flexGrow: 75,
      flexBasis: 0,

      // "& .time": {
      //   display: "flex",
      //   width: "100%",
      //   lineHeight: "22px",

      //   "& div": {
      //     flexGrow: 1,
      //   },
      // },
    },

    "& .time": {
      flexGrow: 25,
      flexBasis: 0,
    },
  },
});
const pageStyles = pageStyle.toString();

/** Month */
const Month = props => {
  const { year, month, monthKey, postEdges, openSet, registerForEvent } = props;
  return (
    <div
      style={{
        marginBottom: 12,
        position: "relative",
      }}
      key={`${month}-${monthKey}`}
    >
      <h2 className="mask-h6">{month}</h2>
      <ul className="event-list" style={{ listStyle: "none", padding: 0 }}>
        {map(postEdges, ({ node }, edgeIndex) => {
          const showThis =
            node.fields.year === year && node.fields.month === month;
          if (showThis === true) {
            return (
              <li className="item" key={edgeIndex}>
                <div className="title">
                  <div className="event-title">
                    <Link to={node.fields.route} style={{ color: "unset" }}>
                      {node.frontmatter.title}
                    </Link>
                  </div>
                  <div className="links">
                    <small>
                      <a
                        href="#"
                        title="More details"
                        onClick={e => openSet(e, edgeIndex)}
                      >
                        <Icon type="search" theme="outlined" />
                      </a>
                      &nbsp;
                      <a
                        href="#"
                        title="Register now"
                        onClick={e => registerForEvent(e, edgeIndex)}
                      >
                        <Icon type="form" theme="outlined" />
                      </a>
                    </small>
                  </div>
                </div>
                <div className="time">
                  <div style={{ textAlign: "right" }}>
                    <i>
                      <small>{node.fields.humanDate}</small>
                    </i>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <i>
                      <small>
                        {node.frontmatter.fromTime} - {node.frontmatter.toTime}
                      </small>
                    </i>
                  </div>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Events */
class Events extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      index: undefined,
      indexForForm: undefined,
      eventData: undefined,
      fetchingData: false,
    };

    this.onClose = this.onClose.bind(this);
    this.openSet = this.openSet.bind(this);
    this.registerForEvent = this.registerForEvent.bind(this);
  }

  /** componentDidUpdate */
  componentDidUpdate(prevProps, prevState) {
    const { index: oldIndex } = prevState;
    const { index: newIndex } = this.state;

    if (oldIndex !== newIndex) {
      this.setState({ fetchingData: true });
      const { data } = this.props;
      const postEdges = data.allMarkdownRemark.edges;
      const selectedEdge = postEdges[newIndex];
      const {
        node: {
          fields: { route },
        },
      } = selectedEdge;
      if (!isUndefined(window)) {
        axios
          .get(`/${route}.json`)
          .then(response => {
            // All OK
            if (response.status === 200) {
              const { data: eventData } = response;
              this.setState({ eventData });

              // Mock some delay
              setTimeout(() => {
                this.setState({ fetchingData: false });
              }, 500);
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }

  /** onClose */
  onClose() {
    this.setState({
      visible: false,
    });
  }

  /** openSet */
  openSet(e, index) {
    e.preventDefault();
    this.setState({
      visible: true,
      index,
    });
  }

  /** registerForEvent */
  registerForEvent(e, index) {
    e.preventDefault();
    this.setState({
      visible: false,
      indexForForm: index,
    });
  }

  /** standard renderer */
  render() {
    const { data } = this.props;
    const postEdges = data.allMarkdownRemark.edges;
    const { index, indexForForm, visible } = this.state;
    const today = moment();
    const thisYear = today.year().toString();
    const thisMonth = today.month();
    const years = ["2018", "2019"];
    const months = {
      0: "Jan",
      1: "Feb",
      2: "Mar",
      3: "Apr",
      4: "May",
      5: "Jun",
      6: "Jul",
      7: "Aug",
      8: "Sep",
      9: "Oct",
      10: "Nov",
      11: "Dec",
    };
    const monthsArray = values(months);
    const previousMonths = reverse(filter(months, (m, key) => key < thisMonth));
    const thisAndFutureMonths = filter(months, (m, key) => key >= thisMonth);
    const title = isUndefined(index)
      ? "Event"
      : `${postEdges[index].node.frontmatter.title}: ${
          postEdges[index].node.fields.humanDate
        }`;
    const { eventData, fetchingData } = this.state;

    return (
      <StandardPage className={pageStyles} seoData={seoData}>
        <Row gutter={{ xs: 24, sm: 36, md: 48 }}>
          <Col span={15}>
            <h1 className="mask-h3">Workshops & Events</h1>
            <Tabs type="card">
              {map(years, (year, yearKey) => {
                const key = `${year}-${yearKey}`;
                return (
                  <TabPane tab={year} key={key}>
                    <Fragment>
                      {year === thisYear && (
                        <Fragment>
                          {map(thisAndFutureMonths, (month, monthKey) => {
                            return (
                              <Month
                                year={year}
                                month={month}
                                monthKey={monthKey}
                                postEdges={postEdges}
                                openSet={this.openSet}
                                registerForEvent={this.registerForEvent}
                                key={`${month}-${monthKey}`}
                              />
                            );
                          })}
                          <hr />
                          <h4>Past Events</h4>
                          {map(previousMonths, (month, monthKey) => {
                            return (
                              <Month
                                year={year}
                                month={month}
                                monthKey={monthKey}
                                postEdges={postEdges}
                                openSet={this.openSet}
                                registerForEvent={this.registerForEvent}
                                key={`${month}-${monthKey}`}
                              />
                            );
                          })}
                        </Fragment>
                      )}
                      {year !== thisYear && (
                        <Fragment>
                          {map(monthsArray, (month, monthKey) => {
                            return (
                              <Month
                                year={year}
                                month={month}
                                monthKey={monthKey}
                                postEdges={postEdges}
                                openSet={this.openSet}
                                registerForEvent={this.registerForEvent}
                                key={`${month}-${monthKey}`}
                              />
                            );
                          })}
                        </Fragment>
                      )}
                    </Fragment>
                  </TabPane>
                );
              })}
            </Tabs>
          </Col>
          <Col span={9}>
            {isUndefined(indexForForm) ? (
              <Fragment>
                <h3>Register</h3>
                <p>
                  To register for an event please select an event from the
                  selection.
                </p>
              </Fragment>
            ) : (
              <EventRegisterationForm event={postEdges[indexForForm]} />
            )}
          </Col>
        </Row>
        <Drawer
          title={title}
          closable={false}
          onClose={this.onClose}
          visible={visible}
          width="45vw"
          placement="left"
        >
          {fetchingData === true && <p>Fetching data…</p>}
          {fetchingData === false &&
            !isUndefined(eventData) && (
              <Fragment>
                {treeParser(
                  eventData.markdownAst,
                  {
                    localLink: Link,
                    linkHeaders: false,
                    trackHeaders: false,
                    nestHeaders: false,
                  },
                  {},
                )}
              </Fragment>
            )}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              borderTop: "1px solid #e8e8e8",
              padding: "10px 16px",
              left: 0,
              background: "#f2f2f2",
              textAlign: "right",
            }}
          >
            <Button
              style={{
                marginRight: 8,
              }}
              onClick={this.onClose}
            >
              Close
            </Button>
            <Button
              type="primary"
              onClick={e => this.registerForEvent(e, index)}
            >
              Register
            </Button>
          </div>
        </Drawer>
      </StandardPage>
    );
  }
}

Events.propTypes = {
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
            cost
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
export default withSizes(mapSizesToProps)(Events);
