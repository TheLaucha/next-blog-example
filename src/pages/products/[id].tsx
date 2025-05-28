import Layout from "@/components/Layout"
import { useRouter } from "next/router"

export default function Product() {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <div className='container-section bg-myorange'>
        <h1>Producto: {id}</h1>
        <p>Detalles del producto {id}</p>
        <button
          className='border bg-mywhitegray py-2 px-4 w-2/12 cursor-pointer hover:bg-mywhite'
          onClick={() => router.push("/products")}
        >
          Volver
        </button>
      </div>
      <div className='container-section bg-myorange'>
        <h1>Producto: {id}</h1>
        <p>Detalles del producto {id}</p>
        <button
          className='border bg-mywhitegray py-2 px-4 w-2/12 cursor-pointer hover:bg-mywhite'
          onClick={() => router.push("/products")}
        >
          Volver
        </button>
      </div>
    </Layout>
  )
}
