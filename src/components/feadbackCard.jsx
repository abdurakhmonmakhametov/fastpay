import { quotes } from "../assets"

const FeadbackCard = ({feadback}) => {
  return (
    <div className={`flex justify-between flex-col rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card cursor-pointer`}>
        <img src={quotes} alt="" className="w-[42px] h-[27px] object-contain"/>
        <p className="font-normal font-montserrat text-[18px] leading-[32px] text-white my-10">{feadback.content}</p>

        <div className="flex flex-row items-center">
            <div className="w-[50px] h-[50px] flex justify-center items-center bg-black-gradient-2 rounded-full">
                <span className="text-[22px] font-semibold font-montserrat text-gradiant">{feadback.name.split(' ').map(c => c[0])}</span>
            </div>
            <div className="flex flex-col ml-4">
                <h4 className="font-montserrat font-semibold text-[20px] leading-[32px] text-white">{feadback.name}</h4>
                <p className="font-normal font-montserrat tetx-[16px] leading-[24px] text-lightWhite">{feadback.title}</p>
            </div>
        </div>
    </div>
  )
}

export default FeadbackCard