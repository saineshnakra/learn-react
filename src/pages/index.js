// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Gallery from './qcomps/gallery_props'
import {MyComp}  from './qcomps/firstcomp'
import Bios from "./qcomps/bios"
import TodoList from './qcomps/todos'
import  Profile  from './components/profile_props'
import PackingList from './qcomps/props_item'

export default function Home() {
  return (
    <div className={styles.main}>
        
        <MyComp />
        <Bios/>
        <Profile/>
        <TodoList/>
        <Gallery/>
        <PackingList/>
    </div>
  )
}
