import React from "react"
import Link from 'gatsby-link'
import styled from 'styled-components'


// This class should not be used for listing posts, but for chapter based Docs. See PostListing for that.
// You'll also need to add your chapters to siteConfig

class TableOfContents extends React.Component {
  buildNodes() {
    const {posts} = this.props
    const type = this.props.contentsType
    const postNodes = []
    posts.forEach(post => {
      if (post.node.frontmatter.type === type) {
        const postNode = {
          title: post.node.frontmatter.title,
          path: post.node.fields.slug,
          lessonNumber: post.node.frontmatter.lesson,
          chapter: post.node.frontmatter.chapter
        }
        postNodes.push(postNode)
      }
    })

    const postNodeChapters = [];
    postNodes.forEach(post => {
      if (postNodeChapters[post.chapter]) {
        postNodeChapters[post.chapter].push(post)
      } else {
        postNodeChapters[post.chapter] = [post]
      }
    })

    postNodeChapters.forEach(chapter => {
      chapter.sort((a, b) => a.lessonNumber > b.lessonNumber)
    })
    return postNodeChapters
  }

  nodeListItems() {
    const postNodeChapters = this.buildNodes()
    const listItems = []
    const chapterTitles = this.props.chapterTitles
    postNodeChapters.forEach((chapter, idx) => {
      const chapterLessons = []
      chapter.forEach(node => {
        chapterLessons.push(
          <LessonContainer>
            <Link to={node.path}>
              <li>
                <span>
                  <p>{node.chapter}.{node.lessonNumber} &nbsp;</p>
                  <h6>{node.title}</h6>
                </span>
              </li>
            </Link>
          </LessonContainer>
        )
      })
      listItems.push(
        <li className='chapter'>
          <h5 className='tocHeading'>
            {chapterTitles[idx].toUpperCase()}
          </h5>
          <ul className='chapterItems'>
            {chapterLessons}
          </ul>
        </li>
      )
    })
    return listItems
  }

  render() {
    return (
      <TableOfContentsContainer>
        <ul>
          {this.nodeListItems()}
        </ul>
      </TableOfContentsContainer>
    )
  }
}

const TableOfContentsContainer = styled.div`
  padding: ${props => props.theme.sitePadding};

  & > ul, .chapterItems {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  p, h6 {
    display: inline-block;
    font-weight: 200;
    margin: 0;
  }
  
  .tocHeading {
     font-weight: 200;
     color: ${props => props.theme.brand};
     margin-bottom: 10px;
  }
`

const LessonContainer = styled.div`
  h6, p {
    color: black;
    margin: 0;
    line-height: 1.5;
  }
  li {
    margin: 0;
  }
  &:hover {
    li {
      span {
        border-bottom: 1px solid black;
      }
    }
  }
`

export default TableOfContents

