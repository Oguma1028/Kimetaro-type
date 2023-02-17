import { Header } from '../header'
import { Footer } from '../footer'

type LayoutProps = {
  children: React.ReactNode
}

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
