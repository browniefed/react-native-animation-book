import React from "react";
import Helmet from "react-helmet";
import styled from "react-emotion";
import { Follow } from "react-twitter-widgets";
import SEO from "../components/SEO/SEO";
import SiteHeader from "../components/Layout/Header";
import config from "../../data/SiteConfig";
import TableOfContents from "../components/Layout/TableOfContents";

export default class LessonTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.postBySlug;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <div>
        <Helmet>
          <title>{`${post.title}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <BodyGrid>
          <HeaderContainer>
            <SiteHeader location={this.props.location} />
          </HeaderContainer>
          <ToCContainer>
            <TableOfContents
              posts={this.props.data.allPostTitles.edges}
              contentsType="lesson"
              chapterTitles={config.toCChapters}
            />
          </ToCContainer>
          <BodyContainer>
            <div>
              <div>
                <a
                  style={{
                    marginTop: "40px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                    border: "1px solid #DDD",
                    textDecoration: "none",
                    minHeight: "150px",
                  }}
                  href="https://reactnativeanimations.com"
                  target="_blank"
                >
                  <img
                    style={{ height: "150px" }}
                    src="https://images.codedaily.io/courses/react_native_animations.png"
                    className
                  />
                  <div style={{ float: "left", marginLeft: 15 }}>
                    <h2
                      style={{
                        margin: 0,
                        color: "#333",
                        lineHeight: 1,
                        marginTop: 5,
                        marginBottom: 5,
                      }}
                    >
                      Master React Native Animations Course
                    </h2>
                    <p style={{ color: "#666", margin: 0 }}>
                      Go from beginner to mastery of React Native animations. We'll walk you through
                      each step from animating a simple box, understanding interpolation, all the
                      way up to building a shared element photo grid! Get it at
                      https://reactnativeanimations.com
                    </p>
                  </div>
                </a>
                <div style={{ marginTop: 15 }}>
                  <Follow username="browniefed" />
                  <Follow username="codedailyio" />
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            </div>
          </BodyContainer>
        </BodyGrid>
      </div>
    );
  }
}

const BodyGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 75px 1fr;
  grid-template-columns: 300px 1fr;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    height: inherit;
  }
`;

const BodyContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  overflow: scroll;
  justify-self: center;
  width: 100%;
  padding: ${props => props.theme.sitePadding};
  @media screen and (max-width: 600px) {
    order: 2;
  }

  & > div {
    max-width: ${props => props.theme.contentWidthLaptop};
    margin: auto;
  }

  & > h1 {
    color: ${props => props.theme.accentDark};
  }
`;

const HeaderContainer = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  z-index: 2;
  @media screen and (max-width: 600px) {
    order: 1;
  }
`;

const ToCContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background: ${props => props.theme.lightGrey};
  overflow: scroll;
  @media screen and (max-width: 600px) {
    order: 3;
    overflow: inherit;
  }
`;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query LessonBySlug($slug: String!) {
    allPostTitles: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            lesson
            chapter
            type
          }
          fields {
            slug
          }
        }
      }
    }
    postBySlug: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
      }
    }
  }
`;
