import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Outlet } from 'react-router'

export default function Default() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
