import Menu from "../../components/menu/menu"
import { homeBanner } from "../../constants"
import styles from "./home.module.css"

function Home() {




  return (
  <>
    <Menu/>
    <div className={styles.bannerContainer}>
      <img src={homeBanner} />
      <p>Vehicle Listings</p>
    </div>
  </>
  )
}

export default Home