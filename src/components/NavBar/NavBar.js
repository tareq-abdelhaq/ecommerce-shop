import React from "react"
import styles from "./NavBar.module.css"
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MenuIcon from '@mui/icons-material/Menu';




class NavBar extends React.Component
{



    render() {

        return (
            <nav className={this.props.darkTheme ? `${styles["nav__bar"]} ${styles["dark"]}` : styles["nav__bar"]}>
                {
                    this.props.windowWidth <= 1300 &&
                    <li className={`${styles["nav__bookmark"]} ${styles["hamburger__icon"]}`} onClick={this.props.showSideBar}>
                        <MenuIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#6e6b7b", fontSize: "2.4rem",cursor: "pointer",marginRight:"1.2rem"}}
                        />
                    </li>
                }
                <ul className={`${styles["nav__bookmarks"]} ${this.props.windowWidth <= 992 && styles["hide"]}`}>
                    <li className={styles["nav__bookmark"]}>
                        <a href="#">
                            <CalendarTodayOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#6e6b7b",fontSize: "2.4rem" }}
                            />
                        </a>
                    </li>
                    <li className={styles["nav__bookmark"]}>
                        <a href="#">
                            <ChatBubbleOutlineIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#6e6b7b",fontSize: "2.4rem"}} />
                        </a>
                    </li>
                    <li className={styles["nav__bookmark"]}>
                        <a href="#">
                            <EmailOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#6e6b7b",fontSize: "2.4rem"}} />
                        </a>
                    </li>
                    <li className={styles["nav__bookmark"]}>
                        <a href="#">
                            <PlaylistAddCheckOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#6e6b7b",fontSize: "2.4rem"}} />
                        </a>
                    </li>
                    <li className={styles["nav__bookmark"]}>
                        <a href="#">
                            <StarBorderOutlinedIcon style={{color: "#ff9f43",fontSize: "2.4rem"}} />
                        </a>
                    </li>
                </ul>
                <ul className={this.props.darkTheme ? `${styles["nav__admin"]} ${styles["nav__admin__dark"]}` : styles["nav__admin"]}>
                    <li className={styles["nav__admin__lang"]}>
                        <a href="#">
                            <img
                                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA1CAMAAACA7r40AAAA/FBMVEWyIjNPN2Y8O27///8/PnBOTXxycpY9PG9RUX5HR3dIR3dLSnlPTny4uMpWVYFFRHVwb5VlZIx7e52DgqOIh6aIiKc+PXBJSHhTUn9hYYqyIjReXohgX4lYV4Lr6/C2tcjPdYB0c5haWYRYV4Nra5GJiac+PW/FxdTHYG1RUH3eoajltbtOTXvty89BQHHg3+hSUX6GYoC6usyVlbFycZa7u8yUk6+sq8FCQXO0tMe1tMhiYYpMS3pDQnNvbpTExNN8fJ7GxdTGxtWCgqLHx9WXlrLXi5SYl7Kiobrg4Oiiorrn5u3n5+2jo7ukpLvw8PTx8fX09Pf19firqsC5sMNxAAAAAnRSTlPQ9qN1Xw4AAAGlSURBVHhe7ZXFiiRBFEVjznvp5W7t7j3u7m7//y8D1dAMGbnI4jW5KOpsgjibCxFcrrtVEmcBGAGQJHB98d3EgEM/ygsg/nwRAy15rxQ4Ywh3JQX49hVgKA/Ad1hDkkGTMSQJjGkOEmo133FmwAEQyl8FfSj3gFgkzjsQAw6AZ796AP2fGcDBS8/ZQ7ZQlJ2d+bEFqp6zhuh9Cf9/pDtKkTs04KBTD4jgx3eICOodoshz1p7M6UUAUQ+Ap2Pf2UMI5UBBX18/Ut7ZQ84Jui10QKsbcA7dt77jxIBDt+sxMNzrD4HL+rZS4Iw9iTZkCjRFmsBUHkcUOGMI7dkpKezuQsrprM3zR76zN572ekdBX623gaONJ0d5B5sGHAA1+QTwRQJgX2Q/7+w9GZGlDZKERpoxgkbDc8s0WscGSo+WGMiNVlgwWuFNjdafPsDe7wzg3RvP2UNCFGVtbX6EoOo7PhgoO1rGnswHiquB4mqgfIcxpBTGkNslMf2JVMAShRxXgJtUwBKFbFbAqicL4U4qYNWThXCHFbDqyUK4swpY9WQhXBX8A2rVjaQ6HWXmAAAAAElFTkSuQmCC" alt="english language" />
                            <span className={styles["dark__text"]}>English</span>
                        </a>
                    </li>
                    <li className={styles["nav__admin__theme"]} onClick={this.props.changeTheme}>
                        <a href="#">
                            {
                                this.props.darkTheme ? <WbSunnyOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#6e6b7b", fontSize: "2.4rem"}}/>
                                              : <DarkModeOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#6e6b7b", fontSize: "2.4rem"}}/>
                            }
                        </a>
                    </li>
                    <li className={styles["nav__admin__search"]}>
                        <a href="#">
                            <SearchOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#6e6b7b",fontSize: "2.4rem"}} />
                        </a>
                    </li>
                    <li className={styles["nav__admin__cart"]}>
                        <a href="#">
                            <ShoppingCartOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#6e6b7b",fontSize: "2.4rem"}} />
                            <div className={`${styles["nav__notifications"]} ${styles["blue"]}`}>5</div>
                        </a>
                    </li>
                    <li className={styles["nav__admin__notifications"]}>
                        <a href="#">
                            <NotificationsNoneOutlinedIcon style={{color: this.props.darkTheme ? "#d0d2d6" : "#6e6b7b",fontSize: "2.4rem"}} />
                            <div className={`${styles["nav__notifications"]} ${styles["red"]}`}>6</div>
                        </a>
                    </li>
                    <li className={styles["nav__admin__info"]}>
                        <div className={styles["nav__admin__text"]}>
                            <p className={styles["dark__text"]}>john doe</p>
                            <p className={styles["dark__text"]}>admin</p>
                        </div>
                        <div className={styles["nav__admin__img"]}>
                            <div className={styles["nav__admin_status"]} />
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar