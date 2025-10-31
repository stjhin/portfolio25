/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"

const Footer = () => (
  <footer sx={{ variant: "layout.footer" }}>
    <div
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: ["column", "row"],
        variant: "dividers.top",
        gap: 3,
      }}
    >
      <div>Copyright © All Rights Reserved.</div>
      <div>
         <a
          href="https://github.com/LekoArts/astro-theme-minimal-blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          Original Theme by LekoArts.
        </a>
        {" "}
        Design & Content by Silvialy Tjhin. {" "}
  
      </div>
    </div>
  </footer>
)

export default Footer