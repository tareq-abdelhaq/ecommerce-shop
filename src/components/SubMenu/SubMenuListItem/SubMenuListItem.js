import {Component} from "react";
import classes from "./SubMenuListItem.module.css"

class SubMenuListItem extends Component
{
    render() {
        return (
            <li className={["side__bar__item__link",classes.SubMenuItem].join(" ")}>
                <span className={classes.SubMenuItemCircle}/>
                <span>{this.props.children}</span>
            </li>
        );
    }
}

export default SubMenuListItem