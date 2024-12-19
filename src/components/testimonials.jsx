import { feadbacks } from "../util/constatnts"
import { styles } from "../util/style"
import FeadbackCard from "./feadbackCard"

const Testimonials = () => {
  return (
    <div id="clients" className={`${styles.paddingX} ${styles.flexCenter} flex-col relative`}>
        <div className={`absolute h-[60%] w-[60%] right-[50%] raounded-full blue__gradient bottom-40`}>
        </div>

        <div className="relative flex flex-col items-center justify-between w-full mb-6 md:flex-row sm:mb-16 z-[1]">
            <h2 className={`${styles.heading2}`}>Odamlar biz haqimizda qanday fikirda</h2>
            <div className="flex justify-end w-full mt-6 md:mt-0">
                <p className={`${styles.paragraph} text-left text-end max-w-[550px]`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad distinctio repellat adipisci illum, voluptatem provident consequatur.
                </p>
            </div>
        </div>

        <div className="flex md:flex-nowrap flex-wrap justify-center sm:justify-start w-full relative z-[1]">
            {feadbacks.map((feadback) => (
                <FeadbackCard key={feadback.id} feadback={feadback} />
            ))}
        </div>
    </div>
  )
}

export default Testimonials