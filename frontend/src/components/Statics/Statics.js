import  styles  from "./Statics.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faShoppingCart, faUsers } from '@fortawesome/free-solid-svg-icons';
const Statics = () => {
    return (
        <div className={styles.wrapper}>
        <div className={styles.statsContainer}>
          <div className={styles.statistic}>
            <div className={`${styles.icon} ${styles.revenue}`}>
              <FontAwesomeIcon icon={faDollarSign} color="white" />
            </div>
            <div className={styles.data}>$26.3M</div>
            <div className={styles.label}>Sales Revenue</div>
          </div>
          <div className={styles.statistic}>
            <div className={`${styles.icon} ${styles.products}`}>
              <FontAwesomeIcon icon={faShoppingCart} color="white" />
            </div>
            <div className={styles.data}>1.2M</div>
            <div className={styles.label}>Products Sold</div>
          </div>
          <div className={styles.statistic}>
            <div className={`${styles.icon} ${styles.customers}`}>
              <FontAwesomeIcon icon={faUsers} color="white" />
            </div>
            <div className={styles.data}>874K</div>
            <div className={styles.label}>Active Customers</div>
          </div>
        </div>
        <div className={styles.learnMoreContainer}>
          <div className={styles.title}>Discover Your Next Purchase</div>
          <p className={styles.description}>
            Explore our wide range of products from electronics to home essentials. Experience hassle-free shopping with exclusive deals and discounts.
          </p>
          <button className={styles.button}>Shop Now</button>
        </div>
      </div>
          );
    
 }
 
 
 export default Statics