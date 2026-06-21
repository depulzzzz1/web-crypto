
"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check for auth or redirect to splash
    router.push('/splash');
  }, [router]);

  return (
    <div className="min-h-screen bg-black" />
  )
}
