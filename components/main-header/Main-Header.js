import React from 'react'
import Link from 'next/link'
import logoImg from "@/assets/logo.png"
import classes from "./main-header.module.css"
import Image from 'next/image'
import MainHeaderBk from './Main-Header-Bk'

function MainHeader() {
  return (
    <>
    <MainHeaderBk />
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A plate with food" priority />NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
    
  )
}

export default MainHeader