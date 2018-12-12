/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from 'react'
// import favicon from "./favicon.png";

// let inlinedStyles = ''
// if (process.env.NODE_ENV === 'production') {
//   try {
//     /* eslint import/no-webpack-loader-syntax: off */
//     inlinedStyles = require('!raw-loader!../public/styles.css')
//   } catch (e) {
//     /* eslint no-console: "off"*/
//     console.log(e)
//   }
// }

export default class HTML extends React.Component {
  render() {
    // let css
    // if (process.env.NODE_ENV === 'production') {
    //   css = (
    //     <style
    //       id="gatsby-inlined-css"
    //       dangerouslySetInnerHTML={{ __html: inlinedStyles }}
    //     />
    //   )
    // }
    return (
      <html lang="en" className="lk-loading">
        <head>
          <meta name="fragment" content="!" />
          <meta
            name="google-site-verification"
            content="n2SY_8oYGU5Ah3Wtv_67FE5ldl9cQb8Ru8G9guzxPjI"
          />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
