// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import smallKey from '@bodhi-project/components/lib/methods/smallKey'
import timestamp from '@bodhi-project/components/lib/methods/timestamp'
import mockTag from '@bodhi-project/components/lib/methods/mockTag'

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
const data = [
  {
    key: smallKey(),
    title: 'Listening',
    cover: undefined,
    routeSlug: '/writings/listening',
    publishedAt: timestamp('Fri, April 12, 2019'),
    abstract:
      'A poem inspired by a 2-day Restorative Circles workshop and my regular engaging with RC for 18 months during which I learned to facilitate Circles. The poem attempts to capture my understanding of the RC process and its key component – reflective listening. ~ by Pranjal',
    hasCategories: ['pranjal'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: 'Can we talk about discrimination in Auroville?',
    cover: undefined,
    routeSlug: '/writings/can-we-talk-about-discrimination-in-auroville',
    publishedAt: timestamp('Fri, May 25, 2018'),
    abstract:
      'Although I can connect with the discomfort that many Aurovilians felt with regards to the recent claim of discrimination being published on Auronet, I’m actually celebrating the courage and clarity that it took to name it, and to do so this publicly.',
    hasCategories: ['lauraJoy'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: 'Restoring Connection',
    cover: undefined,
    routeSlug: '/writings/restoring-connection',
    publishedAt: timestamp('Thu, December 1, 2016'),
    abstract:
      "In October, there was a film festival in Cinema Paradiso and dialogue sessions on the theme of 'Restoring Connection' as related to the restorative justice movement.",
    hasCategories: ['lauraJoy'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: 'La responsabilité de tous',
    cover: undefined,
    routeSlug: '/writings/la-responsabilite-de-tous',
    publishedAt: timestamp('Sun, May 1, 2016'),
    abstract:
      'J’ai été profondément émue par ce travail et par Dominic Barter, le père des Cercles restauratifs. J’ai vraiment senti que c’était la CNV appliquée aux conflits dans le cadre d’une communauté.',
    hasCategories: ['laRevueDAuroville'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: 'Justice & Punishment',
    cover: undefined,
    routeSlug: '/writings/justice-and-punishment',
    publishedAt: timestamp('Sun, November 1, 2015'),
    abstract:
      'I think the main difference here between punitive and restorative justice is the approach.',
    hasCategories: ['lauraJoy'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: 'Justice in Auroville',
    cover: undefined,
    routeSlug: '/writings/justice-in-auroville',
    publishedAt: timestamp('Fri, October 23, 2015'),
    abstract:
      'In dealing with the criminal, the most advanced societies are no longer altogether satisfied with regarding him as a law-breaker to be punished [...].',
    hasCategories: ['lauraJoy'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: 'Our Justice System',
    cover: undefined,
    routeSlug: '/writings/our-justice-system',
    publishedAt: timestamp('Wed, June 25, 2014'),
    abstract:
      'For me, all the talk about the feedback relating to the proposed WC/AVC members is connected to a much larger issue – our Justice System.',
    hasCategories: ['lauraJoy'],
    hasTags: mockTag(),
  },
  {
    key: smallKey(),
    title: 'Dealing with conflict in Restorative Circles',
    cover: undefined,
    routeSlug: '/writings/dealing-with-conflict-in-restorative-circles',
    publishedAt: timestamp('Mon, August 1, 2011'),
    abstract:
      'On July 13th at the Town Hall a presentation on the principles and practice of Restorative Circles was offered by L’aura and Jason, followed by a question and answer session.',
    hasCategories: ['aurovilleToday'],
    hasTags: mockTag(),
  },
]

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default data
