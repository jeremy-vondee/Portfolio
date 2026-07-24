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
import { ModeToggle } from "./ModeToggle"

const Header = () => {
    const [open, setOpen] = useState(false)

    const mobileLinkClass =
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 focus:bg-white/10 outline-none"

    return (
        <header className="fixed top-4 right-4 z-50">
            <div className="rounded-2xl border border-white/10 bg-primary/90 backdrop-blur-md">
                <div className="flex items-center gap-2 px-2 py-2">
                    <div className="lg:hidden">
                        <DropdownMenu
                            open={open}
                            onOpenChange={setOpen}
                            modal={false}>
                            <DropdownMenuTrigger asChild>
                                <button
                                    type="button"
                                    aria-label="Toggle menu"
                                    className=" flex h-10 w-10 items-center justify-center transition-colors hover:bg-white/10 focus:outline-none focus:ring-0">
                                    <HugeiconsIcon
                                        icon={Menu01Icon}
                                        size={22}
                                        color="currentColor"
                                    />
                                </button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent
                                className=" bg-white mr-1 mt-3 w-56 rounded-2xl p-2 shadow-2xl backdrop-blur-md"
                                align="end"
                                side="bottom"
                                onCloseAutoFocus={(e) => e.preventDefault()}>
                                <DropdownMenuItem
                                    onSelect={(e) => e.preventDefault()}
                                    className="p-0">
                                    <a
                                        href="#about"
                                        className={mobileLinkClass}>
                                        <HugeiconsIcon
                                            icon={User02Icon}
                                            size={18}
                                            color="currentColor"
                                        />
                                        About
                                    </a>
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                    onSelect={(e) => e.preventDefault()}
                                    className="p-0">
                                    <a
                                        href="#skills"
                                        className={mobileLinkClass}>
                                        <HugeiconsIcon
                                            icon={SparklesIcon}
                                            size={18}
                                            color="currentColor"
                                        />
                                        Skills
                                    </a>
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                    onSelect={(e) => e.preventDefault()}
                                    className="p-0">
                                    <a
                                        href="#projects"
                                        className={mobileLinkClass}>
                                        <HugeiconsIcon
                                            icon={Briefcase01Icon}
                                            size={18}
                                            color="currentColor"
                                        />
                                        Projects
                                    </a>
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                    onSelect={(e) => e.preventDefault()}
                                    className="p-0">
                                    <a
                                        href="#contacts"
                                        className={mobileLinkClass}>
                                        <HugeiconsIcon
                                            icon={Mail01Icon}
                                            size={18}
                                            color="currentColor"
                                        />
                                        Contacts
                                    </a>
                                </DropdownMenuItem>

                                <div className="mt-2 border-t border-zinc pt-2">
                                    <div className="px-2 py-1">
                                        <ModeToggle />
                                    </div>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <nav className="hidden items-center gap-1 rounded-xl px-2 py-1 lg:flex">
                        <a
                            href="#about"
                            className="text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10">
                            About
                        </a>
                        <a
                            href="#skills"
                            className="text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10">
                            Skills
                        </a>
                        <a
                            href="#projects"
                            className="text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10">
                            Projects
                        </a>
                        <a
                            href="#contacts"
                            className="text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10">
                            Contacts
                        </a>

                        <div className="ml-2 pl-2">
                            <ModeToggle />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
