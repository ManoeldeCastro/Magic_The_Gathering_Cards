import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Outlet } from 'react-router-dom'

export function HomeLayout() {
  return (
    <>
      <Header />
      <div className='flex flex-1 flex-col bg-muted/30 p-8 pt-24'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
