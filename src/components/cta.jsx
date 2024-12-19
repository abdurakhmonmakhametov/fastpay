import { styles } from "../util/style"
import Button from "./button"

const Cta = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className={`flex-1 flex flex-col`}>
        <h2 className={`${styles.heading2}`}>Xizmatlarni sinab k'orish!</h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque debitis, modi odio aliquid hic autem laboriosam ea sed tempora placeat?
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button/>
      </div>
    </div>
  )
}

export default Cta