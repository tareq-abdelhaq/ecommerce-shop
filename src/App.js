import React from "react"
import NavBar from "./components/NavBar/NavBar"
import SideBar from "./components/SideBar/SideBar";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import styles from "./App.module.css"
import ProductFilter from "./components/ProductFilter/ProductFilter";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import products from "./data"


class App extends React.Component
{

  render() {

    return(
        <div>
            <NavBar />
            <SideBar />
            <main className={styles["container"]}>
                <header className={styles["main__header"]}>
                    <div className={styles["header__path"]}>
                        <h2>shop</h2>
                        <ol>
                            <li>
                                <a href="#">
                                    <HomeOutlinedIcon style={{color: "#5e50ee",fontSize: "2rem"}}/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <ChevronRightOutlinedIcon style={{fontSize: "2rem"}}/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className={styles["active"]}>
                                    eCommerce
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <ChevronRightOutlinedIcon style={{fontSize: "2rem"}}/>
                                </a>
                            </li>
                            <li>
                                shop
                            </li>
                        </ol>
                    </div>
                    <button className={styles["header__settings"]}>
                        <SettingsOutlinedIcon />
                    </button>
                </header>
                <section className={styles["products__section"]}>
                    <ProductFilter products={products}/>
                    <ProductGrid products={products}/>
                </section>

            </main>
            <button className={styles["buy__btn"]}>buy now</button>
        </div>
    )
  }
}

export default App;
