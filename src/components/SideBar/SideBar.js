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


class SideBar extends React.Component
{


    render() {
        return (
            <aside className={styles["side__bar"]}>
                <ul className={styles["side__brand"]}>
                    <li>
                        <a href="#">
                            <img
                                className={styles["side__brand__logo"]}
                                src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg" alt="vuexy brand"/>
                            <h2 className={styles["side__brand__text"]}> vuexy </h2>
                        </a>
                    </li>
                    <li>
                        <a href="#" />
                    </li>
                </ul>
                <ul className={styles["side__bar__navigation"]}>
                   <SideBarHeader>
                       apps & pages
                   </SideBarHeader>
                    <SideBarItem
                        icon={
                            <EmailOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="email"
                    />
                    <SideBarItem
                        icon={
                            <ChatBubbleOutlineIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="chat"
                    />
                    <SideBarItem
                        icon={
                            <PlaylistAddCheckOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="todo"
                    />
                    <SideBarItem
                        icon={
                            <CalendarTodayOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="calendar"
                    />
                    <SideBarItem
                        icon={
                            <DescriptionOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="invoice"
                    />
                    <SideBarItem
                        icon={
                            <ShoppingCartOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="ecommerce"
                        active={true}
                    />
                    <SideBarItem
                        icon={
                            <PersonOutlineOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="user"
                    />
                    <SideBarItem
                        icon={
                            <InsertDriveFileOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="pages"
                    />
                    <SideBarHeader>
                        user interface
                    </SideBarHeader>
                    <SideBarItem
                        icon={
                            <ColorLensOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="colors"
                    />
                    <SideBarItem
                        icon={
                            <FormatSizeOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="typography"
                    />
                    <SideBarItem
                        icon={
                            <VisibilityOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="feather"
                    />
                    <SideBarItem
                        icon={
                            <CreditCardOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="cards"
                    />
                    <SideBarItem
                        icon={
                            <AddCircleOutlineOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="extensions"
                    />
                    <SideBarItem
                        icon={
                            <ViewQuiltOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="page layout"
                    />
                    <SideBarHeader>
                        Forms & Tables
                    </SideBarHeader>
                    <SideBarItem
                        icon={
                            <VerticalSplitOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="forms elements"
                    />
                    <SideBarItem
                        icon={
                            <VerticalSplitOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="form layout"
                    />
                    <SideBarItem
                        icon={
                            <ViewInArOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="form wizard"
                    />
                    <SideBarItem
                        icon={
                            <TaskAltOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="form validation"
                    />
                    <SideBarItem
                        icon={
                            <VerticalSplitOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="form repeater"
                    />
                    <SideBarItem
                        icon={
                            <SplitscreenOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="BS table"
                    />
                    <SideBarItem
                        icon={
                            <AutoAwesomeMosaicOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="good table"
                    />
                    <SideBarHeader>
                        Charts & Maps
                    </SideBarHeader>

                    <SideBarItem
                        icon={
                            <PieChartOutlineOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="charts"
                    />
                    <SideBarItem
                        icon={
                            <ReceiptLongOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="leaflet"
                    />
                    <SideBarHeader>
                        Others
                    </SideBarHeader>
                    <SideBarItem
                        icon={
                            <ShieldOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="access control"
                    />
                    <SideBarItem
                        icon={
                            <MenuOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="menu levels"
                    />
                    <SideBarItem
                        icon={
                            <RemoveModeratorOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="desabled menu"
                    />
                    <SideBarItem
                        icon={
                            <SupportOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="raise support"
                    />
                    <SideBarItem
                        icon={
                            <FeedOutlinedIcon style={{color: "#625f6e", fontSize: "2rem"}} />
                        }
                        content="documentation"
                    />
                </ul>
            </aside>
        );
    }
}

export default SideBar