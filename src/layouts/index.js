import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { YMInitializer } from 'react-yandex-metrika';

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Итальянские продукты' },
        { name: 'keywords', content: 'итальянские продукты, продукты из италии' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '.2rem 1.0875rem .45rem',
        paddingTop: 0,
        color: 'black',
      }}
    >
      {children()}
      

      <YMInitializer accounts={[49113511]} version="2" />
    </div>
    
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
