import { ReactNode } from 'react'

export interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <>{children}</>
}
