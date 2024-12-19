import { styles } from '../util/style'
import { clients } from '../util/constatnts'
import ClientCard from './client-card'

const Clients = () => {
  return (
    <div className={`${styles.flexCenter} my-6 pt-12`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {clients.map(client => (
                <ClientCard key={client.id} logo={client.image} />
            ))}
        </div>
    </div>
  )
}

export default Clients