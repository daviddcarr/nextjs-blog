import React, { useRef } from "react"

import Link from "next/link"
import Head from "next/head"
// import Script from "next/script"
import Layout from "../../components/layout"
import styles from './first-post.module.scss'

export default function FirstPost() {

    // Not part of tutorial, just figuring out how to load in LottieFiles
    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    })

    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            {/* <Script
                src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`Script loaded correctly, LottiePlayer has been populated`)
                }
            /> */}
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>

            <lottie-player
                id="firstLottie"
                ref={ref}
                autoplay
                loop
                mode="normal"
                src="https://assets1.lottiefiles.com/packages/lf20_cSNnXm5euH.json"
                style={{ position: "absolute", height: "100vh", width: "100vw", top: "0", left: "0", zIndex: "0" }}
            ></lottie-player>

        </Layout>
    )
}