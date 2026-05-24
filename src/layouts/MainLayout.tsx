import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

interface Props {
  children: React.ReactNode
}

function MainLayout({ children }: Props) {
  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  )
}

export default MainLayout