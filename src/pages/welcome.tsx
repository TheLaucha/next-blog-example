import { useRouter } from "next/router"

export default function Welcome() {
  const router = useRouter()
  const { username } = router.query

  return (
    <div>
      <h1>Bienvenido {username}</h1>
    </div>
  )
}
