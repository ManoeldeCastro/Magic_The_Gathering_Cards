import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavigationLinkProps = LinkProps

export function NavigationLink(props: NavigationLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className='flex items-center gap-1.5 text-sm font-medium text-black/65 hover:text-black data-[current=true]:text-black'
      {...props}
    />
  )
}
