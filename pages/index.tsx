import React from "react"
import { NextSeo } from "next-seo"
import { currentDayName } from "../component/date"
import { greeting } from "../component/greetings"
import Head from "next/head"
import Location from "../component/getLocation"
import Theme from "../component/theme"

export const date = new Date()
export default function Home() {
    return (
        <>
            <NextSeo
                title="Ahmed Saheed"
                description="Vestibule to my brain datasets"
                canonical="https://saheed.codes/"
                openGraph={{
                    url: "https://saheed.codes/",
                    title: "Ahmed Saheed",
                    description: "Vestibule to my brain datasets",
                }}
            />
            <Head>
                <meta charSet="UTF-8" />
                <title>Ahmed Saheed</title>
                <link rel="icon" type="image/png" href="/icon.png" />
            </Head>
            <body>
                <div className=" spacers mx-auto max-w-3xl space-y-5">
                    <div className="mx-auto max-w-2xl">
                        <br></br>
                        <h2 className="name third text-stone-100 font-hammersmith mb-4">
                            Ahmed Saheed
                            <a className="moveRight">
                                <Theme />
                            </a>{" "}
                        </h2>
                        <p className="text-stone-500">
                            <em>{greeting()}</em> Hope you're having a great {currentDayName()}
                        </p>
                    </div>

                    <p>

                                                <h3>
                                                <a href="/second-brain"> Digital garden</a> •{" "}
                                                    <a href="/second-brain/entries">Rambles</a> •{" "}
                                                    <a href="/books"> Books</a> • {" "}
                                                    <a href="/TIL"> TIL</a> 
                                                </h3>
                                                </p>

                    <article>
                        <p className="second">
                            You've come all the way from{" "}
                            <Location /> a very lovely place, what could the weather be like over there?
                            By the way, welcome to my digital garden.
                        </p>
                        <p className="third">
                            Finally, you made it to my tiny court yard on the web. I’m Ahmed! I enjoy
                            building on the web, wandering the web and tinkering with things I find meaningful to me.
                        </p>
                        <p className="third">
                            This vestibule doors opens onto my fine and maybe unfine datasets of my
                            brain. More like a library where i store valuable piece of computer
                            related information and document my personal growth. Currently, i am engaged in{" "}
                            <a target="_blank" href="https://griffith.ie">
                                college
                            </a>{" "}
                            activities alongside building <a  href="/projects">
                                projects
                            </a>{" "} and contributing to open source.
                            Also, I am having a great time being lost in{" "}
                            <a href="/second-brain/tolstoy">Tolstoy's</a> Literature while puzzling
                            human existence. Please feel free and navigate around, you're warmly
                            welcomed.
                        </p>

                        <h3 className="third">
                            Find me on{" "}
                            <a target="_blank" href="https://github.com/ahmedsaheed">
                                GitHub
                            </a>{" "}
                            and{" "}
                            <a target="_blank" href="https://twitter.com/helloahmed_">
                                Twitter
                            </a>
                            .
                        </h3>

                        <div className="pt-10 grey-text cent ">
                        <span className=" text-sm">
                        CC {" "}
                            <a
                                target="_blank"
                                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                                style={{ color: "inherit", borderBottom: "1px dotted" }}
                            >
                                BY-NC-SA 4.0
                            </a>{" "}
                            2021-{date.getFullYear()} © Ahmed Saheed
                        </span>
                    </div>
                    </article>
                </div>
            </body>
        </>
    )
}
