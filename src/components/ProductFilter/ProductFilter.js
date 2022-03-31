import React from "react"
import styles from "./ProductFilter.module.css"
import FilterTitle from "../FilterTitle/FilterTitle";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';


class ProductFilter extends React.Component
{
     getUniqueCategories = () => {
        const allCategories = this.props.products.map(product => product.category)
        const categories = [...(new Set(allCategories))]
        categories.unshift("allCategories");
        return  categories.map((category,index) => {
            return <li key={category}>
                    <label>
                        <input type="radio" name="category" value={category}
                               checked={this.props.category === category}
                               onChange={this.props.changeCategory}
                        />
                        <span className={styles["custom__radio"]} />
                        <span className={styles["label__text"]}>{index === 0 ? "All" : category}</span>
                    </label>
                   </li>
        })
    }

    getUniqueBrands = () =>{
        const allBrands = this.props.products.map(product => product.brand)
        const brands = [...(new Set(allBrands))]
        brands.unshift("allBrands")
        return  brands.map((brand,index) => {
            return  <li key={brand}>
                        <label>
                            <input type="radio" name="brand" value={brand}
                                   checked={this.props.brand === brand}
                                   onChange={this.props.changeBrand}
                            />
                            <span className={styles["custom__radio"]} />
                            <span className={styles["label__text"]}>{index === 0 ? "All" : brand}</span>
                        </label>
                    </li>
        })
    }


    render() {
        const categoryList = this.getUniqueCategories()
        const brandsList = this.getUniqueBrands()

        return(
            <>
            <aside className={`${styles["aside__products__filter"]} ${this.props.showProductFilter && styles["show"]}`}>
                <h6 className={styles["product__filters__title"]} style={{color: this.props.dark && "#d0d2d6"}}> filters </h6>
                <div className={this.props.dark ? `${styles["product__filters__wrapper"]} ${styles["dark"]}` : styles["product__filters__wrapper"]}>
                    <FilterTitle first dark={this.props.dark}>multi range</FilterTitle>
                    <ul className={styles["filter__section"]}>
                        <li>
                            <label>
                                <input type="radio" value= "allPrices" name="price"
                                       checked={this.props.priceRange === "allPrices"}
                                       onChange={this.props.changePriceRange}
                                />
                                <span className={styles["custom__radio"]} />
                                <span className={styles["label__text"]}>All</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" value="less than 10" name="price"
                                       checked={this.props.priceRange === "less than 10"}
                                       onChange={this.props.changePriceRange}
                                />
                                <span className={styles["custom__radio"]} />
                                <span className={styles["label__text"]}>&lt; 10</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" value="between 10 and 100" name="price"
                                       checked={this.props.priceRange === "between 10 and 100"}
                                       onChange={this.props.changePriceRange}
                                />
                                <span className={styles["custom__radio"]} />
                                <span className={styles["label__text"]}>$10 - $100</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" value= "between 100 and 500" name="price"
                                       checked={this.props.priceRange === "between 100 and 500"}
                                       onChange={this.props.changePriceRange}
                                />
                                <span className={styles["custom__radio"]} />
                                <span className={styles["label__text"]}>$100 - $500</span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" value="greater than 500" name="price"
                                       checked={this.props.priceRange === "greater than 500"}
                                       onChange={this.props.changePriceRange}
                                />
                                <span className={styles["custom__radio"]} />
                                <span className={styles["label__text"]}>&gt;= $500</span>
                            </label>
                        </li>
                    </ul>
                    <FilterTitle dark={this.props.dark}> price range </FilterTitle>
                    <div className={styles["slider"]}>
                        <div className={styles["min__value"]} style={{left: `${this.props.minPercentage}%`}}>
                            {this.props.minInputRange}
                        </div>
                        <div className={styles["progress"]}
                             style={{left: `${this.props.minPercentage}%`,right: `${this.props.maxPercentage}%`}}
                        />
                        <div className={styles["max__value"]} style={{right: `${this.props.maxPercentage}%`}}>
                            {this.props.maxInputRange}
                        </div>
                    </div>
                    <div className={styles["range__inputs"]}>
                        <input type="range" className={styles["min__range__input"]} min={this.props.minRange}
                               max={this.props.maxRange} value={this.props.minInputRange}
                               onChange={this.props.changePriceSlider} name="minInputRange"
                        />
                        <input type="range" className={styles["max__range__input"]} min={this.props.minRange}
                               max={this.props.maxRange} value={this.props.maxInputRange}
                               onChange={this.props.changePriceSlider} name="maxInputRange"
                        />
                    </div>
                    <FilterTitle dark={this.props.dark}>Categories</FilterTitle>
                    <ul className={styles["filter__section"]}>
                        {categoryList}
                    </ul>
                    <FilterTitle dark={this.props.dark}> brands </FilterTitle>
                    <ul className={styles["filter__section"]}>
                        {brandsList}
                    </ul>
                    <FilterTitle> ratings </FilterTitle>
                    <ul className={styles["products__ratings"]}>
                        <li className={styles["rating__row"]}>
                            <a>
                                <StarIcon style={{color: "#ff9f43", fontSize:"2rem"}}/><StarIcon style={{color: "#ff9f43", fontSize:"2rem"}}/><StarIcon style={{color: "#ff9f43", fontSize:"2rem"}}/><StarIcon style={{color: "#ff9f43", fontSize:"2rem"}}/><StarOutlineIcon style={{color: "#b9b9c3", fontSize:"2rem"}}/> <span>& up</span>
                            </a>
                            <span>160</span>
                        </li>
                        <li className={styles["rating__row"]}>
                            <a>
                                <StarIcon style={{color: "#ff9f43", fontSize:"2rem"}}/><StarIcon style={{color: "#ff9f43", fontSize:"2rem"}}/><StarIcon style={{color: "#ff9f43", fontSize:"2rem"}}/><StarOutlineIcon style={{color: "#b9b9c3", fontSize:"2rem"}}/><StarOutlineIcon style={{color: "#b9b9c3", fontSize:"2rem"}}/> <span>& up</span>
                            </a>
                            <span>176</span>
                        </li>
                        <li className={styles["rating__row"]}>
                            <a>
                                <StarIcon style={{color: "#ff9f43", fontSize:"2rem"}}/><StarIcon style={{color: "#ff9f43", fontSize:"2rem"}}/><StarOutlineIcon style={{color: "#b9b9c3", fontSize:"2rem"}}/><StarOutlineIcon style={{color: "#b9b9c3", fontSize:"2rem"}}/><StarOutlineIcon style={{color: "#b9b9c3", fontSize:"2rem"}}/> <span>& up</span>
                            </a>
                            <span>291</span>
                        </li>
                        <li className={styles["rating__row"]}>
                            <a>
                                <StarIcon style={{color: "#ff9f43", fontSize:"2rem"}}/><StarOutlineIcon style={{color: "#b9b9c3", fontSize:"2rem"}}/><StarOutlineIcon style={{color: "#b9b9c3", fontSize:"2rem"}}/><StarOutlineIcon style={{color: "#b9b9c3", fontSize:"2rem"}}/><StarOutlineIcon style={{color: "#b9b9c3", fontSize:"2rem"}}/> <span>& up</span>
                            </a>
                            <span>190</span>
                        </li>
                    </ul>
                </div>
            </aside>
            <div className={`${styles["overlay"]} ${this.props.showProductFilter && styles["show"]}`} onClick={this.props.hideProductFilter}/>
            </>
        )
    }
}


export default ProductFilter