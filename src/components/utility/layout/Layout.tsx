import componentsMeta from "../../../data/componentsMeta"
import ComponentsList from "../componentsList/ComponentsList"
import DocPage from "../docPage/DocPage"
import styles from './style.module.css';


const Layout = () => {

    return (
      <div className={styles.layout}>
        <div className={styles.content}>
        <ComponentsList componentsMeta={componentsMeta}/>
        <DocPage/>
       </div>
      </div>
    )
  }
  
  export default Layout
  