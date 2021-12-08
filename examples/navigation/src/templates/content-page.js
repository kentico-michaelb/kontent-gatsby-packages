import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const ComponentName = ({ data }) => {
  return (
    <Layout title={data.kontentItemContentPage.elements.title.value}>
      <div
        data-kontent-item-id={data.kontentItemContentPage.system.id}
        data-kontent-element-codename="content"
        dangerouslySetInnerHTML={{
          __html: data.kontentItemContentPage.elements.content.value,
        }}
      />
    </Layout>
  )
}

//alter system.codename filter if urlSlug is preferred
export const query = graphql`
  query ContentPageQuery($language: String!, $codename: String!) {
    kontentItemContentPage(
      preferred_language: { eq: $language }
      system: { codename: { eq: $codename } }
    ) {
      system {
        id
      }
      elements {
        title {
          value
        }
        content {
          value
        }
      }
    }
  }
`

export default ComponentName
