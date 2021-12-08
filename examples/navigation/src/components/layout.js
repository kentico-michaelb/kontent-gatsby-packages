import { StaticQuery, graphql } from "gatsby";
import React, { useEffect } from "react"
import Menu from "./complex-menu"
import KontentSmartLink from '@kentico/kontent-smart-link'

const Layout = ({ children, title }) => {

  useEffect(() => {
    // This is just an example of SDK initialization inside ES6 module.
    // HTML markup should still contain all necessary data-attributes (e.g. .layout element).
    const kontentSmartLink = KontentSmartLink.initialize({
      queryParam: "enable-ksl-sdk"
    });
    return () => {
      kontentSmartLink.destroy();
    };
  });

  return (
    <StaticQuery
      query={graphql`
      {
        sitePlugin(name: { eq: "@kentico/gatsby-source-kontent" }) {
          pluginOptions {
            projectId
            languageCodenames
          }
        }
      }
    `}
      render={data => (
        <div
          data-kontent-project-id={data.sitePlugin.pluginOptions.projectId}
          data-kontent-language-codename={data.sitePlugin.pluginOptions.languageCodenames[0]}>
          <Menu />
          {title && (
            <header>
              <h1 data-kontent-element-codename="title">{title}</h1>
            </header>
          )}
          <main>{children}</main>
        </div >
      )}
    ></StaticQuery>
  )
}

export default Layout
