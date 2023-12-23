import About from "@/components/About";
const Banner = lazy(()=>import("@/components/Banner"))
const Museum = lazy(() => import("@/components/Museum"));
import Logo from '@/components/ui/Logo'
import Mint from 'components/Mint'
import { useEffect, useState, lazy, Suspense} from "react";
const Home = () => {
  const randomIndex = Math.floor(Math.random() * 2);
  const[show, setShow] = useState(false)
  useEffect(() => {
    const video = document.getElementById('video')
    video.addEventListener("ended", ()=> {
      setShow(()=>true)
    })
    document.addEventListener('DOMContentLoaded', () => {
      console.log('bbb');
    });
    return(
      video.removeEventListener("ended", ()=> {
        setShow(()=>true)
      }))
  },[])
  return (
    <>
      {show ?
        <div>
          <Suspense>
            <Banner />
            <Mint />
            <Museum />
          </Suspense>
          <Logo />
          <About />
        </div>
        : <video id="video" src={"random" + randomIndex + ".mp4"} style={{width:'100%' , height:'auto' , }} autoPlay muted></video>
      }
    </>
  )
}

export default Home