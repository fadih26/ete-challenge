import Styles from './Hero.module.css'
import Carousal from '../Carousal/Carousel'

const Hero = () => {
   return (
      <section className={Styles.heroSection}>
         {/* <img className={Styles.heroImg} src={heroImg} alt="story" /> */}
         <div  className={Styles.heroContainer}>  

            <h1>Everything, Anytime, Anywhere</h1>
            <p>Dive into our marketplace and discover endless possibilities!</p>
            <div className={Styles.buttonsWrapper}>
               <a className={Styles.primaryBtn}>Sell Your Products</a>
               <a className={Styles.secondaryBtn}>Explore Our Products</a>
            </div>
         <Carousal />
         </div>
      </section>
   )
}


export default Hero