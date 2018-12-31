// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
// import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Breadcrumb from 'antd/lib/breadcrumb'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/breadcrumb/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../../components/Link'
import StandardPage from '../../components/wrappers/StandardPage'
import DisqusComments from '../../components/DisqusComments'
import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

const pageData = {
  pageTitle: 'Taking RC to Units, Schools and Residential Communities',
  nakedPageSlug:
    'system-building-initiatives/taking-rc-to-units-schools-and-residential-communities',
  pageAbstract:
    'In our aim to bring about a cultural shift in Auroville in how we engage with conflict, we’re taking RC and its principles to the Units, schools and residential communities. Our experience of living and working in community is that it can be challenging at times, as we can get stuck in our differences and disagreements. It can be difficult to handle such situations, and even with the best of intentions, we can experience disconnection and widening communication gaps.',
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
          <Link to="/system-building-initiatives">
            System Building Initiatives
          </Link>
        </BItem>
        <BItem>Taking RC to Units, Schools and Residential Communities</BItem>
      </Breadcrumb>
      <h1 className="mask-h3">
        Taking RC to Units, Schools and Residential Communities
      </h1>
      <p>
        In our aim to bring about a cultural shift in Auroville in how we engage
        with conflict, we’re taking RC and its principles to the Units, schools
        and residential communities. Our experience of living and working in
        community is that it can be challenging at times, as we can get stuck in
        our differences and disagreements. It can be difficult to handle such
        situations, and even with the best of intentions, we can
        experience disconnection and widening communication gaps.
      </p>
      <p>
        This initiative aims to inform and empower members of the community so
        that when conflict or misunderstanding arises they are better equipped
        to manage it. Auroville’s Conflict Resolution Policy includes
        Restorative Circles as a process available to the community.
        Nonetheless, we have found that we can do more to make people aware of
        this process and its potential.
      </p>
      <p>
        Restorative Auroville offers RC as a safe space for holding difficult
        conversations through the process of reflective listening. It’s designed
        to share power in the community and can potentially be facilitated by
        anyone. When people are better informed about the process they can use
        it to its fullest. We hope that:
      </p>
      <ul className="mask-p">
        <li>
          People can make informed choices for managing misunderstandings in the
          community.
        </li>
        <li>
          Those who are ‘named’ would be more willing to participate and engage.
        </li>
        <li>
          Some members of the community will be inspired to become Facilitators.
        </li>
      </ul>
      <p>
        Units, schools and residential communities that are willing to engage
        with us would receive a series of workshops and trainings. Once they are
        familiar with RC and its principles we could co-create a system that
        would meet the needs of their internal Unit, community or school.
      </p>
      <p>
        Currently,{' '}
        <Link to="/system-building-initiatives/restorative-circles-in-aikiyam-school">
          we are sharing RC in Aikiyam School
        </Link>
        , one of Auroville’s outreach schools for children from Kindergarten to
        8th Grade. After discussions with the administration and teachers of the
        school, a group of ten teachers have committed to learn about this
        process. It has been met with enthusiasm and curiosity, and we look
        forward to seeing how we can co-create an RC System for the school. The
        school has an overwhelming majority of teachers who are originally from
        the bioregion, and we are looking forward to seeing how they can adapt
        it to their cultural context.
      </p>
      <p>
        You can join us in taking this to other Units, schools and residential
        communities by reaching out or volunteering with us!
      </p>
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
