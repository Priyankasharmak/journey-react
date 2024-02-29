



import styles from './navigation.module.css';

const Navi = () => {
    return ( 
        <div className={styles.nave}>
            <div className={styles.box}>journey</div>
            <div className={styles.equl}>
            <div className={styles.box1}>pricing</div>
            <div className={styles.box2}>home</div>
            <div className={styles.box3}>about</div>
            <button className={styles.box4}>sign in</button>
            <button className={styles.box4}>create account</button>
          </div>  
            
        </div>
     );
}
 
export default Navi;
