import React, { useEffect } from 'react'
import Head from 'next/head'
import Navbar from './Navbar';
import Footer from './Footer';
;


export default function Layout({ children }) {

    function scrollFunction() {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-100px";
            }
            prevScrollpos = currentScrollPos;
        }
    }

    useEffect(() => {
        scrollFunction()
    }, [])


    return (
        <>
            <Head>
                <title>Gráficas Genil</title>
                <meta name="description" content="Gráficas Genil" />
                <link rel="icon" href="/logopequeño.png" />
            </Head>
            <Navbar />
            <div className="bg-cyan-500 w-full">
                <main>{children}</main>
            </div>
            <Footer />
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </>
    )
}
