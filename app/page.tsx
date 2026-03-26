import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { TodoList } from '@/components/todo-list'

export default async function Page() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Welcome {user.email}
      </h1>

      <TodoList />
    </div>
  )
}
