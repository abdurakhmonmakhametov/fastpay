import React, { Fragment } from 'react'
import { styles } from './util/style'
import { Home, Statistics, Navbar, Billing, Contract, Cta, Testimonials, Clients, Footer } from './components'
import Business from './components/business'

const App = () => {
  return (
    <Fragment>
      <header className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className='container'>
          <Navbar />
        </div>
      </header>
      <main>
        <section className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className='container'>
            <Home />
          </div>
        </section>
        <section className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className='container'>
            <Statistics />
            <Contract />
            <Billing />
            <Business />
            <Testimonials />
            <Clients />
            <Cta />
            <Footer />
          </div>
        </section>
      </main>
    </Fragment>
  )
}

export default App