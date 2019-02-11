import React from 'react'

const NewArticle = ( props ) => (
    <div>
      <h3>Article Slug: {props.match.params.art}</h3>
    </div>
  )

export default NewArticle;
