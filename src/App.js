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
      priceRange: "allPrices",
      category: "allCategories",
      brand: "allBrands",
      displayProducts: "grid",
      darkTheme: false,
      sort: "feature",
      currentPage: 1
  }

  searchTextHandler = (e)=>{
      this.setState({searchText: e.target.value})
  }
  priceChangeHandler = (e) =>{
      this.setState({priceRange: e.target.value})
  }
  changeCategoryHandler = (e) =>{
      this.setState({category: e.target.value})
  }
  changeBrandHandler = (e) =>{
      this.setState({brand: e.target.value})
  }
  changeProductsDisplayHandler = (e) => {
      this.setState({displayProducts: e.target.value === "grid" ? "grid" : "list"})
  }
  toggleTheme = () => {
      this.setState({darkTheme: !this.state.darkTheme})
  }
  changeSortHandler = (e) => {
      this.setState({sort: e.target.value})
  }
  changeCurrentPageHandler = (pageNumber) => {
      this.setState({currentPage: pageNumber})
  }
  render() {
      let filteredProducts = [...products];
      // search filter
      if (this.state.searchText !== ""){
          filteredProducts = products.filter(product =>  {
                  return product.name.toLowerCase().includes(this.state.searchText.toLowerCase())
              }
          )
      }

      // price filter
      if (this.state.priceRange !== "allPrices"){
          filteredProducts = filteredProducts.filter(product => {
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
      // category filter
      if (this.state.category !== "allCategories"){
          filteredProducts = filteredProducts.filter(product => product.category === this.state.category)
      }
      // brand filter
      if (this.state.brand !== "allBrands"){
          filteredProducts = filteredProducts.filter(product => product.brand === this.state.brand)
      }
      // sort
      if (this.state.sort !== "feature"){
          if (this.state.sort === "lowest"){
              filteredProducts = filteredProducts.sort((product1,product2) => product1.price - product2.price)
          }else{
              filteredProducts = filteredProducts.sort((product1,product2) => product2.price - product1.price)
          }
      }
      const resultsCount = filteredProducts.length;
      // paginate
      const productsPerPage = 9;
      const indexOfLastProduct = this.state.currentPage * productsPerPage;
      const indexOfFirstProduct =indexOfLastProduct - productsPerPage;
      filteredProducts = filteredProducts.slice(indexOfFirstProduct,indexOfLastProduct)

    return(
        <div className={this.state.darkTheme ? `${styles["body__wrapper"]} ${styles["dark"]}`
            : `${styles["body__wrapper"]}`}
        >
            <NavBar darkTheme={this.state.darkTheme} changeTheme={this.toggleTheme}/>
            <SideBar darkTheme={this.state.darkTheme}/>
            <main className={styles["container"]}>
                <header className={styles["main__header"]}>
                    <div className={this.state.darkTheme ? `${styles["header__path"]} ${styles["dark"]}` : `${styles["header__path"]}`}>
                        <h2>shop</h2>
                        <ol>
                            <li>
                                <a href="#">
                                    <HomeOutlinedIcon style={{color: "#5e50ee",fontSize: "2rem"}}/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <ChevronRightOutlinedIcon style={{fontSize: "2rem", color: this.state.darkTheme ? "#b4b7bd" : "#6e6b7b"}}/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className={styles["active"]}>
                                    eCommerce
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <ChevronRightOutlinedIcon style={{fontSize: "2rem", color: this.state.darkTheme ? "#b4b7bd" : "#6e6b7b"}}/>
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
                                   category={this.state.category}
                                   changeCategory={this.changeCategoryHandler}
                                   brand={this.state.brand}
                                   changeBrand={this.changeBrandHandler}
                                   dark={this.state.darkTheme}
                    />
                    <section className={styles["products__sections__wrapper"]}>
                        <ProductSearchBar searchText={this.state.searchText}
                                          changeSearchText={this.searchTextHandler}
                                          displayProducts={this.state.displayProducts}
                                          changeProductsDisplay={this.changeProductsDisplayHandler}
                                          dark={this.state.darkTheme}
                                          products={filteredProducts}
                                          resultsCount={resultsCount}
                                          sort={this.state.sort}
                                          changeSort={this.changeSortHandler}
                        />
                        <ProductGrid products={filteredProducts}
                                     displayProducts={this.state.displayProducts}
                                     dark={this.state.darkTheme}
                                     resultsCount={resultsCount}
                                     productsPerPage={productsPerPage}
                                     currentPage={this.state.currentPage}
                                     changePage={this.changeCurrentPageHandler}
                        />
                    </section>
                </section>
            </main>
            <button className={styles["buy__btn"]}>buy now</button>
        </div>
    )
  }
}

export default App;
