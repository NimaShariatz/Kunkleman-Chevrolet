import Menu from "../../components/menu/menu"
import { homeBanner } from "../../constants"
import styles from "./home.module.css"
import { useEffect, useState } from "react"
import { getVehicles } from "../../api/vehicle"
import type { VehicleData } from "../../api/vehicle"



function Home() {

  const [vehicles, setVehicles] = useState<VehicleData[]>([])

  useEffect(() => {
    getVehicles().then(data => setVehicles(data))
  }, [])
    console.log(vehicles)

  return (
  <>
    <Menu/>
    <div className={styles.bannerContainer}>
      <img src={homeBanner} />
      <p>Vehicle Listings</p>
    </div>

    <div className={styles.userInputContainer}>
      {vehicles.map(v => (
        <div key={v.id}>
          <p>{v.year} {v.brand} {v.model}</p>
          <p>${v.price}</p>
        </div>
      ))}
    </div>


  </>
  )
}

export default Home