import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Layout/Header'
import Container from '../components/UI/Container'

const RootLayout: FC = () => {
  return (
    <>
      <Header />
      <main className="py-12">
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  )
}

export default RootLayout
