import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className='head'
    style={{
      // background: 'white',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '5.45rem 1.0875rem',
        textAlign: 'center',
        
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '70px'
          }}
        >
          {siteTitle}
          <br />
          Продукты из Италии
        </Link>
        
      </h1>
    </div>
  </div>
)

export default Header
