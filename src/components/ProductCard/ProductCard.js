import React from "react"
import styles from "./ProductCard.module.css"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarIcon from '@mui/icons-material/Star';

class ProductCard extends React.Component
{
    render() {
        const ratingStars = [] ;
        for (let i = 1; i<=5 ; i++ ){
            if (this.props.rating >= i){
                ratingStars.push(<StarIcon key={i} style={{color: "#ff9f43", fontSize: "2rem"}}/>)
            }else {
                ratingStars.push(<StarIcon key={i} style={{color: "#b9b9c3", fontSize: "2rem"}}/>)
            }
        }

        return(
            <article className={this.props.display === "grid" ? `${styles["product__card"]} ${styles["grid"]} ${this.props.dark ? styles["dark"] : ""}` :
                `${styles["product__card"]} ${styles["list"]} ${this.props.dark ? styles["dark"] : ""}`}>
                <div>
                    <a href="#">
                        <img src={this.props.img} alt={this.props.name} />
                    </a>
                </div>
                <div className={styles["product__card__body"]}>
                    <div className={styles["product__rating"]}>
                        <span className={styles["product__stars"]}>
                            {ratingStars}
                        </span>
                        {this.props.display === "grid" &&<span className={styles["product__price"]}>${this.props.price}</span>}
                    </div>
                    <h6 className={styles["product__title"]}>
                        <a href="#">
                            {this.props.name}
                            <small>{this.props.display !== "grid" && "By "} {this.props.display !== "grid" && <span className={styles["product__title__brand"]}>{this.props.brand}</span>}</small>
                        </a>
                    </h6>
                    <p className={styles["product__description"]}>
                        {this.props.discription}
                    </p>
                </div>
                <div className={styles["product__buttons"]}>
                    {this.props.display === "list" &&<span>${this.props.price}</span>}
                    <button className={`${styles["wishlist"]} ${styles["product__btn"]}`}>
                        <FavoriteBorderOutlinedIcon />
                        <span>wishlist</span>
                    </button>
                    <button className={`${styles["in__cart"]} ${styles["product__btn"]}`}>
                        <ShoppingCartOutlinedIcon />
                        <span>Add to cart</span>
                    </button>
                </div>
            </article>
        )
    }
}


export default ProductCard