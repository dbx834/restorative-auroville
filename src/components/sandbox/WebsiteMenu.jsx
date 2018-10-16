// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
import React from 'react'
// import PropTypes from "prop-types";
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from 'lodash/map'
import startsWith from 'lodash/startsWith'
import isUndefined from 'lodash/isUndefined'
import split from 'lodash/split'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Link } from 'gatsby'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'
import OutLink from '@bodhi-project/components/lib/OutLink'
import Container from '@bodhi-project/components/lib/Container'

// import Icon from 'antd/lib/icon'
// import '@bodhi-project/antrd/lib/restorative-auroville/3.6.5/icon/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import wavesTop from '../../assets/wavesTop.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// import isNull from "lodash/isNull";

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const styleObject = css({
  '& nav': {
    display: 'flex',
    position: 'relative',
    background: '#FFFFFF',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,

    '& h2': {
      transform: 'rotate(-90deg)',
      position: 'absolute',
      top: 20,
      left: -70,
      margin: '0px !important',
    },

    '& .home': {
      position: 'absolute',
      top: 0,
      left: -40,
      margin: '0px !important',
    },

    '& .mail': {
      position: 'absolute',
      top: 0,
      right: -40,
      margin: 0,
    },

    '& .index': {
      // flexGrow: 1,
      flexBasis: 'auto',
    },

    '& div.index': {
      '& > div': {
        marginLeft: 2,
        paddingLeft: 5,
        borderLeft: '1px solid #00006F',
      },
    },

    '& h3': {
      margin: '0px !important',
    },

    '& h4': {
      margin: '0px !important',
    },

    '& .mask-p': {
      fontFamily:
        '"futura-pt", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
    },
  },
})

const style = styleObject.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** WebsiteMenu */
const WebsiteMenu = props => {
  const { menu, pathname } = props

  return (
    <Container goldenMajor block noFade className={style}>
      <nav>
        {map(menu, topLevel => {
          const { title, menu: m, link } = topLevel
          let returnObj = (
            <h3 className="index mask-p">
              <Link to={link}>{title}</Link>
            </h3>
          )

          if (isUndefined(link)) {
            returnObj = (
              <div className="index">
                <h3 className="mask-p">{title}</h3>
                {map(m, subMenu => {
                  const { title: subTitle, link: thisLink } = subMenu
                  const isOutLink = startsWith(thisLink, 'http')
                  const hashLink = isUndefined(thisLink)

                  return (
                    <div>
                      {isOutLink === true && (
                        <h4 className="mask-p">
                          <OutLink to={thisLink}>{subTitle}</OutLink>
                        </h4>
                      )}
                      {isOutLink === false && (
                        <Fragment>
                          {hashLink === true ? (
                            <h4 className="mask-p">
                              <a
                                href="#"
                                className={
                                  pathname === split(thisLink, '?', 1)[0]
                                    ? 'active'
                                    : ''
                                }
                              >
                                {subTitle}
                              </a>
                            </h4>
                          ) : (
                            <h4 className="mask-p">
                              <Link
                                to={thisLink}
                                className={
                                  pathname === split(thisLink, '?', 1)[0]
                                    ? 'active'
                                    : ''
                                }
                              >
                                {subTitle}
                              </Link>
                            </h4>
                          )}
                        </Fragment>
                      )}
                    </div>
                  )
                })}
              </div>
            )
          }

          return returnObj
        })}
      </nav>
      <Image
        src={wavesTop}
        style={{
          height: 30,
          width: '100%',
          border: 0,
          background: 'transparent',
          marginBottom: 0,
        }}
        alt="Restorative Auroville"
      />
    </Container>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default WebsiteMenu
