import { logo } from "../assets"
import { footerLinks, socialMedia } from "../util/constatnts"
import { styles } from "../util/style"

const Footer = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.paddingX} flex-col`}>
        <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
            <div className="flex flex-col justify-start flex-1 mr-10 sm:mt-0 mt-[50px]">
                <img src={logo} alt="logo" className="w-[250px] h-[72px] object-contain"/>
                <p className={`${styles.paragraph} mt-4 max-w-[350px]`}>
                    To'lovlarni oson, ishonchli va xafsiz qilishning yangi usuli
                </p>
            </div>
            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                {footerLinks.map((link) => (
                    <div key={link.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                        <h4 className="font-medium font-montserrat text-white text-[18px] leading-[27px]">
                            {link.title}
                        </h4>
                        <ul className="mt-4 list-none">
                            {link.links.map((item, index) => (
                                <li key={item.name} className={`font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite hover:text-secondary cursor-pointer ${index !== link.links.length - 1 ? 'mb-4' : 'mb-0'}`}>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        <div className="w-full flex justify-between md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
                <p className="font-montserrat font-normal text-[18px] leading-[27px] text-lightWhite">
                    &copy; {new Date().getFullYear()} | All rights reserved
                </p>
                <div className="flex flex-row items-center justify-center my-6 md:mt-0">
                    {socialMedia.map((social, index) => (
                        <img src={social.icon} alt={social.name} key={index} className={`w-[30px] h-[30px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} />
                    ))}
                </div>
        </div>
    </div>
  )
}

export default Footer