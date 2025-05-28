import Layout from "@/components/Layout"
import Link from "next/link"

export default function index() {
  return (
    <Layout>
      <div className='container-section bg-myorange'>
        <Link href={"/products/1"}>Producto #1</Link>
        <Link href={"/products/2"}>Producto #2</Link>
        <Link href={"/products/3"}>Producto #3</Link>
        <Link href={"/products/4"}>Producto #4</Link>
      </div>
    </Layout>
  )
}
