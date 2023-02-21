type LayoutProps = {
  children: React.ReactNode
}

export const RootLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <p>これはRoot Layoutだよ</p>
      <main>{children}</main>
    </>
  )
}

export default RootLayout
