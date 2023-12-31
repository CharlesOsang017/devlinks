import { theme } from '@/chakra/theme'
import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
     <Layout>
     <Component {...pageProps} />
     </Layout>
    </ChakraProvider>
  )
}
