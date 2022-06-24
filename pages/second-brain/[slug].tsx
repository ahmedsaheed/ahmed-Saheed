import Head from "next/head"
import { GetStaticProps, GetStaticPaths } from "next"
import Link from "next/link"
import { BrainEntry } from "../../lib/api"
import { markdownToHtml } from "../../lib/mdToHtml"
import { getContentBySlug, getAllContent } from "../../lib/api"
import Layout from "../../component/layout"
import { NextSeo } from "next-seo"
const readingTime = require("reading-time")
import { format } from "date-fns"

import React from "react"

function BrainEntryPage({ brainEntry }: { brainEntry: BrainEntry }) {
    return (
        <>
            <NextSeo
                title={brainEntry.slug.charAt(0).toUpperCase() + brainEntry.slug.slice(1)}
                description="Ahmed Saheed's second brain'"
                canonical={`https://saheed.codes/second-brain/${brainEntry.slug}`}

                openGraph={{
                    url:`https://saheed.codes/second-brain/${brainEntry.slug}`,
                    title: `${brainEntry.slug.charAt(0).toUpperCase() + brainEntry.slug.slice(1)} | Ahmed Saheed` ,
                    description:`${brainEntry.content.substring(0, 100)+"..."}`,
                }}
            />
            <body>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link href="../styles/blog.css" rel="stylesheet" />
                    <title>
                        {brainEntry.slug.charAt(0).toUpperCase() + brainEntry.slug.slice(1)} | Ahmed
                        Saheed
                    </title>
                    <link rel="icon" type="image/x-icon" href="./favicon.ico" />
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
                        integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
                        crossOrigin="anonymous"
                    />
                    <script
                        defer
                        src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js"
                        integrity="sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4"
                        crossOrigin="anonymous"
                    ></script>
                    <script
                        defer
                        src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js"
                        integrity="sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa"
                        crossOrigin="anonymous"
                    ></script>
                </Head>

                <div className="post-title">
                    <h1 className="title">{brainEntry.title}</h1>
                    <p className="post-date">
                        {format(new Date(brainEntry.date), "MMM do, y")} |{" "}
                        {readingTime(brainEntry.content).minutes < 1
                            ? 1
                            : readingTime(brainEntry.content)
                                  .minutes.toString()
                                  .substring(0, 3)}{" "}
                        min read
                    </p>
                </div>
                <header className="mx-auto max-w-3xl space-y-5">
                    <article
                        className="prose"
                        dangerouslySetInnerHTML={{ __html: brainEntry.content }}
                    />

                    {!!brainEntry.backlinks.length && (
                        <div>
                            <br /> <hr />
                            <div className="prose rounded-lg border border-stone-800 text-stone-100 bg-opacity-20 bg-stone-800 p-8 mt-12">
                                <h2 className=" text-2xl font-light text-am-white">Backlinks</h2>
                                <div className="flex flex-wrap justify-between ">
                                    {brainEntry.backlinks.map((backlink) => (
                                        <Link
                                            key={backlink}
                                            href="/second-brain/[slug]"
                                            as={`/second-brain/${encodeURI(
                                                backlink.toLowerCase(),
                                            )}`}
                                        >
                                            <a className="aaa text-sm  text">
                                                {backlink.charAt(0).toUpperCase() +
                                                    backlink.slice(1)}
                                            </a>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </header>
                <br></br>
            </body>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const brainEntry = getContentBySlug("second-brain", params?.slug as string, [
        "slug",
        "content",
        "backlinks",
        "title",
        "description",
        "date",
    ])

    const content = await markdownToHtml(brainEntry.content || "")

    return {
        props: {
            brainEntry: {
                ...brainEntry,
                content,
            },
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const brainEntries = getAllContent("second-brain", ["slug"]) as BrainEntry[]

    return {
        paths: brainEntries.map(({ slug }) => {
            return {
                params: {
                    slug: slug.toLowerCase(),
                },
            }
        }),
        fallback: false,
    }
}

export default Layout(BrainEntryPage)
