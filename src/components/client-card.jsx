import { styles } from "../util/style"

const ClientCard = ({ logo }) => {
  return (
    <div className={`flex ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
        <img src={logo} alt="client-logo" className="sm:w-[192px] w-[100px] h-[42px] object-contain"/>
    </div>
  )
}

export default ClientCard