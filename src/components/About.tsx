import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"

const About = () => {
    return (
        <section
            id="about"
            className="mx-auto max-w-6xl px-4 pt-20 sm:pt-28 md:pt-36 lg:pt-44">
            <div className="text-center mb-8 sm:mb-10">
                <h2 className="font-bold font-mono inline-block border-b-2 border-black dark:border-white pb-2 text-2xl sm:text-3xl">
                    About Me
                </h2>
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>About Me</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                I’m a self-taught junior frontend and UI/UX
                                developer with a strong interest in building
                                clean, responsive, and user-friendly digital
                                experiences. I enjoy combining design and
                                development to create interfaces that are both
                                visually appealing and practical, and I’m always
                                looking to improve my skills and learn new
                                technologies.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>What Drives Me</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                I enjoy solving problems, refining details, and
                                continuously improving my skills through real
                                projects and hands-on learning.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>What I Do</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                I bridge design and development to build
                                responsive interfaces that are clear,
                                functional, and visually consistent.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default About
