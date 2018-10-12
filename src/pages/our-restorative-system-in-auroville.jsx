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
import StandardPage from "../components/StandardPage";
import BookReader from "../components/BookReader";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";

import galaxy from "../assets/galaxy.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Our Restorative System in Auroville",
  nakedPageSlug: "our-restorative-system-in-auroville",
  pageAbstract: "Page abstract.",
};

const seoData = seoHelper(pageData);

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({
  position: "relative",
});
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

  /** standard constructor */
  componentDidMount() {
    console.log("hit");
  }

  /** standard renderer */
  render() {
    return (
      <StandardPage className={pageStyles} seoData={seoData}>
        <div style={{ position: "relative" }}>
          <h1 className="mask-h3">Our Restorative System in Auroville</h1>
          <h2 className="mask-p">
            Conflict is a natural, inevitable part of living together, and
            Auroville is no exception. Koodam (hyperlink:...), Auroville’s
            conflict resolution platform, has already done so much to bring
            about a shift in conflict resolution, and yet we believe we still a
            long way to go before we are really able, as a community, to deal
            with our conflicts in ways that are healthy, effective, sustainable
            and life-serving.
          </h2>
          <p>
            For RC to be fully effective on a community-level, we need to
            explore it in more depth and to understand our resistance (both as
            human beings in general, but also as Aurovilians aspiring to build a
            city of human unity) to using processes such as these.
          </p>
          <p>
            We need to start questioning our very system and re-evaluate how we
            want to respond to justice as a larger community. The next step
            needed is to take a deeper and wider look at our present situation
            in Auroville, which is complex and doesn’t always allow for an easy
            resolution to our challenges. Restorative Circles, in its design and
            nature, is a process that works on several levels, and it aims at
            bringing about a shift on a systemic level. It invites us to
            re-evaluate how we think about conflict, how we can invite people to
            take responsibility for their actions, and how we can support
            healing and rebuilding trust in our communities. It’s a process that
            includes all layers of the community, and it invites us to co-create
            a justice system that works for us. On a practical level,
            Restorative Circles also offer large-scale training, additional
            skills for conflict transformation, a large pool of available
            Facilitators, willingness amongst community members to participate
            in Circles if called upon, and increased awareness about the
            importance of consciously choosing a justice system for the growth
            and development of a community.
          </p>
          <div
            style={{ position: "absolute", top: 0, left: 0, height: "100%" }}
          >
            <Image
              src={galaxy}
              style={{
                background: "transparent",
                border: "unset",
                height: "100%",
                width: "100%",
              }}
              loader="gradient"
              rawWidth={1600}
              rawHeight={900}
            />
          </div>
        </div>
        <BookReader title="RC in Auroville" url="/av-rc-system2.epub" />
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
