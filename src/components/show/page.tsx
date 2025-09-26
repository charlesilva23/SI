import type { PropsWithChildren, ReactElement } from 'react'

interface ShowProps extends PropsWithChildren {
  when: boolean | undefined
  fallback?: ReactElement | null
}

export function Show({ children, when, fallback = null }: ShowProps) {
  return when ? children : fallback
}
