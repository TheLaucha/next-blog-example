import Head from "next/head"
import styles from "@/styles/Layout.module.css"
import Image from "next/image"
import Link from "next/link"

interface LayoutProps {
  children: React.ReactNode
  title: string
  description: string
  home?: boolean
}

const username = "your_username"

export default function Layout({ children, title, description, home }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <nav className='flex flex-row gap-4 items-center bg-myblue text-mywhite px-8 py-4'>
        <Link href={"/contact"}>Contacto</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/blog"}>Blog</Link>
      </nav>
      <main className={styles.main}>
        {home ? (
          <div className={"container-section flex flex-col items-center"}>
            <Image src='/avatar.jpg' alt='Logo' width={300} height={300} />
            <h1 className={styles.title}>{username}</h1>
          </div>
        ) : (
          <div className={"container-section flex flex-col items-center"}>
            <Image src='/avatar.jpg' alt='Logo' width={100} height={100} />
            <h3 className={styles.title}>{username}</h3>
          </div>
        )}
        {children}
      </main>
      <footer className='container-section bg-myblue text-mywhite px-8 py-4'>
        {!home && <Link href={"/"}>Volver al inicio</Link>}
      </footer>
    </div>
  )
}

Layout.defaultProps = {
  title: "Default Title",
  description: "Default Description",
}
