import { useRouter } from "next/router"

export default function Login() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    router.push({
      pathname: "/welcome",
      query: { username: e.currentTarget.username.value },
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 items-center justify-center min-h-screen'
    >
      <input type='text' name='username' placeholder='@username' required />
      <button type='submit'>Login</button>
    </form>
  )
}
