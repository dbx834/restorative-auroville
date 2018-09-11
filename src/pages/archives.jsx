// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import isUndefined from "lodash/isUndefined";
import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// import Link from "gatsby-link";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import OutLink from "@bodhi-project/components/lib/OutLink";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
// import Tabs from "antd/lib/tabs";
// import "antd/lib/tabs/style/css";

import StandardPage from "../components/StandardPage";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Volunteer",
  nakedPageSlug: "volunteer",
  pageAbstract: "Page abstract.",
};

const seoData = seoHelper(pageData);

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({});
const pageStyles = pageStyle.toString();

/** Theme */
const Theme = props => {
  const { border, title, files } = props;
  return (
    <div style={{ paddingLeft: 12, borderLeft: `8px solid ${border}` }}>
      <h2 className="mask-h4">{title}</h2>
      <p>
        We want to explore and understand this question: Are we divided in
        Auroville, as local Tamil Aurovilians and non-local Aurovilians? The
        aquarium, which has 250 species, took more than a year to set up and was
        funded by a group of investors.
      </p>
      {!isUndefined(files) && (
        <Fragment>
          {map(files, file => {
            return (
              <p>
                <OutLink to={file.link}>{file.title}</OutLink>
              </p>
            );
          })}
        </Fragment>
      )}
    </div>
  );
};

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
      <StandardPage className={pageStyles} seoData={seoData}>
        <h1 className="mask-h3">Archives</h1>
        <p>
          We want to explore and understand this question: Are we divided in
          Auroville, as local Tamil Aurovilians and non-local Aurovilians?
        </p>
        <Theme
          border="#0101AF"
          title="Restorative Auroville Research Project (2015)"
          files={[
            {
              title: "View project proposal",
              link: "/applied-research-restorative-circles-in-auroville.pdf",
            },
            {
              title: "View 6-month report",
              link: "/restorative-auroville-6-month-report.pdf",
            },
            {
              title: "View 1-year report",
              link: "/restorative-auroville-year-end-report.pdf",
            },
          ]}
        />
        <Theme
          border="#FA8F00"
          title="Restorative Dialogue across Cultures (2017)"
          files={[
            {
              title: "View project proposal",
              link: "/cross-cultural-restorative-dialogue-project-proposal.pdf",
            },
            {
              title: "View report",
              link: "/cross-cultural-dialogue-report.pdf",
            },
            {
              title: "View report annexe",
              link: "/cross-cultural-dialogue-report-annexe.pdf",
            },
          ]}
        />
        <Theme
          border="#FAE300"
          title="Film Fest - Restoring Connection (2017)"
          files={[
            {
              title: "View project proposal",
              link: "/restoring-connection-film-fest-project-proposal.pdf",
            },
            {
              title: "View report",
              link: "/filmfest-report.pdf",
            },
          ]}
        />
        <Theme
          border="#4A01AA"
          title="Justice Questionnaire (2017)"
          files={[
            {
              title: "Justice in Auroville - What's Your Opinion?",
              link: "/justice-in-auroville-what-is-your-opinion.pdf",
            },
            {
              title: "View results",
              link: "/justice-questionnaire-result.pdf",
            },
          ]}
        />
        <Theme
          border="#FABB00"
          title="Walk of Hope in Auroville and the Bioregion (2018)"
          files={[
            {
              title: "View project proposal",
              link: "/walk-of-hope-project-proposal.pdf",
            },
          ]}
        />
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
