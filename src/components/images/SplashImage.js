import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const styles = {
  height: "100%",
  width: "100%",
  transition: "width 2s",
  transitionTimingFunction: "cubic-bezier(0.1, 0.7, 1.0, 0.1)"
};

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "landing.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 10000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        id="profile-img"
        style={styles}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
);
export default Image;
