export default async function DashboardHome() {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return (
    <main className="container flex-1 self-center">
      <p className="text-center text-4xl">Dashboard</p>
    </main>
  )
}
