// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";
import moment from "moment";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import { Type } from "@bodhi-project/typography";
import {
  InitializeMeta,
  UpdateTitle,
  WebsiteSchema,
  OrganisationSchema,
} from "@bodhi-project/seo";
import { StickyContainer, Sticky } from "react-sticky";
import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import ResponsiveToggle from "@bodhi-project/components/lib/ResponsiveToggle";
import Container from "@bodhi-project/components/lib/Container";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import "../styles/index.less";
import indexImage from "../assets/launch.jpg";
import packageJson from "../../package.json";
import logo from "../assets/logoColor.png";

import Footer from "../components/layout/Footer";
import DesktopNav from "../components/layout/DesktopNav";
import MobileNav from "../components/layout/MobileNav";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { data } = packageJson;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------- Global SEO
// ----------------------------------------------------------------------------
const websiteSchemaData = {
  url: data.websiteUrl,
  name: data.websiteName,
  description: data.websiteDescription,
  author: data.org.name,
  publisher: data.org.name,
  image: indexImage,
};

const organisationSchemaData = {
  name: data.org.name,
  legalName: data.org.legalName,
  url: data.org.url,
  logo: `${data.org.url}${data.org.logo}`,
  foundingDate: moment(data.org.foundingDate).format(),
  founders: data.org.founders,
  streetAddress: data.orgLocation.streetAddress,
  addressLocality: data.orgLocation.addressLocality,
  addressRegion: data.orgLocation.addressRegion,
  postalCode: data.orgLocation.postalCode,
  addressCountry: data.orgLocation.addressCountry,
  telephone: data.orgContact.telephone,
  email: data.orgContact.email,
  sameAs: data.orgSocialMediaProfiles,
  image: indexImage,
};

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
const menu = [
  { title: "Home", link: "/" },
  {
    title: "Explore +",
    menu: [
      { title: "Our Project", link: "/about-restorative-auroville" },
      { title: "Restorative Circles", link: "/restorative-circles" },
      {
        title: "Our Restorative System",
        link: "/our-restorative-system-in-auroville",
      },
    ],
  },
  {
    title: "Learn +",
    menu: [
      { title: "Calendar of events", link: "/calendar" },
      { title: "Educational Tools", link: "/educational-tools" },
    ],
  },
  {
    title: "Our Initiatives +",
    menu: [
      { title: "Ongoing Initiatives", link: "/initiatives/ongoing" },
      { title: "Past Initiatives", link: "/initiatives/past" },
    ],
  },
  {
    title: "Support Us +",
    menu: [
      {
        title: "Donate",
        link: "/donate",
      },
      {
        title: "Volunteer",
        link: "/volunteer",
      },
    ],
  },
  { title: "Our Team", link: "/our-team" },
  {
    title: "More +",
    menu: [
      { title: "Articles", link: "/writings" },
      { title: "Archives", link: "/archives" },
      { title: "Gallery", link: "/gallery" },
    ],
  },
  { title: "Contact Us", link: "/contact-us" },
];

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({
  // background: "#0053a5",
  padding: 0,

  "& #appWrapper": {
    // background: "#f2f2f2",
  },

  "& #contentWrapper": {
    paddingTop: "24px",

    "& #content": {
      // paddingBottom: "4em",
      // minHeight: "100vh",
    },
  },

  "& #menuWrapper": {
    zIndex: 1000,
  },
});
const pageStyles = pageStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Indexpage */
class TemplateWrapper extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
  }

  /** after mount */
  componentDidMount() {
    if (!isUndefined(document)) {
      const htmlElement = document.documentElement;
      if (htmlElement.classList.contains("lk-loading")) {
        htmlElement.classList.toggle("lk-loading");
      }
      if (!htmlElement.classList.contains("lk-active")) {
        htmlElement.classList.toggle("lk-active");
      }
    }
  }

  /** on mount */
  componentDidUpdate() {
    if (!isUndefined(window)) {
      const element = document.getElementById("contentWrapper");
      element.scrollTop = 0;
    }
  }

  /** standard renderer */
  render() {
    return (
      <Type kit="dkc2ilk" style={{ minHeight: "100vh" }} className={pageStyles}>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <InitializeMeta
          data={{ titleTemplate: "%s | Restorative Auroville" }}
        />
        <UpdateTitle title="Loading..." />
        <WebsiteSchema data={websiteSchemaData} />
        <OrganisationSchema data={organisationSchemaData} />
        <ResponsiveToggle id="appWrapper">
          {/* Mobile view */}
          <div id="mobile-app">
            <MobileNav />
            <div id="contentWrapper">
              <Container noFade bleed block id="content">
                {this.props.children()}
              </Container>
            </div>
          </div>

          {/* Desktop view */}
          <div id="desktop-app">
            <StickyContainer>
              <Container goldenMajor block noFade>
                <Link
                  to="/"
                  style={{ display: "block", border: "unset", height: 100 }}
                >
                  <Image
                    src={logo}
                    rawWidth={2042}
                    rawHeight={582}
                    style={{
                      display: "block",
                      height: 60,
                      width: "auto",
                      border: 0,
                      background: "transparent",
                      marginBottom: 10,
                      marginTop: 30,
                      float: "left",
                    }}
                    loader="gradient"
                    alt="NVC India"
                  />
                </Link>
              </Container>
              <Sticky topOffset={100}>
                {({ style, isSticky }) => (
                  <div id="menuWrapper" style={style}>
                    <DesktopNav
                      menu={menu}
                      {...this.props}
                      isSticky={isSticky}
                    />
                  </div>
                )}
              </Sticky>
              <div id="contentWrapper">
                <Container noFade goldenMajor block id="content">
                  {this.props.children()}
                  <Footer />
                </Container>
              </div>
            </StickyContainer>
          </div>
        </ResponsiveToggle>
      </Type>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

// ----------------------------------------------------------------------- Export
export default TemplateWrapper;
