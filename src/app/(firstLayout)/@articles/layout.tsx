import Link from 'next/link'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Link href="/page-views">Page Views</Link>
        <Link href="/visitiors">Visitors</Link>
      </nav>
      <div>{children}</div>
    </>
  )
}