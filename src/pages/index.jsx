import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import AppContext from "../AppContext"
import { useContext } from 'react';
import AdminAlert from '@/components/AdminAlert'

export default function Home() {
  const {showAlert, setShowAlert} = useContext(AppContext)

  console.log(showAlert)
  return (
    <>
      <Head>
        <title>Library Management App</title>
        <meta
          name="description"
          content="The best online library around!"
        />
      </Head>
      <Header />

      {/* if user just signed up */}
      {showAlert ? <AdminAlert setShowAlert={setShowAlert}/> : null}
      
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}
