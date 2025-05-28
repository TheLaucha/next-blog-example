import Layout from "@/components/Layout"
import Link from "next/link"

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export default function AllPosts({ data }: { data: Post[] }) {
  return (
    <Layout>
      <div className='container-section bg-myorange'>
        <h1>Blog</h1>
        <ul className='flex flex-col gap-4'>
          {data.map((post) => (
            <li className='border-2 p-2 flex flex-col items-start' key={post.id}>
              <Link href={`/blog/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
