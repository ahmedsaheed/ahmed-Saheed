import React  from "react"
import Head from "next/head"
import { date } from "../pages/index"
import SearchArea from "./searchBar"

function Layout(PageComponent: any, title: string) {
    const PageComponentWithLayout = ({ ...pageProps }) => {
        return (
            <>
                <Head>
                <link rel="icon" type="image/x-icon" href="./favicon.ico" />
                </Head>

                <div  className="spacers py-32 mx-auto  px-6 md:px-0">
                    
                        <nav id="upper" className=" px-10 nav mx-auto max-w-4xl space-y-5" style={{paddingBottom: "10px"}}>
                        <h3 style={{display: "inline", lineHeight: "0"}}>{title}</h3> 
                     <div style={{flex: "auto"}}></div>

                        <div style={{display: "inline", float: "right"}}>
                        <SearchArea />
                        </div>

                      

                    </nav>

                    
                    <main className="mt-12">
                        <PageComponent {...pageProps} />
                    </main>
                    <div className="pt-10 grey-text cent">
                        <span className=" text-sm">
                            CC{" "}
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
                    <br/>
                </div>
            </>
        )
    }

    return PageComponentWithLayout
}

export default Layout
