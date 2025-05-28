import Layout from "@/components/Layout"
import { GetStaticPaths, GetStaticProps } from "next"

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export default function PostPage({ post }: { post: Post }) {
  if (!post) {
    return <p>Post not found</p>
  }
  return (
    <Layout>
      <div className='container-section bg-myorange'>
        <h1>Prueba</h1>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <small>created by user number: {post.userId}</small>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()

  const paths = posts.slice(0, 10).map((post: Post) => {
    return {
      params: { slug: post.id.toString() },
    }
  })

  return {
    paths,
    fallback: true,
    // Esto genera las paginas que no fueron generados en el build (getStaticPaths)
    // fallback: false, // Esto genera un 404 si no existe la pagina
    // fallback: "blocking", // Esto genera la pagina en el servidor y la guarda en cache para las siguientes peticiones
    // Si no utilizara el slice no haria falta.
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.slug}`)
  const post = await res.json()

  if (!post.id) {
    return {
      notFound: true, // Esto genera un 404 si no existe el post
    }
  }

  return {
    props: {
      post,
    },
  }
}
