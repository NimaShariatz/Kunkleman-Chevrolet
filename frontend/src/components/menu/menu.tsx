import styles from "./menu.module.css"
import { turbine } from "../../constants"



function Menu() {




  return (
  <>
    <menu>
      <div className={styles.menu}>
        <div className={styles.titleContainer}>
          <p>Kunkleman</p>
          <img src={turbine}/>
          <p>Chevrolet</p>
        </div>
      </div>
    </menu>
  </>
  )
}

export default Menu