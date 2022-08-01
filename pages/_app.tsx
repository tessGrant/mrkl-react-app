import '../src/styles/globals.scss'
import type { AppProps } from 'next/app'
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

export default App
