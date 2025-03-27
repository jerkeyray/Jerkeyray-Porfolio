import { auth } from '@/auth';
import React from 'react'

const page = async () => {
  const session = await auth()
  if (!session) return <div>Not authenticated</div>

  return (
    <div>
      Welcome Boss
    </div>
  )
}

export default page