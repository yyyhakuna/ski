import About from "@/components/About";
const Banner = lazy(() => import("@/components/Banner"))
const Museum = lazy(() => import("@/components/Museum"));
import Mint from 'components/Mint'
// import Search from "@/components/Search";
import { useEffect, useState, lazy, Suspense, useRef } from "react";
const Home = () => {
  // const [Search, setSearch] = useState(null)
  const width = document.body.clientWidth
  const randomIndex = Math.floor(Math.random() * 2);
  const [show, setShow] = useState(() => {
    if (width < 767) {
      return true
    } else {
      return false
    }
  })
  const mintRef = useRef()
  const galleryRef = useRef()
  // const [inscriptions , setInscriptions] = useState(null)
  const aboutRef = useRef()
  useEffect(() => {
    if (!show) {
      const video = document.getElementById('video')
      video.addEventListener("ended", () => {
        setShow(() => true)
        // const observer = new IntersectionObserver(entries => {
        //   if (entries[0].isIntersecting) {
        //     import('components/Search').then(cmp => {
        //       setSearch(cmp.default)
        //       observer.disconnect();
        //     })
        //   }
        // })

        // observer.observe(document.getElementById('search'))
      })
      return (
        video.removeEventListener("ended", () => {
          setShow(() => true)
        }))
    }
  }, [])
  return (
    <>
      {show ?
        <div>
          <Suspense>
            <Banner
              mintRef={mintRef}
              galleryRef={galleryRef}
              aboutRef={aboutRef}
            />
            <div ref={mintRef}>
              <Mint />
            </div>
            <div ref={galleryRef}>
              <Museum />
            </div>
            {/* {Search ? <Search /> : 'loading'} */}
            {/* <Search /> */}
            {/* <Logo /> */}
            <div ref={aboutRef} id="search">
              <About />
            </div>
          </Suspense>
        </div>
        : <video id="video" src={"random" + randomIndex + ".mp4"} style={{ width: '100%', height: 'auto', }} autoPlay muted></video>
      }
    </>
  )
}

export default Home