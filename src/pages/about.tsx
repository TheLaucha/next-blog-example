import Layout from "@/components/Layout"

export default function about() {
  return (
    <Layout>
      <div className='container-section bg-myorange'>
        <h1 className='text-3xl font-bold underline'>About</h1>
        <p className='text-lg'>This is the about page.</p>
        <p className='text-lg'>You can add more information here.</p>
      </div>
    </Layout>
  )
}
