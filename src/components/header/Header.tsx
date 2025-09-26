'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"

interface Header {
    navClassName?: string
}

export default function Header({ navClassName }: Header) {
    return (
        <nav className="w-full bg-blue-200">
            <div className={cn('flex justify-between px-10', navClassName)}>
                <Link href={'/home'}>Home</Link>
                <Link href={'/login'}>Login</Link>
            </div>
        </nav>
    )
}