// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";
import moment from "moment";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import trim from "lodash/trim";
import last from "lodash/last";
import split from "lodash/split";
import isNull from "lodash/isNull";
import startsWith from "lodash/startsWith";
import join from "lodash/join";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link, { withPrefix } from "gatsby-link";
import FacebookProvider, { Like as FBLike } from "react-facebook";
import { Article, Header, Footer } from "@bodhi-project/semantic-webflow";
import { Elements } from "@bodhi-project/typography";
import treeParser from "@bodhi-project/markdown-to-react/lib/treeParser";
import { EventSchema } from "@bodhi-project/seo";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import withUrl from "../helpers/withUrl";
import seoHelper from "../helpers/seoHelper";
import packageJson from "../../package.json";
import markdownStylesClass from "../styles/markdownStyles";

import lauraPhoto from "../assets/rx/laura-joy-nvc-trainer-india.jpeg";

import StandardPage from "../components/StandardPage";
import MainBlock from "../components/MainBlock";
import Video from "../components/Video";
import Quote from "../components/Quote";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;
const { data } = packageJson;
const { H1, Paragraph } = Elements;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyle = css({});
const pageStyles = pageStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** BlogPostTemplate */
class BlogPostTemplate extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
  }

  /** standard renderer */
  render() {
    // Abstract stuff
    const { pathContext } = this.props;
    const { frontmatter } = pathContext;
    // const { toc } = pathContext;
    const { markdownAst, next, prev } = pathContext;
    const { route, humanDate, elapsed } = pathContext;
    const checkedRoute = startsWith(route, "/") ? route : `/${route}`;
    const nakedRoute = checkedRoute.substr(1);
    const { tags, date, startDate, finishDate, cover } = frontmatter;

    // Date stuff
    const begins = moment(!isNull(startDate) ? startDate : date);
    const ends = moment(
      !isNull(finishDate) ? finishDate : begins.clone().add(23, "hours"),
    );

    const { orgLocation } = data;

    // Date stuff
    const mDate = moment(frontmatter.date);
    const isoDate = mDate.format();

    const dateStr = moment(mDate).format("ddd, MMMM D, YYYY");
    const when = moment(mDate).fromNow();

    let catString = trim(last(split(frontmatter.category, ".")));
    switch (catString) {
      case "NVC":
        catString = "Nonviolent Communication";
        break;
      case "RC":
        catString = "Restorative Circles";
        break;
    }

    // -------------------------------------------------------------------- SEO
    let eventBanner = null;
    if (cover === "fallback") {
      const coverHint = join(tags, "-");
      eventBanner = withPrefix(
        `/content-assets/event-fallbacks/${coverHint}.jpg`,
      );
    } else {
      eventBanner = withPrefix(cover);
    }
    const pageData = {
      pageTitle: frontmatter.title,
      nakedPageSlug: nakedRoute,
      pageAbstract: `${frontmatter.abstract} On ${humanDate}.`,
      pageBanner: eventBanner,
    };
    const seoData = seoHelper(pageData);
    const eventSchemaData = {
      name: frontmatter.title,
      url: `${data.websiteUrl}${route}`,
      description: `${frontmatter.abstract} On ${humanDate}.`,
      startDate: begins,
      endDate: ends,
      locationName: orgLocation.locationName,
      locationUrl: orgLocation.locationUrl,
      streetAddress: orgLocation.streetAddress,
      addressLocality: orgLocation.addressLocality,
      addressRegion: orgLocation.addressRegion,
      postalCode: orgLocation.postalCode,
      addressCountry: orgLocation.addressCountry,
      image: `${data.websiteUrl}${eventBanner}`,
      performer: {
        name: data.org.founders[0],
        image: lauraPhoto,
        sameAs: data.orgSocialMediaProfiles,
      },
      offers: {
        price: frontmatter.cost,
        priceCurrency: "INR",
        url: `${data.websiteUrl}${route}`,
      },
    };

    // const randomBlock = Math.floor(Math.random() * 7) + 1;

    return (
      <StandardPage className={pageStyles} seoData={seoData}>
        <EventSchema data={eventSchemaData} />
        <MainBlock>
          <div>
            <Article className={markdownStylesClass}>
              <Header>
                <h1 className="mask-h4">{frontmatter.title}</h1>
                <p>
                  {catString}&nbsp;&nbsp;○&nbsp;&nbsp;{dateStr}&nbsp;({when})
                </p>
                <p>
                  <i>{frontmatter.abstract}</i>
                </p>
                <div style={{ position: "relative" }} className="mask-p">
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 99,
                      backgroundColor: "#ffffff",
                      zIndex: 10,
                      height: 20,
                      width: "calc(100% - 96px)",
                    }}
                  />
                  <div style={{ maxWidth: 96 }} id="fb">
                    <FacebookProvider appId="218604115574634">
                      <FBLike
                        href={withUrl(route, data)}
                        colorScheme="dark"
                        showFaces
                        share
                      />
                    </FacebookProvider>
                  </div>
                </div>
                <Image
                  src={frontmatter.cover}
                  rawWidth={1440}
                  rawHeight={900}
                  style={{ border: 0, height: "auto !important" }}
                  className="mask-p"
                />
              </Header>

              {treeParser(
                markdownAst,
                {
                  localLink: Link,
                  linkHeaders: false,
                  trackHeaders: false,
                  nestHeaders: false,
                },
                {},
              )}

              <Footer>
                <H1 mask="h4">More events</H1>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 0,
                  }}
                  className="mask-p"
                >
                  <div>
                    {!isNull(prev) && (
                      <Link to={`/${prev.fields.route}`}>⇜ Previous</Link>
                    )}
                  </div>
                  <div>
                    {!isNull(next) && (
                      <Link to={`/${next.fields.route}`}>Next ⇝</Link>
                    )}
                  </div>
                </div>
                <Paragraph className="stash">
                  {data.copyright}
                  <br />
                  <br />
                  Published on {humanDate} ({elapsed}).
                </Paragraph>
              </Footer>
            </Article>
          </div>
          <div>
            <Video />
            <Quote />
          </div>
        </MainBlock>
      </StandardPage>
    );
  }
}

BlogPostTemplate.propTypes = {
  pathContext: PropTypes.object,
};

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default BlogPostTemplate;
