import React from "react"
import styles from "./FilterTitle.module.css"

class FilterTitle extends React.Component
{


    render() {
        return (
            <h6 className={`${styles["filter__title"]} ${ this.props.first && styles["first"]} ${this.props.dark && styles["dark"]}`}>
                {this.props.children}
            </h6>
        );
    }
}

export default FilterTitle