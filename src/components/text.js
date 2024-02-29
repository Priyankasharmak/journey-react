import styles from './text.module.css'



const Tex = () => {
    return ( 
        <div className={styles.bg} >
            <div className={styles.box}>Every pitch deck <br /> deserves a story</div>
            <div className={styles.box1}>Tell your story with a Journey -- responsive slides, video recoding,interactive blocks and embeds from your favorite</div>
            <div className={styles.bt}>
                <button className={styles.box2}>Create an account</button>
                <button className={styles.box3}><img src="https://cdn.iconscout.com/icon/free/png-512/free-google-160-189824.png?f=webp&w=20" alt="" />With google</button>
                <button className={styles.box4}>With microsoft</button>
                <button className={styles.box5}>Try it now</button>
            </div>
        </div>





     );
}
 
export default Tex;