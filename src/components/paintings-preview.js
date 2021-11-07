import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import Tags from './tags'
import * as styles from './article-preview.module.css'

const PaintingsPreview = ({ paintings }) => {
  if (!paintings) return null
  if (!Array.isArray(paintings)) return null

  return (
    <Container>
        {painting.map((painting) => {
          return (
            <div>
              <GatsbyImage alt="" image={painting.painting} />
                <h2>{painting.title}</h2>
              <div>
                {painting.year}
              </div>
            </div>
          )
        })}
    </Container>
  )
}

export default PaintingsPreview