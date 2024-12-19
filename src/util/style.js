export const styles = {
    paddingX: 'sm:px-16 px-6',
    paddingY: 'sm:py-16 py-6',
    marginX: 'sm:mx-16 mx-6',
    marginY: 'sm:my-16 my-6',
    padding: 'sm:px-16 px-6 sm:py-12 py-4',
    flexCenter: 'flex justify-center items-center',
    flexStart: 'flex justify-start items-start',
    paragraph: 'font-montserrat font-normal text-lightWhite text-[18px] leading-[30.8px]',
    heading1: 'font-montserrat font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px] text-white',
    heading2: 'font-montserrat font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[64px] text-white',
}

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
    sectionInfo: `flex-1 flex-col flex justify-center md:mr-10 mr-0`,
    sectionImage: `flex-1 ${styles.flexCenter} md:ml-10 ml-0 relative md:mt-0 mt-10`,
    sectionImageReverse: `flex-1 ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`
}