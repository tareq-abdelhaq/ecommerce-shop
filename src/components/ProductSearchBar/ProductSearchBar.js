import React from "react"
import styles from "./ProductSearchBar.module.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";


class ProductSearchBar extends React.Component
{

    state = {
        showSort: false
    }
    render() {
        return (
            <section className=
                         {this.state.gridView ? `${styles["products__wrapper"]} ${styles["grid__active"]}`
                : `${styles["products__wrapper"]} ${styles["list__active"]}`}>
                <section className={styles["products__control__bar"]}>
                    <span>27 results found</span>
                    <div>
                        <div className={styles["products__control__sort"]}>
                            <button className={styles["products__control__sort__btn"]} onClick={this.toggleSortHandler}>
                                featured
                                <KeyboardArrowDownOutlinedIcon />
                            </button>
                            <ul className={`${styles["products__control__sort__wrapper"]} ${this.state.showSort && styles['show']}`}>
                                <li><a href="#" target="_self">featured</a></li>
                                <li><a href="#" target="_self">lowest</a></li>
                                <li><a href="#" target="_self">highest</a></li>
                            </ul>
                        </div>
                        <div className={styles["products__control__view"]}>
                            <button className={`${styles["view__btn"]} ${styles["grid__btn"]}`} onClick={this.turnGridHandler}>
                                <GridViewOutlinedIcon style={{color: "#7367f0", fontSize: "2rem"}}/>
                            </button>
                            <button className={`${styles["view__btn"]} ${styles["list__btn"]}`} onClick={this.turnListHandler}>
                                <ListOutlinedIcon style={{color: "#7367f0", fontSize: "2rem"}}/>
                            </button>
                        </div>
                    </div>

                </section>
                <section className={styles["products__search__bar"]}>
                    <input type="text" placeholder="Search Product"
                           value={this.props.searchText} onChange={this.props.changeSearchText}
                        />
                    <div>
                        <SearchOutlinedIcon style={{fontSize: "2.2rem", color: "#a6a4b0"}}/>
                    </div>
                </section>
            </section>

        );
    }
}


export default ProductSearchBar;