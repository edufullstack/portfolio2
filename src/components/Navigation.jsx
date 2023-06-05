import Link from 'next/link'

const links=[{
    label: 'Home',
    route: '/'
  },{
  label: 'About',
  route:'/about'
  }
  ]

const Navigation = () => {
  return ( 
      <header>
        <div>Navigation</div>
    <nav>
      <ul>
        {links.map(({route,label})=>(
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          )
        )}
      </ul>
    </nav>
  </header>
  )
}

export default Navigation