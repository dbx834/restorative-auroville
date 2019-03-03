// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

import isUndefined from 'lodash/isUndefined'
import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// import Image from '@bodhi-project/components/lib/Image'
import OutLink from '@bodhi-project/components/lib/OutLink'
import Images from '@bodhi-project/components/lib/Images'

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/icon/style/css'

import Tag from 'antd/lib/tag'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/tag/style/css'

import Collapse from 'antd/lib/collapse'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/collapse/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
// import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Panel } = Collapse
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
const style = css({
  '& .ant-collapse-header': {
    padding: '0px !important',
    borderRadius: '0px !important',
  },
  '& .ant-collapse-item': {
    border: 'unset !important',
  },
  '& .ant-collapse-content-box': {
    // border: '1px solid #00006F !important',
    // padding: '6px !important',
    // borderRadius: '4px !important',
    border: 'unset !important',
    padding: 'unset !important',
    borderRadius: 'unset !important',
  },
}).toString()

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
          <Collapse
            defaultActiveKey={['9']}
            accordion
            bordered={false}
            className={style}
          >
            <Panel
              header={
                <p style={{ marginBottom: 0 }}>
                  <a href="#" disabled>
                    <Icon type="picture" theme="outlined" />
                    &nbsp;Photos
                  </a>
                </p>
              }
              key="1"
              showArrow={false}
            >
              <Images
                photos={photos}
                loader="gradient"
                columns={{ min: 2, max: 3 }}
              />
            </Panel>
          </Collapse>
        </div>
      )}
      {!isUndefined(files) && (
        <Fragment>
          {map(files, file => {
            return (
              <p>
                {!isUndefined(file.link) ? (
                  <OutLink to={file.link}>
                    <Icon
                      type={isUndefined(file.icon) ? 'file-pdf' : file.icon}
                      theme="outlined"
                    />
                    &nbsp;
                    {file.title}
                  </OutLink>
                ) : (
                  <a href="#" disabled className="ignore">
                    <Icon
                      type={isUndefined(file.icon) ? 'file-pdf' : file.icon}
                      theme="outlined"
                    />
                    &nbsp;
                    {file.title}
                  </a>
                )}
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
      Here’s a compilation of our different project proposals, reports, public
      presentations, teaching material, and more.
    </p>
    <Theme
      border="#0101AF"
      title="RC Handbook – Sample Pages"
      tag="Document"
      files={[
        {
          title: 'English sample page',
          link: '/rc-booklet-extract-english.pdf',
        },
        {
          title: 'French sample page (coming soon)',
        },
      ]}
    />
    <Theme
      border="#0101AF"
      title="RC Poster"
      tag="Document"
      files={[
        {
          title: 'English version',
          link: '/rc-poster-english.pdf',
        },
        {
          title: 'Tamil version',
          link: '/rc-poster-tamil.pdf',
        },
        {
          title: 'French version (coming soon)',
        },
        {
          title: 'Spanish version',
          link: '/rc-poster-spanish.pdf',
        },
      ]}
    />
    <Theme
      border="#4A01AA"
      title="Our RC-channel on YouTube (2011‒present)  "
      tag="Videos"
      text="With somewhat regular updates…"
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
      border="#A300A3"
      title="Auroville's Conflict Resolution Policy (2018)"
      tag="Document"
      text="See Auroville's updated Conflict Resolution Policy."
      // files={[
      //   {
      //     title: 'See Policy',
      //     icon: 'file',
      //     link:
      //       'https://www.youtube.com/playlist?list=PLQbEiEQu-L1YAIZY5pLrNA5Z41yJ1L8pF',
      //   },
      // ]}
    />
    <Theme
      border="#FAE300"
      title='"Experiences with training and facilitating Restorative Circles and conflict resolution" (2018)'
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
        {
          title: 'See "Auroville Today" article',
          icon: 'copy',
          link: '/writings/restoring-connection',
        },
      ]}
    />
    <Theme
      border="#0101AF"
      title="Flash-mob: Spontaneous (2015)"
      tag="Flash Mob"
      text="We spontaneously painted wooden planks with conflict-transformation-related phrases and secretly (in the middle of the night) hung them up along Auroville’s roads, to inspire the unexpected. However, it wasn’t long until someone else (who?) decided that this was too outrageous and secretly took them down. How sad."
      photos={[
        {
          src: '/assets/archive/signs/img00001.jpg',
          width: 600,
          height: 549,
        },
        {
          src: '/assets/archive/signs/img00002.jpg',
          width: 600,
          height: 958,
        },
        {
          src: '/assets/archive/signs/img00003.jpg',
          width: 600,
          height: 330,
        },
        {
          src: '/assets/archive/signs/img00004.jpg',
          width: 600,
          height: 799,
        },
        {
          src: '/assets/archive/signs/img00005.jpg',
          width: 600,
          height: 816,
        },
        {
          src: '/assets/archive/signs/img00006.jpg',
          width: 600,
          height: 505,
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
      border="#E00044"
      title="Truth & Reconciliation Process (2015)"
      tag="Document"
      text="A process we wanted to offer the community to support healing and reconciliation, especially in connection to governance and feedback. However, it wasn't implemented."
      files={[
        {
          title: 'See Our Draft',
          link: '/truth-and-reconcilation-process.pdf',
        },
      ]}
    />
    <Theme
      border="#0101AF"
      title="Flash-mob: Eye-Gazing (2015)"
      tag="Flash Mob"
      text='We spontaneously joined the "World’s Biggest Eye Contact Experiment" and flash-mobbed Solar Kitchen and the Visitors’ Centre.'
      photos={[
        {
          src: '/assets/archive/eye-gazing/img00001.jpg',
          width: 600,
          height: 400,
        },
        {
          src: '/assets/archive/eye-gazing/img00002.jpg',
          width: 600,
          height: 400,
        },
        {
          src: '/assets/archive/eye-gazing/img00003.jpg',
          width: 600,
          height: 400,
        },
        {
          src: '/assets/archive/eye-gazing/img00004.jpg',
          width: 600,
          height: 400,
        },
        {
          src: '/assets/archive/eye-gazing/img00005.jpg',
          width: 600,
          height: 421,
        },
        {
          src: '/assets/archive/eye-gazing/img00006.jpg',
          width: 600,
          height: 400,
        },
        {
          src: '/assets/archive/eye-gazing/img00007.jpg',
          width: 600,
          height: 424,
        },
        {
          src: '/assets/archive/eye-gazing/img00008.jpg',
          width: 600,
          height: 391,
        },
        {
          src: '/assets/archive/eye-gazing/img00009.jpg',
          width: 600,
          height: 400,
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
          title: 'Project Proposal',
          link: '/how-we-dream.pdf',
        },
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
      border="#FB9001"
      title="Auroville Radio interviews L'aura on Restorative Circles (2014)"
      tag="Interview"
      text="Exploring 'justice' in Auroville, and how we can respond to conflict and so-called unacceptable behaviour in ways that hold all sides of the story and support moving forward as an entire community."
      files={[
        {
          title: 'Watch interview',
          icon: 'youtube',
          link: 'https://www.youtube.com/watch?v=jRrurVLtprE',
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
