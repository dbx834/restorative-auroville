// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";

// import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import BlogPostWrapper from '../../components/wrappers/BlogPostWrapper'

// import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'Restoring Connection',
  nakedPageSlug: 'writings/restoring-connection',
  pageAbstract:
    "In October, there was a film festival in Cinema Paradiso and dialogue sessions on the theme of 'Restoring Connection' as related to the restorative justice movement.",
  cover: '/content-assets/covers/restoring-connection.jpg',
  publishedTimestamp: 1480595750,
  category: 'Restorative Circle',
  author: "L'aura Joy",
  next: {
    nakedPageSlug: 'writings/can-we-talk-about-discrimination-in-auroville',
  },
  prev: {
    nakedPageSlug: 'writings/la-responsabilite-de-tous',
  },
}

// const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = props => (
  <BlogPostWrapper className="" pageData={pageData} {...props}>
    <p>Published in “Auroville Today.”</p>
    <p>
      In October, there was a film festival in Cinema Paradiso and dialogue
      sessions on the theme of 'Restoring Connection' as related to the
      restorative justice movement. The organizing team talk about the response,
      as well as their ongoing plans to raise awareness about restorative
      justice in the community.
    </p>
    <p>
      <i>
        Auroville Today: Why a film festival on the theme of restoring
        connection?
      </i>
    </p>
    <p>
      <strong>Kati</strong>: It is part of the work we have been doing the past
      year, raising awareness in the community about restorative justice and
      restorative circles.
    </p>
    <p>
      <i>
        Did you think that people might come to films on the topic who would not
        sign up for workshops?
      </i>
    </p>
    <p>
      <strong>L’aura</strong>: Absolutely. We are trying to use as many
      strategies as possible for raising aware- ness. We’ve been experimenting
      with restorative circles for about five or six years, and often we
      wondered how to inform the larger collective. A few years ago, Jason and I
      did a presentation in the Town Hall and later I hosted a meeting in Unity
      Pavilion, but a project such as this needs more consistent engagement.
      Then last September, I had a renewed spark of energy and wrote a one-year
      applied research project to explore how to bring restorative circles to
      Auroville as part of a larger community-wide justice system. The film
      festival was the latest strategy in raising awareness.{' '}
    </p>
    <p>
      <i>What was the response?</i>
    </p>
    <p>
      <strong>Kati</strong>: We got very positive feedback, not only regarding
      the quality of the films but also on the post-film dialogue spaces. People
      were very happy to have that safe space after a screen- ing to express
      their feelings. What was also nice about this film festival was that the
      audience was very mixed and included young people.{' '}
    </p>
    <p>
      <strong>Hélène</strong>: Some people said it was too intense to have
      twelve strong films in six days: they did- n’t feel they had time to
      digest them. Sometimes a film touches your life so deeply you need time to
      process it.{' '}
    </p>
    <p>
      <i>
        The films were certainly very powerful. However, if people came to these
        films without a background in restorative justice, would they make the
        connection? And did anybody wonder about their relevance to Auroville?
      </i>
    </p>
    <p>
      <strong>L’aura</strong>: Most of the people who came didn’t have a
      background in restorative circles. However, everybody said we need more
      films like this and they really saw a connection with Auroville. Of
      course, our Auroville situations are very small compared to the extreme
      situa- tions focussed upon in the films, yet there was a feeling that if
      we don’t do something, this could be where Auroville is heading.{' '}
    </p>
    <p>
      <strong>Hélène</strong>: One thing you could see in the movies was the
      need to connect, to hear and accept each other. It made people very aware
      of how much we lack this connection with each other in Auroville.{' '}
    </p>
    <p>
      <strong>Janet</strong>: In this context, our relationship, or lack of
      relationship, with the local villagers came up a lot during the dialogues.{' '}
    </p>
    <p>
      <i>
        ‘Restoring’ connection implies a former connection that has been broken.
        Yet in some of the films, the individuals involved in conflict
        situations seemed to have no prior connection or relationship.
      </i>
    </p>
    <p>
      <strong>Kati</strong>: A conflict or a crime ruins or disturbs the
      connection and trust either between individ- uals or within a community.
      The South Africans have this principle of ‘ubuntu’, which can be roughly
      translated as “I am what I am because you are”. This implies we are all
      connected at some level.{' '}
    </p>
    <p>
      <strong>L’aura</strong>: For me, the need for connection is innate in
      human beings: we feel good when we feel connected. When we have conflict,
      it is clear that to move forward we have to restore some- thing, because
      in our humanness we are connect- ed and something has happened that shows
      we have become disconnected.{' '}
    </p>
    <p>
      <i>What are the common threads, learnings, in these movies?</i>
    </p>
    <p>
      <strong>Kati</strong>: The humanity, the love, and learning to listen to
      each other are the crucial threads that run through all these films. For
      example, in the French movie the woman who had killed her son was brought
      back to normal life through the unconditional love of her family.{' '}
    </p>
    <p>
      <i>
        Is one of the fundamental principles of restorative justice that when
        you’re in a conflict you learn to see yourself in the other person? This
        seems to be one of the turning points in the film ‘On the Path of
        Forgiveness’.
      </i>
    </p>
    <p>
      <strong>L’aura</strong>: It is a possible outcome but it is not a
      fundamental principle: restorative circles are not solely designed to get
      you to that point. They are based on hearing each other and reflecting
      back the meaning of what we are hearing. What happens from there, happens,
      but it’s not a failed process if you don’t put yourself in the other per-
      son’s shoes.{' '}
    </p>
    <p>
      <strong>Janet</strong>: But when I see a film or read a book about
      somebody’s life, I am only touched if I can see myself in that person.{' '}
    </p>
    <p>
      <i>Is the key realisation then of our essential oneness?</i>
    </p>
    <p>
      <strong>L’aura</strong>: Yes, and for me it can’t remain only at this
      philosophical level. It’s more than that. I’m most concerned about the
      practicalities of how we learn to live together, because Auroville is not
      going to survive unless we figure out how to live together, how to
      dialogue with each other and our village neighbours. That’s why it is so
      important to raise awareness. From that, a spiritual understanding of
      oneness may emerge, but for me it is not the other way round.{' '}
    </p>
    <p>
      <i>
        One of the motives of the festival was to get ideas about how to develop
        a justice system in Auroville. You asked this question at the back of
        the film programme. Did you get many responses and any clarity?
      </i>
    </p>
    <p>
      <strong>Hélène</strong>: We didn’t get a lot of feedback to questions like
      this. I don’t think we got any clarity about the nature of an Auroville
      justice system because, while the films were about restorative justice,
      the process followed in the films was not one we can use in Auroville.
      Restorative justice in Auroville should involve the whole community,
      whereas in the films it generally involved only individuals.{' '}
    </p>
    <p>
      <strong>L’aura</strong>: If designing a justice system was a mental
      exercise, we could do it. But it wouldn’t work here because restorative
      justice is based upon the community holding it, not upon a small group
      imposing it. There needs to be a collective realization that we don’t have
      a real justice system in Auroville, and we need one. For example, when
      there is an arbitration and the outcome is not respected we are quite
      limited in our choices of how to respond. But such a system needs to be
      designed collectively, and this requires a lot of dialogue, perhaps for as
      long as five or ten years. It’s not a quick fix or top-down process.{' '}
    </p>
    <p>
      <strong>Janet</strong>: I think many people think of punishment when they
      hear the word “justice”. But I think that’s a misunderstanding. I think
      justice means restoring balance: even those who have designed punitive
      justice systems were attempt- ing to restore balance. It’s just that their
      attempts were often not successful as some victims are more harmed by the
      punitive justice system than by the actual offence.{' '}
    </p>
    <p>
      <strong>L’aura</strong>: In Auroville at present, we don’t yet have a
      formalized alternative to the existing law system. Our community goodwill
      and the ser- vices offered by Koodam are obviously a great support, but I
      think we have a lot more work to do on the larger systemic scale. And,
      unlike mediation, restorative circles ideally need a restorative justice
      system to be in place: you can’t really have restorative circles as a
      stand- alone. And setting up such a system requires a collective cultural
      shift.{' '}
    </p>
    <p>
      <i>
        Your present approach is bottom-up, but presumably at some point you
        hope this will result in the whole system changing?
      </i>
    </p>
    <p>
      <strong>Janet</strong>: Yes. Recently the Housing Service closed
      temporarily because the people working there felt criticized by some
      people using the service. If there was a culture in this community to call
      a restorative circle in situations like this, it could have been worked
      out in a different way. This is the culture that has to develop.{' '}
    </p>
    <p>
      <i>
        From comments made to an article written by L’aura on Auronet some time
        ago, it is obvious that some people interpret restorative justice as
        being too “loose”; that in restorative circles everything becomes
        somehow acceptable as long as you can talk it through. They believe it
        is not a real deterrent.
      </i>
    </p>
    <p>
      <strong>L’aura</strong>: Restorative justice doesn’t say that you can’t
      have a very strong outcome. In conventional society, the outcome of a
      restorative justice process might be you would go to jail, but maybe in
      jail you would get therapy and the victim might also get therapy. The
      difference is the outcome would come out of dialogue, not because you
      broke a specific law and must suffer specified consequences for that
      crime.{' '}
    </p>
    <p>
      <strong>Hélène</strong>: We need to offer people choice. If they don’t
      connect with restorative justice, they can choose the existing method of
      police, lawyers and courts etc.{' '}
    </p>
    <p>
      <strong>Janet</strong>: We try to dissuade people from using this option
      in Auroville. But if someone commits a crime in Indian law, they will
      clearly be subject to that law.{' '}
    </p>
    <p>
      <i>
        What is the next step in raising awareness about restorative justice?
      </i>
    </p>
    <p>
      <strong>L’aura</strong>: We will continue to use all kinds of strategies
      to raise awareness; not just workshops but also more cross-cultural
      dialogues, movies and World Cafes. One of the best ways to raise awareness
      is through ‘live’ circles – restorative circles that deal with real issues
      – because these involve more people and they tell their friends about
      them. In the past year, we have had quite a number of these.{' '}
    </p>
    <p>
      Also, we have a survey coming out soon in which we ask the community to
      give us their thoughts about justice.{' '}
    </p>
    <p>In other words, we are committed to a long- term project.</p>
    <p>
      <i>From an interview by Alan</i>
    </p>
  </BlogPostWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
