import React from "react"
import styles from "./SideBar.module.css"
import SideBarItem from "../SideBarItem/SideBarItem";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined';
import VerticalSplitOutlinedIcon from '@mui/icons-material/VerticalSplitOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import SplitscreenOutlinedIcon from '@mui/icons-material/SplitscreenOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import RemoveModeratorOutlinedIcon from '@mui/icons-material/RemoveModeratorOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import SideBarHeader from "../SideBarHeader/SideBarHeader";
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import FormatSizeOutlinedIcon from '@mui/icons-material/FormatSizeOutlined';
import CloseIcon from '@mui/icons-material/Close';


class SideBar extends React.Component
{


    render() {
        return (
            <aside className=
                       {this.props.darkTheme ? `${styles["side__bar"]} ${styles["dark"]} ${this.props.showSideBar && styles["show"]}`
                        : `${styles["side__bar"]} ${this.props.showSideBar && styles["show"]}`
                       }
            >
                <ul className={styles["side__brand"]}>
                    <li>
                        <a href="#">
                            <img
                                className={styles["side__brand__logo"]}
                                src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg" alt="vuexy brand"/>
                            <h2 className={styles["side__brand__text"]}> vuexy </h2>
                        </a>
                    </li>
                    <li onClick={this.props.hideSideBar}>
                        {this.props.showSideBar ? <CloseIcon style={{color: "#5e50ee", fontSize: "2rem", cursor: "pointer"}}/>
                            : <a href="#"/>
                        }
                    </li>
                </ul>
                <ul className={styles["side__bar__navigation"]}>
                   <SideBarHeader>
                       apps & pages
                   </SideBarHeader>
                    <SideBarItem
                        icon={
                            <EmailOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="email"
                        dark={this.props.darkTheme}
                    />
                    <SideBarItem
                        icon={
                            <ChatBubbleOutlineIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="chat"
                        dark={this.props.darkTheme}
                    />
                    <SideBarItem
                        icon={
                            <PlaylistAddCheckOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="todo"
                        dark={this.props.darkTheme}
                    />
                    <SideBarItem
                        icon={
                            <CalendarTodayOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="calendar"
                        dark={this.props.darkTheme}
                    />
                    <SideBarItem
                        icon={
                            <DescriptionOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="invoice"
                        dark={this.props.darkTheme}
                    />
                    <SideBarItem
                        icon={
                            <ShoppingCartOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="ecommerce"
                        dark={this.props.darkTheme}
                        active={true}
                    />
                    <SideBarItem
                        icon={
                            <PersonOutlineOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="user"
                        dark={this.props.darkTheme}
                    />
                    <SideBarItem
                        icon={
                            <InsertDriveFileOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="pages"
                        dark={this.props.darkTheme}
                    />
                    <SideBarHeader>
                        user interface
                    </SideBarHeader>
                    <SideBarItem
                        icon={
                            <ColorLensOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="colors"
                        dark={this.props.darkTheme}
                    />
                    <SideBarItem
                        icon={
                            <FormatSizeOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="typography"
                        dark={this.props.darkTheme}
                    />
                    <SideBarItem
                        icon={
                            <VisibilityOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="feather"
                        dark={this.props.darkTheme}
                    />
                    <SideBarItem
                        icon={
                            <CreditCardOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="cards"
                        dark={this.props.darkTheme}
                    />
                    <SideBarItem
                        icon={
                            <AddCircleOutlineOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="extensions"
                        dark={this.props.darkTheme}
                    />
                    <SideBarItem
                        icon={
                            <ViewQuiltOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="page layout"
                        dark={this.props.darkTheme}
                    />
                    <SideBarHeader>
                        Forms & Tables
                    </SideBarHeader>
                    <SideBarItem
                        icon={
                            <VerticalSplitOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="forms elements"
                        dark={this.props.darkTheme}
                    />
                    <SideBarItem
                        icon={
                            <VerticalSplitOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="form layout"
                        dark={this.props.darkTheme}
                    />
                    <SideBarItem
                        icon={
                            <ViewInArOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="form wizard"
                        dark={this.props.darkTheme}
                    />
                    <SideBarItem
                        icon={
                            <TaskAltOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="form validation"
                        dark={this.props.darkTheme}
                    />
                    <SideBarItem
                        icon={
                            <VerticalSplitOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="form repeater"
                        dark={this.props.darkTheme}
                    />
                    <SideBarItem
                        icon={
                            <SplitscreenOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="BS table"
                        dark={this.props.darkTheme}
                    />
                    <SideBarItem
                        icon={
                            <AutoAwesomeMosaicOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="good table"
                        dark={this.props.darkTheme}
                    />
                    <SideBarHeader>
                        Charts & Maps
                    </SideBarHeader>

                    <SideBarItem
                        icon={
                            <PieChartOutlineOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="charts"
                        dark={this.props.darkTheme}
                    />
                    <SideBarItem
                        icon={
                            <ReceiptLongOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="leaflet"
                        dark={this.props.darkTheme}
                    />
                    <SideBarHeader>
                        Others
                    </SideBarHeader>
                    <SideBarItem
                        icon={
                            <ShieldOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="access control"
                        dark={this.props.darkTheme}
                    />
                    <SideBarItem
                        icon={
                            <MenuOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="menu levels"
                        dark={this.props.darkTheme}
                    />
                    <SideBarItem
                        icon={
                            <RemoveModeratorOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="desabled menu"
                        dark={this.props.darkTheme}
                    />
                    <SideBarItem
                        icon={
                            <SupportOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="raise support"
                        dark={this.props.darkTheme}
                    />
                    <SideBarItem
                        icon={
                            <FeedOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#625f6e", fontSize: "2rem"}} />
                        }
                        content="documentation"
                        dark={this.props.darkTheme}
                    />
                </ul>
                <div className={`${styles["overlay"]} ${this.props.showSideBar && styles["show"]}`}
                onClick={this.props.hideSideBar}
                />
            </aside>
        );
    }
}

export default SideBar