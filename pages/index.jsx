import Banner from "@/components/Banner";
import Museum from "@/components/Museum"
import Ski0 from "components/ski/Ski0"
import Ski1 from "components/ski/Ski1"
import Ski2 from "components/ski/Ski2"
import { Loader } from '@react-three/drei'
import Ski3 from "components/ski/Ski3"
const Home = () => {
  return(
    <>
        <Banner />
        <Museum />
      <Loader/>
        {/* <Ski0/>
        <Ski1/>
        <Ski2/> */}
        {/* <Ski3/> */}
    </>
  )
}

export default Home