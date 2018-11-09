// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import isUndefined from 'lodash/isUndefined'
import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
//import Link from 'gatsby-link';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
// import Image from '@bodhi-project/components/lib/Image'
import OutLink from '@bodhi-project/components/lib/OutLink'
import Images from '@bodhi-project/components/lib/Images'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/icon/style/css'

import Tag from 'antd/lib/tag'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/tag/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../components/StandardPage'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const pageData = {
  pageTitle: 'Archives',
  nakedPageSlug: 'archives',
  pageAbstract: 'Page abstract.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Theme */
const Theme = props => {
  const { border, title, files, tag, text, photos, columns } = props
  return (
    <div style={{ paddingLeft: 12, borderLeft: `8px solid ${border}` }}>
      <h2 className="mask-h4">
        {title} <Tag color="geekblue">{tag}</Tag>
      </h2>
      <p>{text}</p>
      {!isUndefined(photos) && (
        <div className="mask-p">
          <Images photos={photos} loader="gradient" columns={columns} />
        </div>
      )}
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

/** Page */
const Page = () => (
  <StandardPage className="" seoData={seoData}>
    <h1 className="mask-h3">Archives</h1>
    <p>
      We want to explore and understand this question: Are we divided in
      Auroville, as local Tamil Aurovilians and non-local Aurovilians?
    </p>
    <Theme
      border="#FAE300"
      title="Experiences with training and facilitating Restorative Circles and conflict resolution."
      tag="Interview"
      text="Dummy text."
      files={[
        {
          title: 'Interview with L’aura Joy, by Edwin Rutsch',
          icon: 'youtube',
          link:
            'https://www.youtube.com/watch?time_continue=2570&v=jy9C8tyCxkg',
        },
      ]}
    />
    <Theme
      border="#FABB00"
      title="Walk of Hope in Auroville and the Bioregion (2018)"
      tag="Projects & Reports"
      text="Dummy text."
      files={[
        {
          title: 'Project Proposal',
          link: '/walk-of-hope-project-proposal.pdf',
        },
      ]}
    />
    <Theme
      border="#FABB00"
      title="Public Presentation: &quot;Create Auroville Together - Restorative Circles&quot; (2017)"
      tag="Public Presentations"
      text="Dummy text."
      photos={[
        { src: '/archives/public2017/img1.jpg', width: 600, height: 450 },
        { src: '/archives/public2017/img3.jpg', width: 600, height: 778 },
        { src: '/archives/public2017/img2.jpg', width: 600, height: 450 },
      ]}
      columns={3}
      files={[
        {
          title: 'At Unity Pavilion, Auroville (Part 1)',
          icon: 'youtube',
          link:
            'https://www.youtube.com/watch?v=n1Uf1IYQ2_Y&t=10s&index=9&list=PLQbEiEQu-L1YAIZY5pLrNA5Z41yJ1L8pF',
        },
        {
          title: 'At Unity Pavilion, Auroville (Part 2)',
          icon: 'youtube',
          link:
            'https://www.youtube.com/watch?v=ngOhj-NhKJo&t=0s&index=8&list=PLQbEiEQu-L1YAIZY5pLrNA5Z41yJ1L8pF',
        },
      ]}
    />
    <Theme
      border="#4A01AA"
      title="Justice Questionnaire (2017)"
      tag="Projects & Reports"
      text="Dummy text."
      files={[
        {
          title: "Justice in Auroville - What's Your Opinion?",
          link: '/justice-in-auroville-what-is-your-opinion.pdf',
        },
        {
          title: 'Results',
          link: '/justice-questionnaire-result.pdf',
        },
      ]}
    />
    <Theme
      border="#FAE300"
      title="Film Fest - Restoring Connection (2016)"
      tag="Projects & Reports"
      text="Dummy text."
      files={[
        {
          title: 'Project Proposal',
          link: '/restoring-connection-film-fest-project-proposal.pdf',
        },
        {
          title: 'Report',
          link: '/filmfest-report.pdf',
        },
      ]}
    />
    <Theme
      border="#FA8F00"
      title="Restorative Dialogue across Cultures (2016)"
      tag="Projects & Reports"
      text="Dummy text."
      files={[
        {
          title: 'Project Proposal',
          link: '/cross-cultural-restorative-dialogue-project-proposal.pdf',
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
    <Theme
      border="#0101AF"
      title="Restorative Auroville Research Project (2015-17)"
      tag="Projects & Reports"
      text="In September 2015, we applied for a 1-year grant to support our Research Project to bring Restorative Circles to Auroville and to start exploring the possibilities of developing a Restorative Justice System here."
      files={[
        {
          title: 'Project Proposal',
          link: '/applied-research-restorative-circles-in-auroville.pdf',
        },
        {
          title: '6-month Report',
          link: '/restorative-auroville-6-month-report.pdf',
        },
        {
          title: '1-year Report',
          link: '/restorative-auroville-year-end-report.pdf',
        },
      ]}
    />
    <Theme
      border="#FABB00"
      title="Public Presentation (2014)"
      tag="Public Presentations"
      text="Dummy text."
      files={[
        {
          title: 'At Unity Pavilion, Auroville',
          icon: 'youtube',
          link: 'https://www.youtube.com/watch?v=34yV9adMWNY',
        },
        {
          title: 'Full Audio Clip',
          icon: 'sound',
          link: 'https://www.aurovilleradio.org/restorative-circles/',
        },
      ]}
    />
    <Theme
      border="#FABB00"
      title="Public Presentation (2011)"
      tag="Public Presentations"
      text="Dummy text."
      files={[
        {
          title: 'At Town Hall, Auroville',
          icon: 'youtube',
          link:
            'https://www.youtube.com/watch?v=YIUFjSzXn1Y&t=0s&index=7&list=PLQbEiEQu-L1YAIZY5pLrNA5Z41yJ1L8pF',
        },
      ]}
    />
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
