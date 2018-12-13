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
// import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const pageData = {
  pageTitle: 'Archives',
  nakedPageSlug: 'archives',
  pageAbstract: 'From our archives…',
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
        {title}{' '}
        <Tag color="geekblue" style={{ cursor: 'default' }}>
          {tag}
        </Tag>
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
      Here’s a compilation of our different project proposals, reports, and
      more.
    </p>
    <Theme
      border="#4A01AA"
      title="Additional RC–Related Videos (2011 - present)"
      tag="Videos"
      text="Our RC-channel on YouTube, with somewhat regular updates."
      files={[
        {
          title: 'See videos',
          icon: 'youtube',
          link:
            'https://www.youtube.com/playlist?list=PLQbEiEQu-L1YAIZY5pLrNA5Z41yJ1L8pF',
        },
      ]}
    />
    <Theme
      border="#FAE300"
      title='"Experiences with training and facilitating Restorative Circles and conflict resolution"'
      tag="Interview"
      text={
        <span>
          Edwin Rutsch, of "
          <OutLink to="http://cultureofempathy.com">
            Center for Building a Culture of Empathy
          </OutLink>
          ," interviewed L’aura on her RC work in Auroville.
        </span>
      }
      files={[
        {
          title: 'Watch interview',
          icon: 'youtube',
          link:
            'https://www.youtube.com/watch?time_continue=2570&v=jy9C8tyCxkg',
        },
      ]}
    />
    <Theme
      border="#FABB00"
      title="Walk of Hope in Auroville & the Bioregion (2018)"
      tag="Projects & Reports"
      text={
        <span>
          We invited{' '}
          <OutLink to="http://satsang-foundation.org/">
            Sri M to offer a "Walk of Hope"
          </OutLink>{' '}
          through Auroville and the bioregion, as a symbol of togetherness.
        </span>
      }
      files={[
        {
          title: 'Project Proposal',
          link: '/walk-of-hope-project-proposal.pdf',
        },
      ]}
    />
    <Theme
      border="#FABB00"
      title='"Create Auroville Together: Restorative Circles" (2017)'
      tag="Public Presentations"
      text="A public presentation about RC at Unity Pavilion, Auroville."
      photos={[
        { src: '/archives/public2017/img1.jpg', width: 600, height: 450 },
        { src: '/archives/public2017/img3.jpg', width: 600, height: 778 },
        { src: '/archives/public2017/img2.jpg', width: 600, height: 450 },
      ]}
      columns={3}
      files={[
        {
          title: 'Watch video, Part 1',
          icon: 'youtube',
          link:
            'https://www.youtube.com/watch?v=n1Uf1IYQ2_Y&t=10s&index=9&list=PLQbEiEQu-L1YAIZY5pLrNA5Z41yJ1L8pF',
        },
        {
          title: 'Watch video, Part 2',
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
      text="We sent out a questionnaire to the entire Auroville community in an attempt to raise awareness about our very basic human need for justice, and to hear the community’s thoughts on this topic."
      files={[
        {
          title: "Justice in Auroville – What's Your Opinion?",
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
      title='FilmFest: "Restoring Connection" (2016)'
      tag="Projects & Reports"
      text="We screened documentaries and feature films about peace and reconciliation work from around the world, in an attempt to inspire a movement towards restorative justice in Auroville."
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
      text="We invited Duke Duchscherer (USA, Canada) to co-host a Restorative Dialogue with us, in an attempt to bridge the gap between Aurovilians from the locality and Aurovilians from other places in the world."
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
      title="How Do We Dream It Could Be? (2014)"
      tag="Public Presentations"
      text='We offered a public presentation about RC at Unity Pavilion, and explored about the question: "How do we dream justice could be in Auroville?"'
      files={[
        {
          title: 'Watch video',
          icon: 'youtube',
          link: 'https://www.youtube.com/watch?v=34yV9adMWNY',
        },
        {
          title: 'Listen to radio recording',
          icon: 'sound',
          link: 'https://www.aurovilleradio.org/restorative-circles/',
        },
      ]}
    />
    <Theme
      border="#FABB00"
      title="First-Ever RC Presentation in Auroville! (2011)"
      tag="Public Presentations"
      text="Soon after Jason and L’aura returned from a training with Dominic Barter in the USA, they presented RC at Town Hall, Auroville. (Please excuse the terrible video quality!)"
      files={[
        {
          title: 'Watch video',
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
