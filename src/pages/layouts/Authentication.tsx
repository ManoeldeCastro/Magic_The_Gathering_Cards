import { Outlet } from 'react-router-dom'

import { Footer } from '@/components/Footer'

export function AuthenticationLayout() {
  return (
    <>
      <div className='flex min-h-screen antialiased bg-img-bg'>
        <div className=' flex flex-col w-full items-center justify-center center'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}
