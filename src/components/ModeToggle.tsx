import { HugeiconsIcon } from "@hugeicons/react"
import {
    Sun01Icon,
    Moon02Icon,
    Settings01Icon,
    CheckmarkCircle01Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from "react"

type Theme = "light" | "dark" | "system"

export function ModeToggle() {
    const [theme, setThemeState] = React.useState<Theme>("light")

    React.useEffect(() => {
        const saved = localStorage.getItem("theme") as Theme | null
        const initial: Theme =
            saved ??
            (document.documentElement.classList.contains("dark")
                ? "dark"
                : "light")
        setThemeState(initial)
    }, [])

    React.useEffect(() => {
        const applyTheme = (value: Theme) => {
            const isDark =
                value === "dark" ||
                (value === "system" &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)

            document.documentElement.classList.toggle("dark", isDark)
        }

        applyTheme(theme)
        localStorage.setItem("theme", theme)

        if (theme !== "system") return

        const mq = window.matchMedia("(prefers-color-scheme: dark)")
        const onChange = () => applyTheme("system")
        mq.addEventListener("change", onChange)

        return () => mq.removeEventListener("change", onChange)
    }, [theme])

    const itemClass = (active: boolean) =>
        `flex items-center gap-2 ${active ? "bg-accent text-accent-foreground" : ""}`

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                    <HugeiconsIcon
                        icon={Sun01Icon}
                        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    />
                    <HugeiconsIcon
                        icon={Moon02Icon}
                        className="absolute left-1/2 top-1/2 h-[1.2rem] w-[1.2rem] -translate-x-1/2 -translate-y-1/2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="start"
                side="bottom"
                className="mt-5"
                onCloseAutoFocus={(e) => e.preventDefault()}>
                <DropdownMenuItem
                    onClick={() => setThemeState("light")}
                    className={itemClass(theme === "light")}>
                    <HugeiconsIcon
                        icon={Sun01Icon}
                        className="h-[1.2rem] w-[1.2rem]"
                    />
                    <span>Light</span>
                    {theme === "light" && (
                        <HugeiconsIcon
                            icon={CheckmarkCircle01Icon}
                            className="ml-auto h-4 w-4"
                        />
                    )}
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={() => setThemeState("dark")}
                    className={itemClass(theme === "dark")}>
                    <HugeiconsIcon
                        icon={Moon02Icon}
                        className="h-[1.2rem] w-[1.2rem]"
                    />
                    <span>Dark</span>
                    {theme === "dark" && (
                        <HugeiconsIcon
                            icon={CheckmarkCircle01Icon}
                            className="ml-auto h-4 w-4"
                        />
                    )}
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={() => setThemeState("system")}
                    className={itemClass(theme === "system")}>
                    <HugeiconsIcon
                        icon={Settings01Icon}
                        className="h-[1.2rem] w-[1.2rem]"
                    />
                    <span>System</span>
                    {theme === "system" && (
                        <HugeiconsIcon
                            icon={CheckmarkCircle01Icon}
                            className="ml-auto h-4 w-4"
                        />
                    )}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
