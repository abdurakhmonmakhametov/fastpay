import { card } from "../assets"
import { styles, layout } from "../util/style"

const Contract = () => {
  return (
    <section id="product" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Bir necha oson qadamda <br className="hidden md:block"/> kantrakt tuzish.
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut rem repellat deserunt iure consectetur eius suscipit sed exercitationem unde ratione?
        </p>
      </div>
      <div className={`${layout.sectionImage}`}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  )
}

export default Contract