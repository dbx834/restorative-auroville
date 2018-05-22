// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import startsWith from "lodash/startsWith";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import {
  Page,
  // Section,
  Article,
  Header,
  Footer,
} from "@bodhi-project/semantic-webflow";
import { Elements } from "@bodhi-project/typography";
import { tocParser, treeCodeParser } from "@bodhi-project/markdown-to-react";
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";
import packageJson from "../../package.json";
import markdownStylesClass from "../styles/markdownStyles";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { data } = packageJson;
const { H1, Paragraph } = Elements;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyle = css({
  position: "relative",
});
const pageStyleClass = pageStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** PageTemplate */
const PageTemplate = props => {
  // Abstract stuff
  const { pathContext } = props;
  const {
    frontmatter,
    markdownAst,
    toc,
    route,
    humanDate,
    elapsed,
    headings,
  } = pathContext;
  const checkedRoute = startsWith(route, "/") ? route : `/${route}`;
  const nakedRoute = checkedRoute.substr(1);

  // ------------------------------------------------ SEO
  const pageData = {
    pageTitle: frontmatter.title,
    nakedPageSlug: nakedRoute,
    pageAbstract: frontmatter.abstract,
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
      <Page className={`${markdownStylesClass} ${pageStyleClass}`}>
        <Header>
          <H1>{frontmatter.title}</H1>
          <Paragraph>{humanDate}</Paragraph>
          <Paragraph className="stash">{frontmatter.abstract}</Paragraph>
        </Header>
        <Article>
          {treeCodeParser(
            markdownAst,
            {
              localLink: Link,
              linkHeaders: true,
              trackHeaders: true,
              nestHeaders: true,
            },
            {},
          )}
          {tocParser(
            toc,
            props.location.pathname,
            { localLink: Link },
            {},
            { where: frontmatter.title, what: headings },
          )}
        </Article>
        <Footer className="stash">
          <Paragraph>
            Copyright&nbsp;{data.websiteCreator}&nbsp;2018.
            <br />
            <br />
            Published on {humanDate} ({elapsed}).
          </Paragraph>
        </Footer>
      </Page>
    </Fragment>
  );
};

PageTemplate.propTypes = {
  pathContext: PropTypes.object,
};

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default PageTemplate;
