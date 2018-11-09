// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../../components/StandardPage'
import DisqusComments from '../../components/DisqusComments'
import GoldenMajorHalvesAlt from '../../components/GoldenMajorHalvesAlt'
import seoHelper from '../../methods/seoHelper'

import PDFReader from '../../components/PDFReader'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'Tamil Aurovilian Journeys',
  nakedPageSlug: 'projects/tamil-aurovilian-journeys',
  pageAbstract:
    'We are creating a magazine focusing on the experiences of Tamil Aurovilians, their journeys into Auroville, and their feelings of belonging and exclusion.',
}

const seoData = seoHelper(pageData)

const { Item: BItem } = Breadcrumb

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Initiative */
const Initiative = props => {
  return (
    <StandardPage className="" seoData={seoData}>
      <Breadcrumb className="mask-p" separator="»" style={{ marginBottom: 30 }}>
        <BItem>
          <Link to="/">Home</Link>
        </BItem>
        <BItem>
          <Link to="/projects/ongoing">Ongoing Projects</Link>
        </BItem>
        <BItem>
          "Restoring Connection & Building Bridges – Tamil Aurovilian Journeys"
          (Printed Publication)
        </BItem>
      </Breadcrumb>
      <h1 className="mask-h3">
        "Restoring Connection & Building Bridges – Tamil Aurovilian Journeys"
        (Printed Publication)
      </h1>
      <div className="mask-p">
        <Image
          src="/project-assets/magazine/img2.jpeg"
          rawWidth={1280}
          rawHeight={960}
          style={{
            height: 'auto',
            maxWidth: '600px',
            border: 0,
            background: 'transparent',
            marginLeft: 0,
            display: 'block',
          }}
          alt="Restoring Connection & Building Bridges – Tamil Aurovilian Journeys"
        />
      </div>
      <p>
        In an international township like Auroville, where many different people
        come together, it seems inevitable that at times disconnect arises due
        to different cultural backgrounds. At the moment we are facing a strong
        disconnect that needs to be held with care by the community. In early
        2018, some incidents occurred that put the topic of discrimination
        firmly on the Auroville agenda. Especially Tamil Aurovilians, who
        represent one-third of the Auroville population, have expressed feelings
        of exclusion and rejection.
      </p>
      <p>
        Claims of discrimination are complicated as they are based on subjective
        experience, felt rather than seen or heard. For the community to be
        aware of the intricacies of this topic, we need to focus on stories of
        individual Aurovilians, on their personal narratives and history.
        Stories allow for closeness, mutual understanding, and empathy, as they
        connect the reader directly to the experience of the storyteller. As
        such, Restorative Auroville is creating a magazine of 30-40 interviews
        with Tamil Aurovilians who speak about their personal histories, their
        connection to Auroville, and their experiences of exclusion. For every
        interview, a special portrait is made.
      </p>
      <p>
        The Tamil community in Auroville is very varied and does not have a
        unified voice on these topics. The magazine represents this diversity,
        giving a platform to those who we are used to hear from, as well as
        those who are less outspoken. It is important to us that we attempt to
        mirror a mix of stories and opinions, as we are looking to reduce
        stereotypes – there is no ‘Tamil community’ speaking. Instead, there are
        individuals who are our brothers and sisters in the Auroville community,
        with a wide variety of experiences.
      </p>
      <p>
        We hope to print and distribute in early 2019. In the event that enough
        funds are raised, 500 copies will be given out for free in the
        community.
      </p>
      <p>
        <Link to="/donate">
          If you’re inspired by our project and would like to help, we welcome
          your contributions you can donate here.
        </Link>
      </p>
      <p>Please know that any amount is greatly appreciated.</p>

      <div className="margin-p">
        <PDFReader file="/project-assets/magazine/proposal.pdf" />
        &nbsp;
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