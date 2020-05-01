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
import Division from '@bodhi-project/components/lib/Division'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/row/style/css'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/col/style/css'

import Image from '@bodhi-project/components/lib/image/Image'

import Tag from 'antd/lib/tag'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/tag/style/css'

import FileTextIcon from 'react-feather/dist/icons/file-text'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

import DisqusComments from '../components/DisqusComments'

import newRestorativeSystemFlyer from '../assets/newRestorativeSystemFlyer.jpg'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

const pageData = {
  pageTitle: 'Restorative Circles',
  nakedPageSlug: 'restorative-circles',
  pageAbstract:
    'A Restorative Circle (RC) is a community process designed to hold space for those in conflict. It brings together the three parties in a conflict – those who acted, those directly impacted, and the wider community – within an intentional systemic context, to dialogue as equals. Participants invite each other and attend voluntarily. The dialogue process used is shared openly with all participants, and facilitated by a community member. The process ends when actions have been found that bring mutual benefit and nurture the inherent integrity of all those involved in the conflict.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  '& .image': {
    '@media(min-width: 992px)': {
      marginLeft: '6.25vw',
      marginRight: '6.25vw',
    },
  },

  '& .box': {
    border: '2px solid #FABB00',
    borderRadius: 8,

    '@media(min-width: 992px)': {
      padding: 24,
    },

    '@media(max-width: 992px)': {
      padding: 6,
    },
  },
}).toString()

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
        <ul
          className="mask-p"
          style={{ marginBottom: 0, padding: 0, listStyle: 'none' }}
        >
          {map(files, file => {
            return (
              <li>
                {!isUndefined(file.link) ? (
                  <Link
                    to={file.link}
                    style={{ display: 'flex', marginBottom: 6 }}
                  >
                    <FileTextIcon />
                    &nbsp;
                    {file.title}
                  </Link>
                ) : (
                  <Link
                    to={file.link}
                    style={{ display: 'flex', marginBottom: 6 }}
                    href="#"
                    disabled
                    className="ignore"
                  >
                    <FileTextIcon />
                    &nbsp;
                    {file.title}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = props => (
  <StandardPage className={style} seoData={seoData} {...props}>
    <h1 className="mask-h3">Restorative Circles</h1>
    <p>
      A Restorative Circle (RC) is a community process designed to hold space
      for those in conflict. It brings together the three parties in a conflict
      – those who acted, those directly impacted, and the wider community –
      within an intentional systemic context, to dialogue as equals.
      Participants invite each other and attend voluntarily. The dialogue
      process used is shared openly with all participants, and facilitated by a
      community member. The process ends when actions have been found that bring
      mutual benefit and nurture the inherent integrity of all those involved in
      the conflict.
    </p>
    <p>
      Restorative Circles are facilitated in 3 stages, and are designed to
      identify the key factors in the conflict, reach agreements on next steps,
      and evaluate the results. As Circles form, they invite shared power,
      mutual understanding, self-responsibility and effective action within the
      community.
    </p>
    <div className="margin-p image">
      <Image
        src={newRestorativeSystemFlyer}
        rawHeight={890}
        rawWidth={1324}
        style={{
          height: 'auto',
          width: '100%',
          border: 0,
          background: 'transparent',
          display: 'block',
        }}
        alt="Restorative Auroville"
      />
    </div>
    <Division golden>
      <Fragment>
        <div
          style={{
            border: '2px solid #00006F',
            padding: 7.44,
            borderRadius: 8,
          }}
        >
          <p style={{ marginBottom: 0 }}>
            Restorative Circles offer a form of conflict resolution, but the
            practice also offers a consciousness – and a large part of
            integrating this work into our community involves a cultural shift
            around how we perceive conflict and how we can find co-creative,
            empowered ways of restoring harmony and trust amongst us.
          </p>
        </div>
        <br className="mobile-only" />
      </Fragment>
      <Fragment>
        <div
          style={{
            border: '2px solid #00006F',
            padding: 7.44,
            borderRadius: 8,
          }}
        >
          <p style={{ marginBottom: 0 }}>
            Restorative Circles are a specific restorative practice whose
            development began with the work of Dominic Barter in the favelas in
            Rio de Janeiro in the mid 1990s and continues with a growing
            community both in Brazil and internationally.&nbsp;
            <Link to="https://www.restorativecircles.org/">
              See more about Dominic's work here
            </Link>
            .
          </p>
        </div>
      </Fragment>
    </Division>
    <br />
    <Division>
      <div>
        <Theme
          border="#0101AF"
          title="RC Handbook – Sample Pages"
          tag="Document"
          files={[
            {
              title: 'English sample page',
              link:
                'https://www.restorativeauroville.org/pdfs2/rc-booklet-extract-english.pdf',
            },
            {
              title: 'French sample page (coming soon)',
            },
          ]}
        />
      </div>
      <div>
        <Theme
          border="#0101AF"
          title="RC Poster"
          tag="Document"
          files={[
            {
              title: 'English version',
              link:
                'https://www.restorativeauroville.org/pdfs2/rc-poster-english.pdf',
            },
            {
              title: 'Tamil version',
              link:
                'https://www.restorativeauroville.org/pdfs2/rc-poster-tamil.pdf',
            },
            {
              title: 'French version (coming soon)',
            },
            {
              title: 'Spanish version',
              link:
                'https://www.restorativeauroville.org/pdfs2/rc-poster-spanish.pdf',
            },
          ]}
        />
      </div>
    </Division>
    <br />
    <div className="box">
      <h2 className="mask-h4">Participating in a Circle</h2>
      <p>
        The RC process is voluntary and open to all. It’s simply a tool that can
        support us in responding to conflict, for those who choose to use it.{' '}
      </p>

      <p>
        Anyone can initiate a Circle – whether you’re upset by an incident or
        issue, or you upset someone else, or you’re not directly involved but
        feel concerned, you can call a Circle.
      </p>

      <p>
        Anyone can be named to be invited to a Circle. And if someone isn’t
        named, but is moved to participate, he/she can contact the Facilitator
        and request to be included.
      </p>

      <p style={{ marginBottom: 0 }}>
        <strong>How to Call a Circle</strong>: Send an email to&nbsp;
        <Link to="mailto:restorative@auroville.org.in">
          restorative@auroville.org.in
        </Link>
        , or <Link to="/our-team">speak in person to a member of our team</Link>
        . A Facilitator will follow up with you, hear your concerns, explain the
        RC process, and confirm whether you’d like to go ahead with a Circle or
        not.
      </p>
    </div>
    <br />
    <h2 className="mask-h4">Learn More about Restorative Circles…</h2>
    <p>
      See our <Link to="/events">Upcoming Events</Link> and join a workshop or
      practice group (in person or online).
    </p>
    <DisqusComments pageData={pageData} />
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
