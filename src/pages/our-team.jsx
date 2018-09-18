// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Collapse from "antd/lib/collapse";
import "@bodhi-project/antrd/lib/restorative-auroville/3.6.5/collapse/style/css";

import Video from "../components/Video";
import Quote from "../components/Quote";
import MainBlock from "../components/MainBlock";
import StandardPage from "../components/StandardPage";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";

import helene from "../assets/helene.jpg";
import janet from "../assets/janet.jpg";
import kati from "../assets/kati.jpg";
import henrike from "../assets/henrike.jpg";
import henrikeAlt from "../assets/henrike-alt.jpg";
import laura from "../assets/laura.jpg";
import pranjal from "../assets/pranjal.jpg";
import shanti from "../assets/shanti.jpg";
import dummy from "../assets/dummy.jpg";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const Panel = Collapse.Panel;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "About Restorative Auroville",
  nakedPageSlug: "",
  pageAbstract: "Page abstract.",
};

const seoData = seoHelper(pageData);

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({
  "& .ant-collapse": {
    width: "100%",

    "& .ant-collapse-content-box, .ant-collapse-header": {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
});
const pageStyles = pageStyle.toString();

/** Person */
const Person = props => {
  const { photo, name, designation, link } = props;
  return (
    <Link style={{ flex: "1 0 30%", marginRight: 5 }} to={link}>
      <Image
        src={photo}
        style={{
          height: "auto",
          width: "100%",
          border: 0,
          background: "transparent",
        }}
        alt="Restorative Auroville"
      />
      <p
        style={{
          border: "1px solid #00006F",
          paddingRight: 6,
          paddingLeft: 6,
        }}
      >
        <strong>{name}</strong>
        <br />
        {designation}
      </p>
    </Link>
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
        <h1 className="mask-h3">About Our Team</h1>
        <h2 className="mask-p">
          Restorative Auroville is an independent project that aims to bring the
          practice of{" "}
          <Link to="www.restorativecircles.org">Restorative Circles</Link>, a
          holistic, community-based form of conflict resolution, to Auroville,
          and to explore what a consciously designed justice system could look
          like here – one that reflects our ideals, but that is also effective
          and has the power to bring about constructive change, both on the
          individual and community levels.
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Person
            name="L'aura"
            designation="Founder"
            photo={laura}
            link="/laura-joy"
          />
          <Person
            name="Janet"
            designation="Founder"
            photo={janet}
            link="/janet-fearn"
          />
          <Person
            name="Kati"
            designation="Founder"
            photo={kati}
            link="/kati-hotger"
          />
          <Person
            name="Pranjal"
            designation="Apprentice"
            photo={pranjal}
            link="/pranjal"
          />
          <Person
            name="Henrike"
            designation="Volunteer"
            photo={henrikeAlt}
            link="/henrike"
          />
          <Person
            name="Dummy"
            designation="Volunteer"
            photo={dummy}
            link="/our-team"
          />
          <h2 className="mask-h3">Past Members</h2>
          <p>
            Restorative Auroville is an independent project that aims to bring
            the practice of{" "}
            <Link to="www.restorativecircles.org">Restorative Circles</Link>, a
            holistic, community-based form of conflict resolution, to Auroville,
            and to explore what a consciously designed justice system could look
            like here – one that reflects our ideals, but that is also effective
            and has the power to bring about constructive change, both on the
            individual and community levels.
          </p>
          <Collapse bordered={false}>
            <Panel header="See past members" key="1">
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <Person
                  name="Hélène"
                  designation="Volunteer"
                  photo={dummy}
                  link="/helene"
                />
                <Person
                  name="Shanti"
                  designation="Volunteer"
                  photo={shanti}
                  link="/shanti"
                />
                <Person
                  name="Dummy"
                  designation="Volunteer"
                  photo={dummy}
                  link="/our-team"
                />
              </div>
            </Panel>
          </Collapse>
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
