import React, { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">{/* Your header content */}</header>
      <main className="container mx-auto py-8">{children}</main>
      <footer className="bg-gray-200 py-4">{/* Your footer content */}</footer>
    </div>
  )
}

export default Layout
