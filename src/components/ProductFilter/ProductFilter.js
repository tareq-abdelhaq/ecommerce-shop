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
                            <input type="radio" id="all__prices" name="price"/>
                            <label htmlFor="all__prices">All</label>
                        </li>
                        <li>
                            <input type="radio" id="less__ten" name="price"/>
                            <label htmlFor="less__ten">&lt;= $10</label>

                        </li>
                        <li>

                        </li>
                        <li>
                            <input type="radio" id="ten__hundred" name="price"/>
                            <label htmlFor="ten__hundred">$10 - $100</label>

                        </li>
                        <li>
                            <input type="radio" id="hundred__five" name="price"/>
                            <label htmlFor="hundred__five">$100 - $500</label>

                        </li>
                        <li>
                            <input type="radio" id="greater__five" name="price"/>
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