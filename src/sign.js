import styles from './sign.module.css'
import { FaTwitter , FaInstagram , FaFacebook,FaGoogle} from "react-icons/fa";


const Sign = () => {
    return (
        <div className={styles.box}>
            <div className={styles.bigbox}><div className={styles.boxes}>
                <div className={styles.tex}> Sign up for journey</div>
                <div className={styles.text}> Journey helps hundreds of busineeses each week win more deels by sanding better,more persona;izes and mpre engaging stories.</div>
                <button className={styles.bt}>Create Account</button></div>
                <img className={styles.im} src="https://media.istockphoto.com/id/917911572/photo/standing-woman-on-the-hill-against-mountain-valley-at-bright-sunny-day-landscape-with-girl.jpg?s=1024x1024&w=is&k=20&c=CdAO7r8O3xWGG_v3aqJCCEWwQTRG2PIvZqyZS0933T0=" alt="" /></div>
            <div className={styles.all}>
                <div className={styles.bo}>
                    <div className={styles.jr}>journey</div>
                    <button className={styles.bt1}>Contact me</button>
                </div>
                <div className={styles.centr}><div className={styles.cpr}><div className={styles.com}> Company</div>
                    <ul className={styles.cont}><li>Home</li>
                        <li>Careers</li>
                    </ul></div>
                    <div> <div className={styles.com}>Product</div>
                    <ul className={styles.cont}><li>Changelock</li>
                        <li>Gallery</li>
                        <li>Pricing</li>
                        <li>Integrations</li></ul></div>
                <div>  <div className={styles.com}>Resoures</div>
                <ul className={styles.cont}><li>blog</li></ul>
            </div>
       </div >
       <div className={styles.icn}><FaTwitter/><FaInstagram />< FaFacebook/><FaGoogle/></div>
       </div>
       </div>








     );
}

export default Sign;