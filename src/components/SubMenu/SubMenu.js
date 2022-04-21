import { Component } from "react"
import classes from "./SubMenu.module.css"

class SubMenu extends Component
{

    render() {
        return (
            <ul className={[classes.SubMenu,this.props.show && classes.Show].join(" ")}>
                {this.props.children}
            </ul>
        );
    }
}

export default SubMenu