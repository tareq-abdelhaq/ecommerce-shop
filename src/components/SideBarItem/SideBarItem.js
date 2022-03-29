import React from "react"
import styles from "./SideBarItem.module.css"

class SideBarItem extends React.Component
{

    render() {
        return (
            <li className={this.props.dark ? `${styles["side__bar__item"]} ${styles["dark"]}` : styles["side__bar__item"]}>
                <a href="#" className={this.props.active && styles["active"]}>
                    {this.props.icon}
                    <p className={this.props.dark ? styles["dark"] : "" }>
                        {this.props.content}
                    </p>
                </a>
            </li>
        );
    }
}


export default SideBarItem