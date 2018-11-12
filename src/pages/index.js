import React from "react"
import Header from '../components/Header';
import Splash from '../components/Splash';
import Music from '../components/Music';
import MusicPara from '../components/MusicPara';
import Giglist from '../components/Giglist';
import Footer from '../components/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';

import '../layout/global.css';
import ParaDivider from "../components/ParaDivider";

export default ({ data }) => (
  <ParallaxProvider>
    <div style={{ height: '100%' }}>
      <Header splash={true} />
      <Splash />
      <Music />
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
