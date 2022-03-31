import React from "react"
import styles from "./ProductGrid.module.css"
import ProductCard from "../ProductCard/ProductCard";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
    onePageBackHandler = () =>{
        if (this.props.currentPage !== 1)
        {
            this.props.changePage(this.props.currentPage-1)
        }
    }
    onePageForwardHandler = () =>{
        if (this.props.currentPage !== Math.ceil(this.props.resultsCount/this.props.productsPerPage))
        {
            this.props.changePage(this.props.currentPage+1)
        }
    }

    render() {
        const productList = this.props.products.map(product => {
            return <ProductCard key={product.id} {...product} dark={this.props.dark} display={this.props.displayProducts === "grid" ? "grid" : "list"}/>
        })
        const pageNumbers = []
        for(let i = 1 ; i<= Math.ceil(this.props.resultsCount/this.props.productsPerPage); i++){
            pageNumbers.push(i)
        }

        return(
            <section className={styles["products__grid"]}>
                {productList}
                <div className={styles["pagination"]}>
                    {
                        // this.props.wind
                        <li onClick={this.onePageBackHandler}
                            className={this.props.currentPage === pageNumbers[0] ? styles["disabled"] : ""}
                        >
                            <ArrowBackIosNewIcon/>
                        </li>
                    }                    <ul className={styles["page__numbers"]}>
                        {
                            pageNumbers.map(pageNumber => {
                                return (
                                    <li key={pageNumber}
                                        onClick={(e) => this.props.changePage(pageNumber)}
                                        className={this.props.currentPage === pageNumber ? styles["active"]:""}
                                    >
                                        {pageNumber}
                                    </li>
                            )})
                        }
                    </ul>
                    <li onClick={this.onePageForwardHandler}
                        className={this.props.currentPage === pageNumbers.length ? styles["disabled"] : ""}
                    >
                        <ArrowForwardIosIcon />
                    </li>
                </div>
            </section>
        )
    }
}

export default ProductGrid