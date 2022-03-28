import React from "react";
import styles from "./SideBarHeader.module.css"


class SideBarHeader extends React.Component{


    render() {
        return (
            <li className={styles["side__bar__header"]}>
                <span>{this.props.children}</span>
            </li>
        );
    }
}

export default SideBarHeader