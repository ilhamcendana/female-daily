import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { store, persistor } from '../store';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment >
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </PersistGate>
      </Provider>
    </React.Fragment>
  )
}

export default MyApp
