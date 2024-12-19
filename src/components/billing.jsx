import { appstore, billing, googleplay } from "../assets"
import { layout, styles } from "../util/style"

const Billing = () => {
  return (
    <section id="features" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImageReverse}`}>
        <img src={billing} alt="bill" className="w-[100%] h-[100%] relative z-[5]" />
      </div>
      <div className={`${layout.sectionInfo} relative`}>
        <h2 className={`${styles.heading2}`}>Hisob kitob va fakturialni <br className="hidden sm:block"/> osongina boshqaring.</h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium autem soluta ab vel, esse unde quae ipsam voluptates dignissimos eos.
        </p>
        <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
          <img src={googleplay} alt="googleplay" className='w-[129px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={appstore} alt="appstore" className='w-[129px] h-[42px] object-contain mr-5 cursor-pointer' />
        </div>

        <div className="absolute w-[50%] h-[45%] top-0 pink__gradient"></div>
          <div className="absolute w-[90%] h-[90%] rounded-full bottom-40 white__gradient"></div>
          <div className="absolute w-[60%] h-[65%] bottom-20 right-20 blue__gradient"></div>
      </div>
    </section>
  )
}

export default Billing