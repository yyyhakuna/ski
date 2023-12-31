import About from "@/components/About";
import Search from "@/components/Search";
const Banner = lazy(() => import("@/components/Banner"))
const Museum = lazy(() => import("@/components/Museum"));
import Mint from 'components/Mint'
import { useEffect, useState, lazy, Suspense, useRef } from "react";
const Home = () => {
  const width = document.body.clientWidth
  const randomIndex = Math.floor(Math.random() * 2);
  const [show, setShow] = useState(()=>{
    if(width<767){
      return true
    }else{
      return false
    }
  })
  const mintRef = useRef()
  const museumRef = useRef()
  // const [inscriptions , setInscriptions] = useState(null)
  const aboutRef = useRef()
  useEffect(() => {
    if(!show){
    const video = document.getElementById('video')
    video.addEventListener("ended", () => {
      setShow(() => true)
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
            mintRef={ mintRef}
            museumRef = {museumRef}
            aboutRef = {aboutRef}
            />
            <div ref={mintRef}>
              <Mint />
            </div>
            <div ref={museumRef}>
              <Museum />
            </div>
            <Search />
            {/* <Logo /> */}
          <div ref={aboutRef}>
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