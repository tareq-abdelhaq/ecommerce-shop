import React from "react"
import styles from "./ProductSearchBar.module.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuIcon from '@mui/icons-material/Menu';


class ProductSearchBar extends React.Component
{

    state = {
        showSort: false
    }
    toggleSortHandler = () =>{
        this.setState({showSort: !this.state.showSort})
    }
    hideSort = () =>{
        this.setState({showSort: false})
    }
    render() {
        return (
            <section className=
                         {this.props.displayProducts === "grid" ? `${styles["products__wrapper"]} ${styles["grid__active"]}`
                : `${styles["products__wrapper"]} ${styles["list__active"]}`}>
                <section className={this.props.dark ? `${styles["products__control__bar"]} ${styles["dark"]}`: styles["products__control__bar"]}>
                    {this.props.windowWidth <= 992 ? <MenuIcon style={{color: this.props.dark && "rgb(208, 210, 214)", fontSize: "2.5rem", cursor: "pointer"}} onClick={this.props.showProductFilter}/>
                        : <span>{this.props.resultsCount} results found</span>
                    }
                    <div>
                        <div className={styles["products__control__sort"]}>
                            <button className={styles["products__control__sort__btn"]} onClick={this.toggleSortHandler}>
                                {this.props.sort}
                                <KeyboardArrowDownOutlinedIcon />
                            </button>
                            <ul className={`${styles["products__control__sort__wrapper"]} ${this.state.showSort && styles['show']}`}>
                                <li onClick={this.hideSort}>
                                    <label htmlFor="feature">feature</label>
                                    <input type="radio" id="feature" name="sort" value="feature"
                                           checked={this.props.sort === "feature"} onChange={this.props.changeSort}
                                    />
                                </li>
                                <li onClick={this.hideSort}>
                                    <label htmlFor="lowest">lowest</label>
                                    <input type="radio" id="lowest" name="sort" value="lowest"
                                           checked={this.props.sort === "lowest"} onChange={this.props.changeSort}
                                    />
                                </li>
                                <li onClick={this.hideSort}>
                                    <label htmlFor="highest">highest</label>
                                    <input type="radio" id="highest" name="sort" value="highest"
                                           checked={this.props.sort === "highest"} onChange={this.props.changeSort}
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className={styles["products__control__view"]}>
                            <label htmlFor="grid" className={`${styles["view__btn"]} ${styles["grid__btn"]}`}
                                   onClick={this.props.changeProductsDisplay}>
                                <input type="radio" id="grid" value="grid" name="productsDisplay"
                                       checked={this.props.displayProducts === "grid"}
                                       onChange={this.props.changeProductsDisplay}
                                />
                                <GridViewOutlinedIcon style={{color: "#7367f0", fontSize: "2rem"}}/>
                            </label>
                            <label id="radio" className={`${styles["view__btn"]} ${styles["list__btn"]}`}>
                                <input type="radio" id="grid" value="list" name="productsDisplay"
                                       checked={this.props.displayProducts === "list"}
                                       onChange={this.props.changeProductsDisplay}
                                />
                                <ListOutlinedIcon style={{color: "#7367f0", fontSize: "2rem"}}/>
                            </label>
                        </div>
                    </div>
                </section>
                <section className={this.props.dark ? `${styles["products__search__bar"]} ${styles["dark"]}` : styles["products__search__bar"]}>
                    <input type="text" placeholder="Search Product"
                           value={this.props.searchText} onChange={this.props.changeSearchText}
                        />
                    <div>
                        <SearchOutlinedIcon style={{fontSize: "2.2rem", color: "#676d7d"}}/>
                    </div>
                </section>
            </section>

        );
    }
}


export default ProductSearchBar;