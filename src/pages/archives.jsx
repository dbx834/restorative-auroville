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
import Icon from "antd/lib/icon";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/icon/style/css";

import Tag from "antd/lib/tag";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/tag/style/css";

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
  pageTitle: "Archives",
  nakedPageSlug: "archives",
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
  const { border, title, files, tag } = props;
  return (
    <div style={{ paddingLeft: 12, borderLeft: `8px solid ${border}` }}>
      <h2 className="mask-h4">
        {title} <Tag color="geekblue">{tag}</Tag>
      </h2>
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
                <Icon
                  type={isUndefined(file.icon) ? "file-pdf" : file.icon}
                  theme="outlined"
                />&nbsp;
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
          border="#FABB00"
          title="Walk of Hope in Auroville and the Bioregion (2018)"
          tag="Projects & Reports"
          files={[
            {
              title: "Project Proposal",
              link: "/walk-of-hope-project-proposal.pdf",
            },
          ]}
        />
        <Theme
          border="#FABB00"
          title="Public Presentation (2017)"
          tag="Public Presentations"
          files={[
            {
              title: "At Unity Pavilion, Auroville (Part 1)",
              icon: "youtube",
              link:
                "https://www.youtube.com/watch?v=n1Uf1IYQ2_Y&t=10s&index=9&list=PLQbEiEQu-L1YAIZY5pLrNA5Z41yJ1L8pF",
            },
            {
              title: "At Unity Pavilion, Auroville (Part 2)",
              icon: "youtube",
              link:
                "https://www.youtube.com/watch?v=ngOhj-NhKJo&t=0s&index=8&list=PLQbEiEQu-L1YAIZY5pLrNA5Z41yJ1L8pF",
            },
          ]}
        />
        <Theme
          border="#4A01AA"
          title="Justice Questionnaire (2017)"
          tag="Projects & Reports"
          files={[
            {
              title: "Justice in Auroville - What's Your Opinion?",
              link: "/justice-in-auroville-what-is-your-opinion.pdf",
            },
            {
              title: "Results",
              link: "/justice-questionnaire-result.pdf",
            },
          ]}
        />
        <Theme
          border="#FAE300"
          title="Film Fest - Restoring Connection (2016)"
          tag="Projects & Reports"
          files={[
            {
              title: "Project Proposal",
              link: "/restoring-connection-film-fest-project-proposal.pdf",
            },
            {
              title: "Report",
              link: "/filmfest-report.pdf",
            },
          ]}
        />
        <Theme
          border="#FA8F00"
          title="Restorative Dialogue across Cultures (2016)"
          tag="Projects & Reports"
          files={[
            {
              title: "Project Proposal",
              link: "/cross-cultural-restorative-dialogue-project-proposal.pdf",
            },
            {
              title: "Report",
              link: "/cross-cultural-dialogue-report.pdf",
            },
            {
              title: "Report Annexe",
              link: "/cross-cultural-dialogue-report-annexe.pdf",
            },
          ]}
        />
        <Theme
          border="#0101AF"
          title="Restorative Auroville Research Project (2015)"
          tag="Projects & Reports"
          files={[
            {
              title: "Project Proposal",
              link: "/applied-research-restorative-circles-in-auroville.pdf",
            },
            {
              title: "6-month Report",
              link: "/restorative-auroville-6-month-report.pdf",
            },
            {
              title: "1-year Report",
              link: "/restorative-auroville-year-end-report.pdf",
            },
          ]}
        />
        <Theme
          border="#FABB00"
          title="Public Presentation (2014)"
          tag="Public Presentations"
          files={[
            {
              title: "At Unity Pavilion, Auroville",
              icon: "youtube",
              link: "https://www.youtube.com/watch?v=34yV9adMWNY",
            },
            {
              title: "Full Audio Clip",
              icon: "sound",
              link: "https://www.aurovilleradio.org/restorative-circles/",
            },
          ]}
        />
        <Theme
          border="#FABB00"
          title="Public Presentation (2011)"
          tag="Public Presentations"
          files={[
            {
              title: "At Town Hall, Auroville",
              icon: "youtube",
              link:
                "https://www.youtube.com/watch?v=YIUFjSzXn1Y&t=0s&index=7&list=PLQbEiEQu-L1YAIZY5pLrNA5Z41yJ1L8pF",
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