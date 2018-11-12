import React from "react"
import Header from '../components/Header';
import Splash from '../components/Splash.js';
import Giglist from '../components/Giglist.js';
import Footer from '../components/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';

import '../layout/global.css';

export default ({ data }) => (
  <ParallaxProvider>
    <div style={{ height: '100%' }}>
      <Header splash={true} />
      <Splash />
      <Giglist edges={data.allMarkdownRemark.edges} />
      <Footer />
    </div>
  </ParallaxProvider>
)
export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title path date address link description
          }
        }
      }
    }
  }
`
