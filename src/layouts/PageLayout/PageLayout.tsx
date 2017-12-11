import React from 'react'
import { IndexLink, Link } from 'react-router'
import './PageLayout.scss'

interface PageLayoutProps {
  children: React.ReactNode
}

export const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="container text-center">
    <h1>React Redux Starter Kit</h1>
    <IndexLink to="/" activeClassName="page-layout__nav-item--active">Home</IndexLink>
    {' · '}
    <Link to="/counter" activeClassName="page-layout__nav-item--active">Counter</Link>
    <div className="page-layout__viewport">
      {children}
    </div>
  </div>
)

export default PageLayout
