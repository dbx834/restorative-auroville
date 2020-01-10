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
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Division from '@bodhi-project/components/lib/Division'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

import Video from '@bodhi-project/components/lib/Video'

import Tag from 'antd/lib/tag'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/tag/style/css'

import FileTextIcon from 'react-feather/dist/icons/file-text'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'
import DisqusComments from '../components/DisqusComments'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

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
const style = css({
  '& .box': {
    borderRadius: 20,
    position: 'relative',

    '@media(min-width: 992px)': {
      paddingLeft: 36,
      paddingRight: 36,

      '& .list': {
        width: 'calc(100% - 332px)',
      },
    },

    '@media(max-width: 992px)': {},

    '& .check': {
      height: '100% !important',

      '& > div': {
        height: '100% !important',
      },

      '& > img': {
        objectFit: 'fill !important',
      },

      '& > picture': {
        '& > img': {
          objectFit: 'fill !important',
        },
      },
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    birdsTop: file(relativePath: { eq: "birdsTop.png" }) {
      ...max900
    }
    grungeBg: file(relativePath: { eq: "grungeBg.jpg" }) {
      ...max900
    }
    flowerBoardDesktop: file(relativePath: { eq: "flower-board-desktop.png" }) {
      ...max900
    }
    flowerBoardMobile: file(relativePath: { eq: "flower-board-mobile.png" }) {
      ...max900
    }
  }
`

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
        <p>
          {map(files, file => {
            return (
              <Fragment>
                <Link
                  to={file.link}
                  style={{ display: 'flex', marginBottom: 12 }}
                >
                  <FileTextIcon />
                  &nbsp;
                  {file.title}
                </Link>
              </Fragment>
            )
          })}
        </p>
      )}
    </div>
  )
}

/** Page */
const Page = props => (
  <StandardPage className={style} seoData={seoData} {...props}>
    <h1 className="mask-h3">Our Project</h1>
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
      After having studied and practiced the Restorative Circles (RC) process
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
    <p>
      Restorative Auroville is an initiative of&nbsp;
      <Link to="https://www.joylivinglearning.org/">Joy Living Learning</Link>,
      a Unit of the&nbsp;
      <Link to="https://www.auroville.org/">Auroville Foundation</Link>.
    </p>
    &nbsp;
    <div className="box margin-p">
      <div
        style={{
          position: 'absolute',
          bottom: 4,
          right: 20,
          height: 400,
          zIndex: -1,
        }}
      >
        <Img
          className="desktop-only"
          fluid={props.data.flowerBoardDesktop.childImageSharp.fluid}
          style={{
            height: 400,
            width: 257,
          }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -2,
        }}
      >
        <Img
          className="desktop-only check"
          fluid={props.data.grungeBg.childImageSharp.fluid}
        />
      </div>
      <h2 className="mask-h4">Our Aims & Objectives:</h2>
      <ul
        className="mask-p list"
        style={{
          marginBottom: 0,
          paddingLeft: 22,
        }}
      >
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
      <h2 className="mask-h3 mobile-only">Our work, inside-out...</h2>
      <Img
        className="margin-p mobile-only"
        fluid={props.data.flowerBoardMobile.childImageSharp.fluid}
        style={{
          maxWidth: 360,
        }}
      />
    </div>
    &nbsp;
    <Division golden>
      <Fragment>
        <Theme
          border="#FB9001"
          title="Restorative Auroville Research Project (2015-17)"
          tag="Projects & Reports"
          text="In September 2015, we applied for a 1-year grant to support our Research Project to bring Restorative Circles to Auroville and to start exploring the possibilities of developing a Restorative Justice System here."
          files={[
            {
              title: 'Project Proposal',
              link:
                'https://www.restorativeauroville.org/pdfs2/applied-research-restorative-circles-in-auroville.pdf',
            },
            {
              title: '6-month Report',
              link:
                'https://www.restorativeauroville.org/pdfs2/restorative-auroville-6-month-report.pdf',
            },
            {
              title: '1-year Report',
              link:
                'https://www.restorativeauroville.org/pdfs2/restorative-auroville-year-end-report.pdf',
            },
          ]}
        />
      </Fragment>
      <Fragment>
        <h2 className="mask-h5">
          <span style={{ fontSize: '96%' }}>
            Justice & Restorative Circles in Auroville
          </span>
        </h2>
        <Video url="https://www.youtube.com/watch?v=kqBM5Xr5VfI&list=PLQbEiEQu-L1YAIZY5pLrNA5Z41yJ1L8pF&index=10" />
      </Fragment>
    </Division>
    <DisqusComments pageData={pageData} />
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
