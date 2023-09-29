import componentsMeta from "../../../data/componentsMeta";
import ComponentsList from "../componentsList/ComponentsList";
import DocPage from "../docPage/DocPage";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./style.module.css";

const Layout = () => {
  let location = useLocation();

  useEffect(() => {
    // Google Analytics
    console.log("location is ");
    console.log(location);
  }, [location]);

  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <div>
          <Link to={"/"} key={"home"}>
            <span>home</span>
          </Link>
          <hr className={styles.horizontalDivider}/>
          <ComponentsList componentsMeta={componentsMeta} />
        </div>
        <DocPage currentPage={location.pathname.replace(/[^a-zA-Z]/g, "")} />
      </div>
    </div>
  );
};

export default Layout;
