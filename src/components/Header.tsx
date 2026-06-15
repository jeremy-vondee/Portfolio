"use client"
import { useState } from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HugeiconsIcon } from "@hugeicons/react"
import {
    Menu01Icon,
    User02Icon,
    SparklesIcon,
    Briefcase01Icon,
    Mail01Icon,
} from "@hugeicons/core-free-icons"

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed top-3 right-3 z-50">
            {/* Mobile Menu with Dropdown */}
            <div className="lg:hidden sm: bg-primary text-white rounded-md p-2">
                <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
                    <DropdownMenuTrigger asChild>
                        <button
                            type="button"
                            aria-label="Toggle menu"
                            className="w-8 h-8 p-0 flex items-center justify-center focus:outline-none focus:ring-0 transition-colors hover:bg-white/10 rounded bg-transparent border-none">
                            <HugeiconsIcon
                                icon={Menu01Icon}
                                size={24}
                                color="currentColor"
                            />
                        </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        className="w-48 mt-2"
                        align="end"
                        side="bottom"
                        onCloseAutoFocus={(e) => e.preventDefault()}>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                            <a
                                href="/about"
                                className="flex items-center gap-3 w-full py-1 px-2 rounded transition-colors hover:bg-white/10 focus:bg-white/10 outline-none">
                                <HugeiconsIcon
                                    icon={User02Icon}
                                    size={20}
                                    color="currentColor"
                                />
                                About
                            </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                            <a
                                href="/skills"
                                className="flex items-center gap-3 w-full py-1 px-2 rounded transition-colors hover:bg-white/10 focus:bg-white/10 outline-none">
                                <HugeiconsIcon
                                    icon={SparklesIcon}
                                    size={20}
                                    color="currentColor"
                                />
                                Skills
                            </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                            <a
                                href="/projects"
                                className="flex items-center gap-3 w-full py-1 px-2 rounded transition-colors hover:bg-white/10 focus:bg-white/10 outline-none">
                                <HugeiconsIcon
                                    icon={Briefcase01Icon}
                                    size={20}
                                    color="currentColor"
                                />
                                Projects
                            </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                            <a
                                href="/contacts"
                                className="flex items-center gap-3 w-full py-1 px-2 rounded transition-colors hover:bg-white/10 focus:bg-white/10 outline-none">
                                <HugeiconsIcon
                                    icon={Mail01Icon}
                                    size={20}
                                    color="currentColor"
                                />
                                Contacts
                            </a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex bg-primary text-white font-medium rounded-md px-4 py-3 gap-6 shadow-md">
                <a href="/about">About</a>
                <a href="/skills">Skills</a>
                <a href="/projects">Projects</a>
                <a href="/contacts">Contacts</a>
            </nav>
        </header>
    )
}

export default Header
