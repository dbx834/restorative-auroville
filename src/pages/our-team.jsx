// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import sample from "lodash/sample";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

import StandardPage from "../components/StandardPage";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";
import ProjectWorkingTeam from "../components/our-team-blocks/ProjectWorkingTeam";
import FacilitatorsTeam from "../components/our-team-blocks/FacilitatorsTeam";
import Apprentices from "../components/our-team-blocks/Apprentices";
import PastMembers from "../components/our-team-blocks/PastMembers";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Our Team",
  nakedPageSlug: "our-team",
  pageAbstract: "Page abstract.",
};

const seoData = seoHelper(pageData);

/** toDegrees */
const toDegrees = angle => angle * (Math.PI / 180);

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({});
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
        <ProjectWorkingTeam />
        <FacilitatorsTeam />
        <Apprentices />
        <PastMembers />
      </StandardPage>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object,
};

/** 
<div>
  <h1 className="mask-h3">L'aura Joy</h1>
  <p>
    I was born and raised in Auroville, and life has lead me to work
    with nonviolence, peace and justice. I went to university to
    become a high school teacher and proceeded to teach for 6 years (3
    in Canada, 3 in Auroville). But I somehow didn’t find this work as
    fulfilling as I had expected, so I quit, not knowing what was
    coming next. In 2007, I serendipitously ended up in a Nonviolent
    Communication workshop, and this was the beginning of a new
    passion and career.
  </p>
  <p>
    A little while later, a friend told me about Dominic Barter’s work
    (hyperlink: www.restorativecircles.org) and that “he was bringing
    Nonviolent Communication to prisons.” Although I had no formal
    connection to the world of crime and justice, I was immediately
    inspired and decided to attend a Restorative Circles training with
    Dominic in Atlanta, USA in October 2010. What I discovered was a
    whole new paradigm, and an absolutely transformative perspective
    into conflict and community.
  </p>
  <p>
    Given my NVC background and having grown up and lived most of my
    life in community, engaging with Restorative Circles felt like a
    natural next step – immersing myself and applying these principles
    into a dynamic, living system. I couldn’t have found a more
    meaningful way to give back to Auroville.
  </p>
</div>

<br />
<br />
<br />
<br />
<br />
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
*/

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default IndexPage;
