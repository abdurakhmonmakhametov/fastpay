const FeatureCard = ( {id, icon, title, content} ) => {
  return (
    <div className="flex-1 p-6 flex rounded-[20px] flex-row cursor-pointer" key={id}>
        <div className="w-[64px] h-[64px] rounded-full bg-gradiant">
            <img src={icon} alt="icon" className="w-[100%] h-[100%] object-contain drop-shadow-[0_15px_15px_rgb(31,174,255,0.15)]" />
        </div> 
        
        <div className="flex flex-col flex-1 ml-3">
            <h4 className="font-montserrat font-semibold text-white text-[18px] leading-[32px] mb-1">{title}</h4>
            <p className="font-normal font-montserrat text-lightWhite text-[16px] learing-[20px]">{content}</p>
        </div>
    </div>
  )
}

export default FeatureCard