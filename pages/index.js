import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Dashboard from '../component/Dashboard'
import Login from '../component/Login'
import RegistrationPage from '../component/RegistrationPage'
import LoginPage from './login'

export default function Home() {
  return (
    <div>
      <RegistrationPage/>
      
      {/* <LoginPage/> */}
      {/* <Dashboard/> */}
    </div>
  )
}
