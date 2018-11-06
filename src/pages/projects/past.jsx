// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import moment from 'moment'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import filter from 'lodash/filter'
import sortBy from 'lodash/sortBy'
import reverse from 'lodash/reverse'
import map from 'lodash/map'
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Link } from 'gatsby'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../../components/StandardPage'
import seoHelper from '../../methods/seoHelper'

import projects from '../../data/projects.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pastProjects = reverse(
  sortBy(filter(projects, ['ongoing', false]), [
    o => o.beginTimestamp,
    o => o.endTimestamp,
  ])
)

const pageData = {
  pageTitle: 'Past projects',
  nakedPageSlug: 'projects/past',
  pageAbstract: 'Page abstract.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyle = css({
  display: 'block',

  '& .ant-card': {
    boxShadow: '1px 2px 0 0 rgba(0, 0, 111, 1)',

    '&:hover': {
      boxShadow: '2px 4px 0 0 rgba(0, 0, 111, 1)',
    },
  },

  '& .project': {
    display: 'flex',
    padding: 12,
    color: 'unset',

    ':not(:last-of-type)': {
      borderBottom: '1px dotted #00006F',
    },

    '& > div:nth-child(1)': {
      flexGrow: 58,
      flexBasis: 0,
      paddingRight: 12,
    },

    '& > div:nth-child(2)': {
      flexGrow: 42,
      flexBasis: 0,
    },

    '& p.date': {
      marginBottom: 0,

      '& span': {
        fontSize: '80%',
      },
    },

    '& p.subTitle': {
      marginBottom: 0,
    },

    '&:nth-child(odd)': {
      backgroundColor: 'rgba(255, 191, 0, 0.1)',
    },

    '&:nth-child(even)': {
      backgroundColor: 'rgba(109, 0, 255, 0.1)',
    },
  },
})
const pageStyles = pageStyle.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Pastprojects */
const Pastprojects = props => {
  return (
    <StandardPage className={pageStyles} seoData={seoData}>
      <h1 className="mask-h3">Past Projects</h1>
      <div>
        {map(pastProjects, project => {
          const {
            pageTitle,
            pageAbstract,
            cover,
            beginTimestamp,
            endTimestamp,
            nakedPageSlug,
          } = project
          return (
            <Link className="project" to={`/${nakedPageSlug}`}>
              <div>
                <p className="date">
                  <span>
                    {moment.unix(beginTimestamp).format('YYYY')}
                    {!isUndefined(endTimestamp) &&
                      ` – ${moment.unix(endTimestamp).format('YYYY')}`}
                  </span>
                </p>
                <h3 className="title mask-h4">{pageTitle}</h3>
                <p className="subTitle">{pageAbstract}</p>
              </div>
              <div className="hidden-sm">
                <Image
                  src={cover}
                  rawWidth={1440}
                  rawHeight={900}
                  style={{
                    height: 'auto',
                    width: '100%',
                    border: 0,
                    background: 'transparent',
                  }}
                  alt={`${pageTitle} – ${pageAbstract}`}
                />
              </div>
            </Link>
          )
        })}
      </div>
    </StandardPage>
  )
}

Pastprojects.propTypes = {
  data: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Pastprojects
