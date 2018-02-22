import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Media from 'react-media'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import './index.css'
import '../styles/layout-override.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="RTDS"
      meta={[
        { name: "description", content: "Real Reviews No Bullshit" },
        { name: "keywords", content: "reviews, games" }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 980,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100%"
      }}
    >
      <Media query={{ maxWidth: 848 }}>
        {matches =>
          matches ? (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ flex: 1 }}>{children()}</div>
            </div>
          ) : (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ flex: 2.5, paddingRight: "30px" }}>
                {children()}
              </div>

<div style={{ flex: 1 }}>
  <h1>Random Articles</h1>
                <Sidebar
                  title="Random Article #1"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum lorem turpis, non fringilla lorem eleifend sit amet."
                />
                <Sidebar
                  title="Random Article #2"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum lorem turpis, non fringilla lorem eleifend sit amet."
                />
                <Sidebar
                  title="Random Article #3"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum lorem turpis, non fringilla lorem eleifend sit amet."
                />
              </div>
            </div>
          )
        }
      </Media>
    </div>
  </div>
);

  TemplateWrapper.propTypes = {children: PropTypes.func}
  export default TemplateWrapper
