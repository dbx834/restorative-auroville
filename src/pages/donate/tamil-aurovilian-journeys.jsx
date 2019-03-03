// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Image from '@bodhi-project/components/lib/Image'

import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../../components/Link'
import StandardPage from '../../components/wrappers/StandardPage'
import DisqusComments from '../../components/DisqusComments'
import PDFViewer from '../../components/PDFViewer'
import seoHelper from '../../methods/seoHelper'
import PrevNext from '../../components/PrevNext'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'Tamil Aurovilian Journeys',
  nakedPageSlug: 'donate/tamil-aurovilian-journeys',
  pageAbstract:
    'We are creating a one-time magazine focusing on the experiences of Tamil Aurovilians, their journeys into Auroville, and their feelings of belonging and exclusion.',
}

const seoData = seoHelper(pageData)

const { Item: BItem } = Breadcrumb

const next = {
  nakedPageSlug: 'donate/filming-a-live-restorative-circle',
}

const prev = {
  // nakedPageSlug: 'community-events/women-for-justice',
}

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
          <Link to="/donate">Donate</Link>
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
          src="/donate-assets/magazine/img2.jpeg"
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
        to our different cultural backgrounds. At the moment we are facing a
        strong disconnect that needs to be held with care by the community. In
        early 2018, some incidents occurred that put the topic of discrimination
        firmly on the Auroville agenda. Especially Tamil Aurovilians, who
        represent one-third of the Auroville population, have expressed feelings
        of exclusion and rejection.{' '}
      </p>
      <p>
        Claims of discrimination are complicated as they are based on subjective
        experience, mostly felt rather than seen or heard. Sharing stories,
        personal narratives and histories of individual Aurovilians, raises
        awareness in the community for the intricacies of this topic. Stories
        allow for closeness, mutual understanding, and empathy, as they connect
        the reader directly to the experience of the storyteller. As such,
        Restorative Auroville is creating a publication of 30-40 interviews with
        Tamil Aurovilians who speak about their personal journey, their
        connection to Auroville, and their experiences of exclusion and of
        inclusion. For every interview, we’ll also have a special portrait
        photograph.
      </p>
      <p>
        The Tamil community in Auroville is very varied and does not have a
        unified voice on these topics. The publication represents this
        diversity, giving a platform to those who we are used to hear from, as
        well as those who are less outspoken. It’s important to us that we
        attempt to mirror a mix of stories and opinions, as we are looking to
        reduce stereotypes – there’s no ‘Tamil community’ speaking. Instead,
        there are individuals who are our brothers and sisters in the Auroville
        community, with a wide variety of experiences.{' '}
      </p>
      <p>
        We hope to print and distribute the magazine in early 2019. In the event
        that enough funds are raised, 500 copies will be given out for free in
        the community.
      </p>
      <p>
        <Link to="/donate">
          If you’re inspired by our project and would like to help, we welcome
          your contributions you can donate here.
        </Link>
      </p>
      <p>Please know that any amount is greatly appreciated.</p>

      <PDFViewer
        url="https://www.restorativeauroville.org/donate-assets/magazine/proposal.pdf"
        title="Booklet"
      />
      <PrevNext next={next} prev={prev} />
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
