// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import OutLink from '@bodhi-project/components/lib/OutLink'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../../components/StandardPage'
import DisqusComments from '../../components/DisqusComments'
import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'Magazine',
  nakedPageSlug: 'projects/magazine',
  pageAbstract:
    'We are creating a magazine focusing on the experiences of Tamil Aurovilians, their journeys into Auroville, and their feelings of belonging and exclusion.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Initiative */
const Initiative = props => {
  return (
    <StandardPage className="" seoData={seoData}>
      <h1 className="mask-h3">Magazine</h1>
      <p>
        In an international township like Auroville, where many different people
        come together, it seems inevitable that at times disconnect arises due
        to different cultural backgrounds. At the moment we are facing a strong
        disconnect that needs to be held with care by the community. In early
        2018, some incidents occurred that put the topic of discrimination
        firmly on the Auroville agenda. Especially Tamil Aurovilians, who
        represent one-third of the Auroville population, have expressed feelings
        of exclusion and rejection.{' '}
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
        with a wide variety of experiences.{' '}
      </p>
      <p>
        We hope to print and distribute in early 2019. In the event that enough
        funds are raised, 500 copies will be given out for free in the
        community. If you are willing to contribute, you may choose from the
        options below, and receipts can be provided if requested.
      </p>
      <ol className="mask-p">
        <li>
          From within Auroville:
          <ul style={{ fontSize: 'unset' }}>
            <li style={{ fontSize: 'unset' }}>
              Make a transfer/deposit at Financial Services to “Joy Living
              Projects,” acct# 252235
              <ul style={{ fontSize: 'unset' }}>
                <li style={{ fontSize: 'unset' }}>
                  Please specify “for Magazine, Joy Living Learning Project.”
                </li>
                <li style={{ fontSize: 'unset' }}>
                  Please notify us by email (<OutLink to="mailto:restorative@auroville.org.in">
                    restorative@auroville.org.in
                  </OutLink>) that you’ve made a transfer, so that we can track
                  your contribution.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          From within India and/or abroad:
          <ul style={{ fontSize: 'unset' }}>
            <li style={{ fontSize: 'unset' }}>
              Follow the payment link{' '}
              <OutLink to="https://donations.auroville.com/">here</OutLink>.
              <ul style={{ fontSize: 'unset' }}>
                <li style={{ fontSize: 'unset' }}>
                  Please select “Other” in the Project select, specify “for
                  Magazine, Joy Living Learning Project.”
                </li>
              </ul>
            </li>
            <li style={{ fontSize: 'unset' }}>
              From within India and/or abroad:
              <ul style={{ fontSize: 'unset' }}>
                <li style={{ fontSize: 'unset' }}>
                  Follow the payment link{' '}
                  <OutLink to="https://donations.auroville.com/">here</OutLink>.
                </li>
                <li style={{ fontSize: 'unset' }}>
                  Please notify us by email (<OutLink to="mailto:restorative@auroville.org.in">
                    restorative@auroville.org.in
                  </OutLink>) that you’ve made a transfer, so that we can track
                  your contribution.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
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