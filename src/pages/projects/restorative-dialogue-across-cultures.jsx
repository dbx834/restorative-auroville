// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import isUndefined from 'lodash/isUndefined'
import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import OutLink from '@bodhi-project/components/lib/OutLink'
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/icon/style/css'

import Tag from 'antd/lib/tag'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/tag/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../../components/StandardPage'
import DisqusComments from '../../components/DisqusComments'

import Video from '../../components/Video'
import GoldenMajorHalves from '../../components/GoldenMajorHalves'

import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

const pageData = {
  pageTitle: 'Restorative Dialogue across Cultures',
  nakedPageSlug: 'projects/restorative-dialogue-across-cultures',
  pageAbstract: 'Page abstract.',
}

const seoData = seoHelper(pageData)

const { Item: BItem } = Breadcrumb

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Theme */
const Theme = props => {
  const { border, title, files, tag, text } = props
  return (
    <div
      style={{
        paddingLeft: 12,
        borderLeft: `8px solid ${border}`,
      }}
    >
      <h2 className="mask-h4">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{title}</span>
          <Tag color="geekblue">...from our Archives</Tag>
        </div>
      </h2>
      <p>{text}</p>
      {!isUndefined(files) && (
        <Fragment>
          {map(files, file => {
            return (
              <p>
                <OutLink to={file.link}>
                  <Icon
                    type={isUndefined(file.icon) ? 'file-pdf' : file.icon}
                    theme="outlined"
                  />
                  &nbsp;
                  {file.title}
                </OutLink>
              </p>
            )
          })}
        </Fragment>
      )}
    </div>
  )
}

/** Initiative */
const Initiative = props => {
  return (
    <StandardPage className="" seoData={seoData}>
      <Breadcrumb className="mask-p" separator="»" style={{ marginBottom: 30 }}>
        <BItem>
          <Link to="/">Home</Link>
        </BItem>
        <BItem>
          <Link to="/projects/ongoing">Projects</Link>
        </BItem>
        <BItem>
          <Link to="/projects/past">Past Projects</Link>
        </BItem>
        <BItem>Restorative Dialogue across Cultures</BItem>
      </Breadcrumb>
      <h1 className="mask-h3">Restorative Dialogue across Cultures</h1>
      <div className="margin-p">
        <GoldenMajorHalves>
          <div>
            <Video
              url="https://vimeo.com/242213125"
              style={{ marginBottom: 0 }}
            />
          </div>
          <div>
            <Theme
              border="#FA8F00"
              title="Restorative Dialogue across Cultures (2016)"
              tag="Projects & Reports"
              text="Dummy text."
              files={[
                {
                  title: 'Project Proposal',
                  link:
                    '/cross-cultural-restorative-dialogue-project-proposal.pdf',
                },
                {
                  title: 'Report',
                  link: '/cross-cultural-dialogue-report.pdf',
                },
                {
                  title: 'Report Annexe',
                  link: '/cross-cultural-dialogue-report-annexe.pdf',
                },
              ]}
            />
          </div>
        </GoldenMajorHalves>
      </div>
      <div className="margin-p">
        <Image
          src="/projects/restorativeDialogueAcrossCultures.jpg"
          rawWidth={1440}
          rawHeight={900}
          style={{
            height: 'auto',
            maxWidth: '600px',
            border: 0,
            background: 'transparent',
            display: 'block',
            marginLeft: 0,
          }}
          alt="Restorative Dialogue across Cultures"
        />
      </div>

      <DisqusComments pageData={pageData} />
    </StandardPage>
  )
}

Initiative.propTypes = {
  data: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Initiative
