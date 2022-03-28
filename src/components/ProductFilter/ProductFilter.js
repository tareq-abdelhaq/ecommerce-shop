import React from "react"
import styles from "./ProductFilter.module.css"
import FilterTitle from "../FilterTitle/FilterTitle";

function getUniqueCategories(products)
{
    const allCategories = products.map(product => product.category)
    const categories = [...(new Set(allCategories))]
    return  categories.map(category => {
        return  <li key={category}>
            <input type="radio" id={category} name="category"/>
            <label htmlFor={category}>{category}</label>
        </li>
    })
}

function getUniqueBrands(products)
{
    const allBrands = products.map(product => product.brand)
    const brands = [...(new Set(allBrands))]
    return  brands.map(brand => {
        return  <li key={brand}>
            <input type="radio" id={brand} name="brand"/>
            <label htmlFor={brand}>{brand}</label>
        </li>
    })
}

class ProductFilter extends React.Component
{

    filterPriceHandler = (event) =>
    {
        this.setState({priceRange: event.target.value})
    }

    render() {
        const categoryList = getUniqueCategories(this.props.products)
        const brandsList = getUniqueBrands(this.props.products)

        return(
            <aside>
                <h6 className={styles["product__filters__title"]}> filters </h6>
                <div className={styles["product__filters__wrapper"]}>
                    <FilterTitle first>multi range</FilterTitle>
                    <ul className={styles["filter__section"]}>
                        <li>
                            <input type="radio" id="all__prices" value= "all" name="price"
                                   checked={this.props.priceRange === "all"}
                                   onChange={this.props.changePriceRange}
                            />
                            <label htmlFor="all__prices">All</label>
                        </li>
                        <li>
                            <input type="radio" id="less__ten" value="less than 10" name="price"
                                   checked={this.props.priceRange === "less than 10"}
                                   onChange={this.props.changePriceRange}
                            />
                            <label htmlFor="less__ten">&lt;= $10</label>

                        </li>
                        <li>
                            <input type="radio" id="ten__hundred" value="between 10 and 100" name="price"
                                   checked={this.props.priceRange === "between 10 and 100"}
                                   onChange={this.props.changePriceRange}
                            />
                            <label htmlFor="ten__hundred">$10 - $100</label>

                        </li>
                        <li>
                            <input type="radio" id="hundred__five" value= "between 100 and 500" name="price"
                                   checked={this.props.priceRange === "between 100 and 500"}
                                   onChange={this.props.changePriceRange}
                            />
                            <label htmlFor="hundred__five">$100 - $500</label>

                        </li>
                        <li>
                            <input type="radio" id="greater__five" value="greater than 500" name="price"
                                   checked={this.props.priceRange === "greater than 500"}
                                   onChange={this.props.changePriceRange}
                            />
                            <label htmlFor="greater__five">&gt;= $500</label>
                        </li>
                    </ul>
                    <FilterTitle> price range </FilterTitle>
                    <div className={styles["slider"]}>
                        <div className={`${styles["slider__circle"]} ${styles["left"]}`} />
                        <div className={`${styles["slider__circle"]} ${styles["right"]}`} />
                    </div>
                    <FilterTitle>Categories</FilterTitle>
                    <ul className={styles["filter__section"]}>
                        {categoryList}
                    </ul>
                    <FilterTitle> brands </FilterTitle>
                    <ul className={styles["filter__section"]}>
                        {brandsList}
                    </ul>
                </div>
            </aside>
        )
    }
}


export default ProductFilter