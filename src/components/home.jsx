import { world, discount } from "../assets"
import { styles } from "../util/style"
import Button from "./button"

const Home = () => {
  return (
    <div id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
        {/* hero-text */}
        <div className={`flex-1 ${styles.flexStart} flex-col`}>
            <div className="flex flex-row items-center gap-2 py-[6px] px-4 bg-heroText-gradiant rounded-[10px] mb-2">
                <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
                <p className={`${styles.paragraph}`}><span className="text-white">20% </span>Chegirma <span className="text-white">1 Oylik</span> Xisob Uchun</p>
            </div>
            
            <div className="w-full">
                <h1 className={`${styles.heading1}`}>Yangi Avlod <br /> <span className="text-gradiant">To'lov Usuli</span></h1>
            </div>
            
            <p className={`${styles.paragraph} mt-5 max-w-[550px]`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dignissimos consequuntur deserunt earum assumenda blanditiis qui, fuga eius delectus officia.
            </p>
            <Button />
        </div>
        {/* hero-image */}
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img src={world} alt="" className="w-[100%] h-[100%] relative z-[5]" />
          <div className="absolute w-[50%] h-[45%] top-0 pink__gradient"></div>
          <div className="absolute w-[90%] h-[90%] rounded-full bottom-40 white__gradient"></div>
          <div className="absolute w-[60%] h-[65%] bottom-20 right-20 blue__gradient"></div>
        </div>
    </div>
  )
}

export default Home