import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/components/header.module.scss"

export default function Header(props) {
  return (
    <header
      className={`${headerStyles.header} ${props.page === 'info' &&
        headerStyles.info_page}`}
    >
      <nav
        className={headerStyles.header__nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link to="/">
          <h1>{props.title}</h1>
        </Link>
        <div>
          <h1>
            <LinkWithClose currentPage={props.page} linkLabel="la mia mission" pageName="themission" url="/la-mia-mission" />
          </h1>
          <h1>
            <LinkWithClose currentPage={props.page} linkLabel="la creativa" pageName="thecreative" url="/la-creativa" />
          </h1>
          <h1>
            <LinkWithClose currentPage={props.page} linkLabel="contattami" pageName="contact" url="/contattami" />
          </h1>
        </div>
      </nav>
    </header>
  )
}

function LinkWithClose({ currentPage, linkLabel, pageName, url }) {
  return  <Link
    to={
      currentPage === pageName
        ? "/"
        : url
    }
    activeClassName={headerStyles.navItemActive}
  >
    {currentPage === pageName
      ? "close"
      : linkLabel}
  </Link>
}