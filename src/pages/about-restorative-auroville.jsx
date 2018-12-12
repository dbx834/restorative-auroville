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
import Link from 'gatsby-link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import OutLink from '@bodhi-project/components/lib/OutLink'
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/icon/style/css'

import Tag from 'antd/lib/tag'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/tag/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../components/wrappers/StandardPage'

import GoldenMajorHalves from '../components/GoldenMajorHalves'
import DisqusComments from '../components/DisqusComments'
import Video from '../components/Video'

import seoHelper from '../methods/seoHelper'

import birdsTop from '../assets/birdsTop.png'
import grungeBox from '../assets/grungeBg.jpg'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'About Restorative Auroville',
  nakedPageSlug: 'about-restorative-auroville',
  pageAbstract:
    'Restorative Auroville is an independent project that aims to bring the practice of Restorative Circles, a holistic, community-based form of conflict resolution, to Auroville, and to explore what a consciously designed justice system could look like here – one that reflects our ideals, but that is also effective and has the power to bring about constructive change, both on the individual and community levels.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const { Fragment } = React

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
          <Link to="/archives">
            <Tag color="geekblue">...from our Archives</Tag>
          </Link>
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

/** Page */
const Page = () => (
  <StandardPage className="" seoData={seoData}>
    <h1 className="mask-h3">Our Project: Restorative Auroville</h1>
    <p>
      Restorative Auroville is an independent project that aims to bring the
      practice of <Link to="/restorative-circles">Restorative Circles</Link>, a
      holistic, community-based form of conflict resolution, to Auroville, and
      to explore what a consciously designed justice system could look like here
      – one that reflects our ideals, but that is also effective and has the
      power to bring about constructive change, both on the individual and
      collective levels.
    </p>
    <p>
      After having studied and practiced the Restorative Cirlces (RC) process
      for 5 years, we officially launched Restorative Auroville as a public
      service in Auroville in September 2015. Because much of this work depends
      on how it’s received in the community, its growth is organic and we don’t
      know exactly where it will lead us and how long it will take…
    </p>
    <p>
      As RC is a process that engages the community as an essential part of
      resolving conflicts, we trust that it’ll offer a way forward and support a
      shift in how we hold space for conflict and transformation.
    </p>
    <p>
      At present, RC is offered as part of Auroville’s Conflict Resolution
      Policy (in addition to Mediation, Arbitration, the Appeal Process, etc).
      However, our long-term dream is to bring about a radical shift in how we
      hold conflict as a community. In addition to holding space for conflict,
      our project includes research, teaching, implementing Circles in different
      schools, public presentations and interactions, large-scale events,
      experiments, testimonials, and more.
    </p>
    <div
      style={{
        paddingTop: 48,
        paddingBottom: 48,
        paddingLeft: 48,
        paddingRight: 48,
        marginLeft: '6.25vw',
        marginRight: '6.25vw',
        borderRadius: 20,
        position: 'relative',
      }}
      className="margin-p"
    >
      <div
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          height: 75,
          zIndex: -1,
        }}
      >
        <Image
          src={birdsTop}
          style={{
            background: 'transparent',
            border: 'unset',
            height: 75,
            width: 75,
          }}
          rawWidth={900}
          rawHeight={900}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          zIndex: -2,
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <Image
          src={grungeBox}
          style={{
            background: 'transparent',
            border: 'unset',
            height: '100%',
            width: '100%',
          }}
          rawWidth={1440}
          rawHeight={900}
        />
      </div>
      <h2 className="mask-h4">Our Aims & Objectives:</h2>
      <ul className="mask-p" style={{ marginBottom: 0, paddingLeft: 22 }}>
        <li>
          to co-create a Justice System in Auroville that reflects our values
          and is effective
        </li>
        <li>
          to continue to raise awareness in Auroville about Restorative Circles
        </li>
        <li>
          to have a functioning Restorative System where people can call live
          Circles and a critical mass understands how the process works
        </li>
        <li>
          to train a large number of people and to have potential Facilitators
          across the community (in different neighbourhoods, Working Groups,
          schools, Units, Services, etc)
        </li>
        <li>
          to understand what is unique about Auroville and how to engage with RC
          in ways that suit our needs and ideals
        </li>
        <li>
          to contribute to more ease and efficiency in resolving conflicts
          (increased goodwill, creativity, and inclusion instead of exclusion)
        </li>
        <li>
          to contribute towards a cultural shift in understanding conflict, its
          potential for transformation, and the need to take responsibility for
          our actions
        </li>
        <li>
          to contribute to restoring trust, communication and harmony amongst
          Aurovilians
        </li>
        <li>
          to potentially be an example for other communities seeking to improve
          their peace and justice systems
        </li>
      </ul>
    </div>
    &nbsp;
    <GoldenMajorHalves>
      <div>
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
      </div>
      <div>
        <h2 className="mask-h5">Justice & Restorative Circles in Auroville</h2>
        <Video url="https://www.youtube.com/watch?v=kqBM5Xr5VfI&list=PLQbEiEQu-L1YAIZY5pLrNA5Z41yJ1L8pF&index=10" />
      </div>
    </GoldenMajorHalves>
    <DisqusComments pageData={pageData} />
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
