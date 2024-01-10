import { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ModalContextProvider from './modal-context'

type ProvidersProps = {
  children: ReactNode
}

export const queryClient = new QueryClient()

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalContextProvider>{children}</ModalContextProvider>
    </QueryClientProvider>
  )
}

export default Providers
