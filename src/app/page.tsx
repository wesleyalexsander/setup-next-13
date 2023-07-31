'use client'

import Button from '@/modules/common/button'

export default function Home() {
  const apiCall = async () => {
    await fetch('/api', {
      method: 'POST',
      headers: {
        Authorization: 'usuarioautorizado',
      },
      body: JSON.stringify({ hello: 'world' }),
    })
  }

  return (
    <main className="container flex-1 self-center">
      <Button
        isLoading={true}
        className="mx-auto bg-emerald-600"
        onClick={apiCall}
      >
        API Call
      </Button>
    </main>
  )
}
