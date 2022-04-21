import React from "react"
import SubMenu from "../SubMenu/SubMenu";
import styles from "./SideBarItem.module.css"
import SubMenuListItem from "../SubMenu/SubMenuListItem/SubMenuListItem";

class SideBarItem extends React.Component
{

    state = {
        showSubMenu: false
    }
    toggleSubMenu = () => {
        this.setState(prevState => ({showSubMenu: !prevState.showSubMenu}))
    }
    render() {
        const arrow = this.props.extendable ? <span className={[styles["arrow__icon"],this.state.showSubMenu && styles["rotate"]].join(" ")} /> : null
        const subMenuItemsCountElement =
            this.props.extendable?.count ? <span className={[styles["submenu__count"],styles[this.props.extendable.className]].join(" ")}>
                                             {this.props.extendable.count}
                                          </span> : null
        const subMenuItems = this.props.extendable ? this.props.extendable.items.map(item =>{
            return <SubMenuListItem key={item}>{item}</SubMenuListItem>
        }) : null;
        const statusElement = this.props.extendable?.status ? <span className={styles[this.props.extendable.status]}
                                                              >
                                                             {this.props.extendable.status}
                                                             </span> : null
        return (
            <li className={this.props.dark ? `${styles["side__bar__item"]} ${styles["dark"]}` : styles["side__bar__item"]}>
                <a href="#" className={["side__bar__item__link",this.props.active && styles["active"]].join(" ")}
                   onClick={this.props.extendable && this.toggleSubMenu}>
                    {this.props.icon}
                    <p className={this.props.dark ? styles["dark"] : "" }>
                        {this.props.content}
                    </p>
                    {statusElement}
                    {subMenuItemsCountElement}
                    {arrow}
                </a>
                <SubMenu show={this.state.showSubMenu}>{subMenuItems}</SubMenu>
            </li>
        );
    }
}


export default SideBarItem