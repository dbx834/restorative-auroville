// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import ReactPlayer from "react-player";
import ContainerDimensions from "react-container-dimensions";

// import Link from "gatsby-link";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const blockStyles = css({
  display: "block",
});
const blockStyle = blockStyles.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Functions
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** MainBlock */
const MainBlock = props => {
  const { url, poster } = props;
  return (
    <div className={`${blockStyle} mask-p`}>
      <ContainerDimensions>
        {({ width }) => {
          const playerWidth = width;
          const playerHeight = width * 0.62;
          return (
            <div
              style={{
                width: playerWidth,
                height: playerHeight,
              }}
            >
              <ReactPlayer
                url={url}
                width="inherit"
                height="inherit"
                config={{
                  file: {
                    attributes: {
                      poster,
                    },
                  },
                }}
              />
            </div>
          );
        }}
      </ContainerDimensions>
    </div>
  );
};

MainBlock.propTypes = {};

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default MainBlock;
