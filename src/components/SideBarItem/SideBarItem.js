import React from "react"
import styles from "./SideBarItem.module.css"

class SideBarItem extends React.Component
{

    render() {
        return (
            <li className={styles["side__bar__item"]}>
                <a href="#" className={this.props.active && styles["active"]}>
                    {this.props.icon}
                    <p className={styles["side__bar__anchor__text"]}>{this.props.content}</p>
                </a>
            </li>
        );
    }
}


export default SideBarItem