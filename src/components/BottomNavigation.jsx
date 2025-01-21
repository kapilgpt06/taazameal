"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, Search, Bell, User, SquareMenu, CirclePercent, CircleUserRound } from "lucide-react"

const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: SquareMenu, label: "Menu", href: "/menu" },
    { icon: CirclePercent, label: "Offers", href: "/offers" },
    { icon: CircleUserRound, label: "Contact Us", href: "/contact" },
]

export default function BottomNavigation() {
    const pathname = usePathname()

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-lg border-t border-gray-200 md:hidden">
            <ul className="flex justify-around items-center h-16">
                {navItems.map(({ icon: Icon, label, href }) => {
                    const isActive = pathname === href
                    return (
                        <li key={href}>
                            <Link href={href} className="flex flex-col items-center justify-center w-full h-full">
                                <div className={`${isActive ? 'bg-orange-500' : "first-letter:"} px-3 py-0.5 rounded-full`}>
                                    <Icon
                                        size={20}
                                        className={`${isActive ? 'text-white' : 'text-slate-700'}`}
                                    />
                                </div>
                                <span
                                    className={`text-xs mt-1 ${isActive ? "text-orange-500" : "text-gray-500"
                                        } transition-colors duration-200 font-bold`}
                                >
                                    {label}
                                </span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

