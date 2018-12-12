// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
// import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// import Link from 'gatsby-link';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
// import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import BlogPostWrapper from '../../components/wrappers/BlogPostWrapper'

// import seoHelper from '../../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const pageData = {
  pageTitle: 'La responsabilité de tous',
  nakedPageSlug: 'writings/la-responsabilite-de-tous',
  pageAbstract:
    'J’ai été profondément émue par ce travail et par Dominic Barter, le père des Cercles restauratifs. J’ai vraiment senti que c’était la CNV appliquée aux conflits dans le cadre d’une communauté.',
  cover: '/content-assets/covers/la-responsabilite-de-tous.jpg',
  publishedTimestamp: 1462106150,
  category: 'Restorative Circle',
  author: 'La Revue D’Auroville',
  next: {
    nakedPageSlug: 'writings/restoring-connection',
  },
  prev: {
    nakedPageSlug: 'writings/justice-and-punishment',
  },
}

// const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = () => (
  <BlogPostWrapper className="" pageData={pageData}>
    <p>Published in “La Revue D’Auroville.”</p>
    <p>
      <strong>Revue d’Auroville</strong> -{' '}
      <i>L'aura, comment est né ton intérêt pour la résolution de conflits ?</i>
    </p>
    <p>
      <strong>L’aura</strong> – Après être partie d’Auroville pour faire mes
      études, j’ai enseigné au Canada pendant trois ans, et puis je suis revenue
      à Auroville.
    </p>
    <p>
      Les trois premières années j’ai enseigné à Future School et je pensais
      vraiment que j’allais rester prof toute ma vie, mais étant très idéaliste
      j’étais super frustrée de voir qu’en fait je devenais de plus en plus
      comme un flic avec les élèves et je n’aimais vraiment pas ça, alors j’ai
      décidé de laisser tomber l’enseignement.
    </p>
    <p>
      Trois mois plus tard, j’ai découvert un livre sur les principes de la
      Communication non violente (CNV) et j’ai adoré, sans vraiment savoir qu’il
      était en fait possible de se former et d’en faire l’expérience pleinement.
    </p>
    <p>
      Quelques jours plus tard j’ai vu une annonce dans les News qui proposait
      un stage de cinq jours sur la Communication non violente. Dès les cinq
      premières minutes du stage, j’ai su que cela allait avoir une grande
      importance dans ma vie.
    </p>
    <p>
      La CNV ne sert pas uniquement à résoudre des conflits bien qu’une grande
      partie de ce système permette de régler les conflits internes ou externes.
      Dans la Communication non violente, on écoute vraiment les besoins, nos
      besoins, communs à tous les êtres humains. On apprend aussi à entendre ce
      qu’il y a derrière ce que nous exprimons, derrière nos messages, qui la
      plupart du temps sont négatifs. La CNV nous aide à voir la beauté des
      personnes derrière ces signaux négatifs et à rétablir le lien brisé entre
      ces personnes.
    </p>
    <p>
      Ensuite je me suis totalement consacrée à l’étude de ce processus et j’ai
      commencé à faire des médiations, à aider des gens en privé, des individus
      ou des petits groupes.
    </p>
    <p>
      Et puis il y a presque six ans mon ami Jason et moi sommes allés aux
      Etats-Unis pour rencontrer un formateur CNV qui travaillait en prison,
      c’est là que j’ai découvert les Cercles restauratifs (ou Restorative
      Circles, RC).
    </p>
    <p>
      J’ai été profondément émue par ce travail et par Dominic Barter, le père
      des Cercles restauratifs. J’ai vraiment senti que c’était la CNV appliquée
      aux conflits dans le cadre d’une communauté.
    </p>
    <p>
      Souvent on pense que les conflits sont personnels. « Cela ne concerne que
      toi et moi, cela ne concerne ni mon voisin ni ma mère ni ton frère ni ma
      meilleure amie, etc. », mais ce n’est pas vrai. Cela a un impact sur bien
      plus de personnes qu’il n’y paraît. Les conflits peuvent impacter une
      grande partie de la communauté, alors que généralement nous les voyons
      comme quelque chose de personnel entre deux personnes.
    </p>
    <p>
      Un des buts des Cercles restauratifs est de prendre conscience de cet
      impact et puis, si on se met en cercle avec plusieurs personnes pour
      résoudre le conflit, on a accès à davantage de ressources – bien plus que
      si le processus est limité à deux ou trois personnes. Chacun peut prendre
      la responsabilité de contribuer à une résolution. Et donc, avec ce soutien
      de la communauté, la résolution risque d’être plus créative. La vision des
      Cercles restauratifs est vraiment très systémique. Dans cette vision
      plusieurs personnes de la communauté peuvent être en lien avec le conflit,
      elles ont un rôle à jouer là-dedans.
    </p>
    <p>
      À la base, ce qui fait avancer le cercle, c’est de pouvoir s’entendre ;
      donc si X arrive à entendre Y, Y sentira qu’il a été entendu et il sera
      par conséquent davantage capable de m’entendre, moi. Donc tout le monde
      participe au dialogue, ce n’est pas juste entre deux personnes.
    </p>
    <p>
      Dans cette vision, tous les membres du cercle prennent la responsabilité
      de rétablir la connexion qui a été coupée. Souvent on est très mal à
      l’aise avec les conflits. On se dit : « Ah non, non, cela ne me concerne
      pas », mais c’est faux. Si on veut créer Auroville ensemble, tout le monde
      doit prendre la responsabilité de ce qui se passe ici. Comment peut-on
      avancer si, dès qu’il y a un conflit, je me dis : « Ce n’est pas mon
      problème, débrouillez-vous » ? Auroville ne pourra pas grandir avec une
      telle attitude.
    </p>
    <p>
      <strong>RdAV</strong> –{' '}
      <i>
        À Auroville nous avions déjà la médiation et l’arbitrage, que viennent
        ajouter les Cercles restauratifs ?
      </i>
    </p>
    <p>
      <strong>L</strong> – Elvira et Niva offrent des outils qui font aussi
      partie de la justice restaurative.
    </p>
    <p>
      Dans la médiation on ne cherche pas de coupable. Une des conditions est
      que les parties fassent preuve de bonne volonté et on essaye de voir
      comment arriver à une solution qui tienne compte des besoins des deux
      parties.
    </p>
    <p>
      L’arbitrage peut être utilisé si une des deux parties s’oppose totalement
      à la demande de l’autre. Il peut être aussi utilisé comme une démarche
      volontaire pour deux parties qui ne veulent pas passer par la médiation.
      Dans l’arbitrage, les parties signent un document s’engageant à accepter
      la décision prise par le groupe d’arbitres. Le problème, c’est qu’à
      Auroville il n’y pas de répercussion « légale», et si nous ne respectons
      pas la décision alors que nous nous étions engagés à le faire, il n’y aura
      ni police ni juge devant qui nous devrons comparaître.
    </p>
    <p>
      C’est difficile à Auroville, mais je trouve que cette difficulté, c’est
      notre beauté. On doit trouver le ou les moyens de régler nos conflits avec
      de la bonne volonté, et même si la bonne volonté manque, essayer de
      trouver un moyen de les résoudre tout en étant en cohérence avec nos
      valeurs.
    </p>
    <p>
      Une troisième possibilité se trouve dans les Cercles restauratifs. Nous en
      sommes encore au début de notre voyage. Ce processus n’est présent à
      Auroville que depuis cinq ans .Pour l’instant nous avons touché une
      soixantaine de personnes lors de nos stages.
    </p>
    <p>
      Depuis quelques mois nous avons décidé d’explorer ce processus à plein
      temps, pour le développer sérieusement à Auroville afin de pouvoir
      explorer une autre manière de gérer nos conflits.
    </p>
    <p>
      En septembre j’ai senti un regain d’énergie pour développer cela et j’ai
      lu dans les News que le groupe qui s’occupe de coordonner les projets à
      financer accueillait de nouvelles demandes. J’ai donc saisi l’occasion. Je
      leur ai envoyé un projet, avec une demande de maintenance pour pouvoir m’y
      consacrer à plein temps. Ainsi je pouvais rester ici en m’impliquant
      vraiment pendant une année, sans devoir partir d’Auroville pour gagner de
      l’argent à l’extérieur. Juste après Noël, nous avons reçu la nouvelle que
      notre projet a été accepté grâce à des donateurs hollandais, la fondation
      Stichting De Zaaier.
    </p>
    <p>
      <strong>RdAV</strong> –{' '}
      <i>Alors maintenant qu’est-ce qui se passe concrètement ?</i>
    </p>
    <p>
      <strong>L</strong> – Nous avons des réunions de trois heures chaque
      semaine avec notre équipe, nous discutons de nos stratégies et décidons
      des événements à venir, etc.
    </p>
    <p>
      Nous proposons un atelier un week-end par mois, et à ma grande joie la
      majorité des participants sont des Auroviliens. Nous avons aussi quatre
      groupes de pratique par mois.
    </p>
    <p>
      Le but de ces ateliers est de former les personnes à ce processus, pour
      qu’elles se familiarisent avec le dialogue autour des conflits et de la
      justice. Et puis de leur apprendre à pratiquer une écoute profonde.
    </p>
    <p>Nous avons commencé maintenant à intervenir dans de vrais conflits.</p>
    <p>
      Nous avons aussi un projet intitulé « Truth and Reconciliation Process ».
      C’est un processus de réconciliation s’adressant aux anciens conflits
      d’Auroville qui n’ont pas vraiment été résolus, de façon à pouvoir donner
      un nouveau départ aux personnes concernées. En effet, qu’on le veuille ou
      non, il reste des jugements dans nos têtes et nous n’arrivons pas à voir
      la personne sans l’image de ce qu’il ou elle a fait dans le passé.
    </p>
    <p>
      Notre intention est de commencer par offrir ce processus à des personnes
      qui n’ont pas pu être sélectionnées comme membres possibles du Council et
      du Working Committee. Certains de ces Auroviliens ont été jugés durement
      et même si c’est pour de valides raisons, la communauté ne leur a pas
      donné la chance de se racheter ou de faire table rase du passé. J’espère
      pouvoir offrir un espace pour cela, pour ceux qui y sont prêts. Je pense à
      un conflit en particulier, et à mon avis il n’a pas été résolu parce que
      nous avions trop de jugements sur ce qui est correct ou pas. De plus nous
      n’avions pas les outils adaptés.
    </p>
    <p>
      Et puis nous n’avons pas encore vraiment compris que nous avons la
      responsabilité d’exprimer ce qui nous blesse, ce qui nous touche – et
      d’écouter l’autre avec bienveillance. Nous n’avons pas encore pris la
      responsabilité individuelle de vivre notre Idéal d’Unité.
    </p>
    <p>
      Nous avons des valeurs très hautes mais au niveau des conflits nous sommes
      encore très immatures.
    </p>
    <p>
      <i>Interview recueillie par Hamsini</i>
    </p>
  </BlogPostWrapper>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
