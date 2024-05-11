import styles from "./Product.module.css"
import img from "../../assets/images/nft.jpg"
const ProductCard = () => {
    return (
        <div className={styles.card}>
          <img src={img} alt="Jael Cartel" className={styles.cardImage} />
          <span className={styles.banner}>Best Seller</span>
      </div>
    )
 }
 
 
 export default ProductCard