import React from "react"
import styles from "./ProductGrid.module.css"
import ProductCard from "../ProductCard/ProductCard";
import {Pagination} from "@mui/material";

class ProductGrid extends React.Component
{

    state = {
        gridView: true,
        showSort: false,
        searchText: ""
    }

    searchInputHandler = (event) => {
        this.setState({searchText: event.target.value})
    }

    toggleSortHandler = () => {
        this.setState({showSort : !this.state.showSort})
    }
    turnGridHandler = () => {
        this.setState({gridView : true})
    }
    turnListHandler = () => {
        this.setState({gridView : false})
    }

    render() {
        const productList = this.props.products.map(product => {
            return <ProductCard key={product.id} {...product} display={this.props.displayProducts === "grid" ? "grid" : "list"}/>
        })

        return(
            <section className={styles["products__grid"]}>
                {productList}
                <Pagination count={3} className={styles["pagination"]} color={"primary"}/>
            </section>
        )
    }
}

export default ProductGrid