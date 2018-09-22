// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from "../../components/StandardPage";
import seoHelper from "../../helpers/seoHelper";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
const pastProjects = [
  {
    route: "walk-of-hope-in-auroville-and-the-bioregion",
    title: "Walk of Hope in Auroville and the Bioregion",
    subTitle:
      "The aquarium, which has 250 species, took more than a year to set up and was funded by a group of investors.",
    image:
      "https://www.aljazeera.com/mritems/imagecache/mbdresplarge/mritems/Images/2018/7/30/b42634d5f9484791893dfb7c21a8c3b0_18.jpg",
    date: "2018",
  },
  {
    route: "exploring-justice-and-rc-with-the-auroville-council",
    title: "Exploring Justice and RC with the Auroville Council",
    subTitle:
      "The aquarium, which has 250 species, took more than a year to set up and was funded by a group of investors.",
    image:
      "https://www.aljazeera.com/mritems/imagecache/mbdresplarge/mritems/Images/2018/7/30/b42634d5f9484791893dfb7c21a8c3b0_18.jpg",
    date: "2018",
  },
  {
    route: "restorative-dialogue-across-cultures",
    title: "Restorative Dialogue across Cultures",
    subTitle:
      "The aquarium, which has 250 species, took more than a year to set up and was funded by a group of investors.",
    image:
      "https://www.aljazeera.com/mritems/imagecache/mbdresplarge/mritems/Images/2018/7/30/b42634d5f9484791893dfb7c21a8c3b0_18.jpg",
    date: "2016",
  },
  {
    route: "filmfest-restoring-connection",
    title: "FilmFest: Restoring Connection",
    subTitle:
      "The aquarium, which has 250 species, took more than a year to set up and was funded by a group of investors.",
    image:
      "https://www.aljazeera.com/mritems/imagecache/mbdresplarge/mritems/Images/2018/7/30/b42634d5f9484791893dfb7c21a8c3b0_18.jpg",
    date: "2016",
  },
  {
    route: "restorative-circles-in-the-learning-community-school",
    title: "Restorative Circles in The Learning Community School",
    subTitle:
      "The aquarium, which has 250 species, took more than a year to set up and was funded by a group of investors.",
    image:
      "https://www.aljazeera.com/mritems/imagecache/mbdresplarge/mritems/Images/2018/7/30/b42634d5f9484791893dfb7c21a8c3b0_18.jpg",
    date: "2015",
  },
];

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Past Initiatives",
  nakedPageSlug: "past",
  pageAbstract: "Page abstract.",
};

const seoData = seoHelper(pageData);

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({
  display: "block",

  "& .ant-card": {
    boxShadow: "1px 2px 0 0 rgba(0, 0, 111, 1)",

    "&:hover": {
      boxShadow: "2px 4px 0 0 rgba(0, 0, 111, 1)",
    },
  },

  "& .project": {
    display: "flex",
    padding: 12,
    color: "unset",

    ":not(:last-of-type)": {
      borderBottom: "1px dotted #00006F",
    },

    "& > div:nth-child(1)": {
      flexGrow: 58,
      flexBasis: 0,
      paddingRight: 12,
    },

    "& > div:nth-child(2)": {
      flexGrow: 42,
      flexBasis: 0,
    },

    "& p.date": {
      marginBottom: 0,

      "& span": {
        fontSize: "80%",
      },
    },

    "& p.subTitle": {
      marginBottom: 0,
    },

    "&:nth-child(odd)": {
      backgroundColor: "rgba(255, 191, 0, 0.1)",
    },

    "&:nth-child(even)": {
      backgroundColor: "rgba(109, 0, 255, 0.1)",
    },
  },
});
const pageStyles = pageStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** PastInitiatives */
const PastInitiatives = props => {
  return (
    <StandardPage className={pageStyles} seoData={seoData}>
      <h1 className="mask-h3">Past Initiatives</h1>
      <div>
        {map(pastProjects, project => {
          const { title, subTitle, image, date, route } = project;
          return (
            <Link className="project" to={route}>
              <div>
                <p className="date">
                  <span>{date}</span>
                </p>
                <h3 className="title mask-h4">{title}</h3>
                <p className="subTitle">{subTitle}</p>
              </div>
              <div>
                <Image
                  src={image}
                  style={{
                    height: "auto",
                    width: "100%",
                    border: 0,
                    background: "transparent",
                  }}
                  alt={`${title} – ${subTitle}`}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </StandardPage>
  );
};

PastInitiatives.propTypes = {
  data: PropTypes.object,
};

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default PastInitiatives;
