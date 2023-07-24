import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>
        <Image 
          src="/team4/client/src/images/convi-logo-1.png"
          alt="Convi Logo"
          width={100}
          height={100}
        />
				<h1>CONVI</h1>
        <p>Your Gateway to Unforgettable Events!</p>
				<Link href="events">Events Dashboard</Link>

        <p>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
          
          <Link href="/profile">
            <a>Profile</a>
          </Link>
          
          <Link href="/login">
            <a>Login</a>
          </Link>
</p>
			</div>
    </main>
  )
};
