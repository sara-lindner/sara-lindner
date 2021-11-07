import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import PaintingsPreview from '../components/paintings-preview'

class PaintingsIndex extends React.Component {
  render() {
    const paintings = get(this, 'props.data.allContentfulBlogPost.nodes')

    return (
      <PaintingsPreview paintings={paintings} />
    )
  }
}

export default PaintingsIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulPainting {
      nodes {
        title
        year
        sold
        painting
      }
    }
  }
`