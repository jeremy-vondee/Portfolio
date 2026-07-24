import { HugeiconsIcon } from "@hugeicons/react"
import {
    WhatsappIcon,
    TwitterIcon,
    InstagramIcon,
    GithubIcon,
    Email,
} from "@hugeicons/core-free-icons"

const Contacts = () => {
    return (
        <section
            id="contacts"
            className="mx-auto max-w-6xl px-4 pt-12 sm:pt-16 md:pt-20 lg:pt-24">
            <div className="text-center mb-8 sm:mb-10">
                <h2 className="font-bold font-mono inline-block border-b-2 border-black dark:border-white pb-2 text-2xl sm:text-3xl">
                    Contacts
                </h2>
            </div>
            <div className="flex justify-around">
                <a
                    href="https://wa.me/15551234567"
                    target="_blank"
                    rel="noreferrer">
                    <div className="flex content-center items-center flex-col gap-4">
                        <HugeiconsIcon
                            icon={WhatsappIcon}
                            className="size-5 sm:size-6 md:size-7 lg:size-8"
                            color="currentColor"
                            strokeWidth={1.5}
                        />
                        <span className="hidden md:block text-sm md:text-base">
                            Whatsapp
                        </span>
                    </div>
                </a>
                <a href="https://wa.me/15551234567">
                    <div className="flex content-center items-center flex-col gap-4">
                        <HugeiconsIcon
                            icon={InstagramIcon}
                            className="size-5 sm:size-6 md:size-7 lg:size-8"
                            color="currentColor"
                            strokeWidth={1.5}
                        />
                        <span className="hidden md:block text-sm md:text-base">
                            Instagram
                        </span>
                    </div>
                </a>
                <a href="https://wa.me/15551234567">
                    <div className="flex content-center items-center flex-col gap-4">
                        <HugeiconsIcon
                            icon={TwitterIcon}
                            className="size-5 sm:size-6 md:size-7 lg:size-8"
                            color="currentColor"
                            strokeWidth={1.5}
                        />
                        <span className="hidden md:block text-sm md:text-base">
                            X
                        </span>
                    </div>
                </a>
                <a href="https://github.com/jeremy-vondee">
                    <div className="flex content-center items-center flex-col gap-4">
                        <HugeiconsIcon
                            icon={GithubIcon}
                            className="size-5 sm:size-6 md:size-7 lg:size-8"
                            color="currentColor"
                            strokeWidth={1.5}
                        />
                        <span className="hidden md:block text-sm md:text-base">
                            Github
                        </span>
                    </div>
                </a>
                <a href="mailto:jeremynarteyodonkor@gmail.com">
                    <div className="flex content-center items-center flex-col gap-4">
                        <HugeiconsIcon
                            icon={Email}
                            className="size-5 sm:size-6 md:size-7 lg:size-8"
                            color="currentColor"
                            strokeWidth={1.5}
                        />
                        <span className="hidden md:block text-sm md:text-base">
                            Gmail
                        </span>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Contacts
