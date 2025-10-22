import * as React from "react"

// Shadow for page template: we don't use content/pages, so avoid exporting a GraphQL query
// to prevent Gatsby warnings about queries in non-page components.
export default function ShadowedPageTemplate() {
  return null
}

export const Head = () => null
