// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Images from "@bodhi-project/components/lib/Images";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
// import Tabs from "antd/lib/tabs";
// import "antd/lib/tabs/style/css";

import Video from "../components/Video";
import Quote from "../components/Quote";
import MainBlock from "../components/MainBlock";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";
import StandardPage from "../components/StandardPage";

import laura1 from "../assets/laura3.jpeg";
import laura2 from "../assets/laura2.jpeg";
import laura3 from "../assets/laura4.jpeg";

const lauraPhotos = [
  { src: laura1, width: 900, height: 600 },
  { src: laura2, width: 900, height: 600 },
  { src: laura3, width: 900, height: 600 },
  { src: laura1, width: 900, height: 600 },
];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Team",
  nakedPageSlug: "team",
  pageAbstract: "Page abstract.",
};

const seoData = seoHelper(pageData);

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

  /** standard constructor */
  componentDidMount() {
    console.log("hit");
  }

  /** standard renderer */
  render() {
    return (
      <StandardPage className={pageStyles} seoData={seoData}>
        <MainBlock>
          <div>
            <h1>Our Team</h1>
            <p>
              We envision a world where everyone’s needs matter, where we live
              in a consciousness of trust and abundance, knowing that each one
              of us inherently belongs, and that together we are more powerful
              than apart.
            </p>
            <p>
              Our mission is to live and share the principles of Nonviolence,
              not only in terms of an individual practice and way of life, but
              also in its application to social structures, such as in our
              families, schools, and organizations.
            </p>
            <p>
              Our mission is to live and share the principles of Nonviolence,
              not only in terms of an individual practice and way of life, but
              also in its application to social structures, such as in our
              families, schools, and organizations.
            </p>
            <p>
              Our mission is to live and share the principles of Nonviolence,
              not only in terms of an individual practice and way of life, but
              also in its application to social structures, such as in our
              families, schools, and organizations.
            </p>
            <h2>L'aura Joy</h2>
            <p>
              L’aura Joy is a Certified Trainer in Nonviolent Communication
              (CNVC, USA), and since 2007 she has been working in the fields of
              communication, conflict resolution, peace and justice, healing,
              and decision-making and leadership.
            </p>
            <p>
              Having grown up in Auroville, an international intentional
              community in Tamil Nadu, India, L'aura is passionate about
              exploring how we can live our lives in empowered and co-creative
              ways. Nonviolent Communication (NVC) offers such a clear, yet
              deeply powerful and transformative framework within which to
              explore both our inner realities as well as outer relationships.
              In addition to NVC, L'aura is also trained in Restorative Circles
              and Sociocracy, and she applies these approaches to her work with
              justice and governance in Auroville.
            </p>
            <p>
              L’aura has travelled and shared in different countries and
              contexts, ranging from the corporate sector, to schools, to NGOs
              working with women and street children, exploring NVC as a means
              to transformation and sustainable change. Most of her work has
              been in India, although she has also worked in Sri Lanka, Nepal,
              Canada, USA, UK and Switzerland.
            </p>
            <div className="mask-p">
              <Images photos={lauraPhotos} loader="gradient" columns={2} />
            </div>
            <p>
              L'aura has been a pioneer in bringing NVC to India and has
              supported an ever-growing community to emerge. She has hosted and
              organized several large-scale international events here, and has
              published NVC books and teaching material.
            </p>
            <p>
              At the beginning of her career, L'aura was a high-school teacher,
              and she taught in both Canada and Auroville. Her main subjects
              were English and French as second languages, plus introductory
              courses to Sociology, Anthropology and Psychology. She specialized
              in the International Baccalaureate (IB) Program (an
              internationally accredited program) and taught senior IB students.
              She organized several extra-curricular programs for the students,
              including international travel programs, cultural outings, camping
              and trekking trips, and cross-country running.
            </p>
            <p>
              L'aura's personal interests lie in making deep connections with
              people, living a meaningful and sustainable life, contributing to
              community, and practicing yoga and being physically active.
            </p>
            <h2>Janet</h2>
            <p>
              L’aura Joy is a Certified Trainer in Nonviolent Communication
              (CNVC, USA), and since 2007 she has been working in the fields of
              communication, conflict resolution, peace and justice, healing,
              and decision-making and leadership.
            </p>
            <h2>Pranjal</h2>
            <p>
              L’aura Joy is a Certified Trainer in Nonviolent Communication
              (CNVC, USA), and since 2007 she has been working in the fields of
              communication, conflict resolution, peace and justice, healing,
              and decision-making and leadership.
            </p>
            <h2>Henrike</h2>
            <p>
              L’aura Joy is a Certified Trainer in Nonviolent Communication
              (CNVC, USA), and since 2007 she has been working in the fields of
              communication, conflict resolution, peace and justice, healing,
              and decision-making and leadership.
            </p>
            <h2>Shanti</h2>
            <p>
              L’aura Joy is a Certified Trainer in Nonviolent Communication
              (CNVC, USA), and since 2007 she has been working in the fields of
              communication, conflict resolution, peace and justice, healing,
              and decision-making and leadership.
            </p>
          </div>
          <div>
            <h3>Etc...</h3>
            <Video />
            <Quote />
            <h3>Volunteer With Us</h3>
            <p>
              Our mission is to live and share the principles of Nonviolence,
              not only in terms of an individual practice and way of life, but
              also in its application to social structures, such as in our
              families, schools, and organizations.
            </p>
          </div>
        </MainBlock>
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
