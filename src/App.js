import React from "react"
import NavBar from "./components/NavBar/NavBar"
import SideBar from "./components/SideBar/SideBar";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import styles from "./App.module.css"
import ProductFilter from "./components/ProductFilter/ProductFilter";
import ProductSearchBar from "./components/ProductSearchBar/ProductSearchBar"
import ProductGrid from "./components/ProductGrid/ProductGrid";
import products from "./data"


class App extends React.Component
{
  state = {
      searchText: "",
      priceRange: "all"
  }

  searchTextHandler = (e)=>{
      this.setState({searchText: e.target.value})
  }
  priceChangeHandler = (e) =>{
      this.setState({priceRange: e.target.value})
  }

  render() {
      let FilteredProducts = products.filter(product =>  {
              return product.name.includes(this.state.searchText)
          }
      )
      if (this.state.priceRange !== "all"){
          FilteredProducts = FilteredProducts.filter(product => {
              if (this.state.priceRange === "less than 10"){
                  return product.price <= 10
              }else if(this.state.priceRange === "between 10 and 100"){
                  return product.price > 10 && product.price <= 100
              }else if(this.state.priceRange === "between 100 and 500"){
                  return product.price > 100 && product.price <= 500
              }else{
                  return product.price > 500
              }
          })
      }

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
                    <ProductFilter products={products} priceRange={this.state.priceRange}
                                   changePriceRange={this.priceChangeHandler}
                    />
                    <section>
                        <ProductSearchBar searchText={this.state.searchText} changeSearchText={this.searchTextHandler}/>
                        <ProductGrid products={FilteredProducts} />
                    </section>
                </section>
            </main>
            <button className={styles["buy__btn"]}>buy now</button>
        </div>
    )
  }
}

export default App;
