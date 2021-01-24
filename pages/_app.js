import '../styles/globals.css'
import PageLayout from "../layout"

function MyApp({ Component, pageProps }) {
  return <PageLayout><Component {...pageProps} /></PageLayout>
}

export default MyApp
