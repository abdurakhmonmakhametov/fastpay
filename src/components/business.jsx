import { features } from "../util/constatnts"
import { layout, styles } from "../util/style"
import Button from "./button"
import FeatureCard from "./feature-card"


const Business = () => {
  return (
    <section className={`${layout.section}`}>
        <div className={`${layout.sectionInfo}`}>
            <h2 className={`${styles.heading2}`}>
                Biznes rivojlantiring, <br className="hidden sm:block"/> pulni hal qilamiz. 
            </h2>
            <p className={`${styles.paragraph} mt-5 max-w-[550px]`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium minus et explicabo maiores laboriosam, quae omnis aperiam error? Hic, temporibus?
            </p>
            <Button />
        </div>
        
        <div className={`${layout.sectionImage} flex-col`}>
            {features.map((feature) => (
                <FeatureCard key={feature.id} icon={feature.icon} title={feature.title} content={feature.content} />
            ))}
        </div>
    </section>
  )
}

export default Business