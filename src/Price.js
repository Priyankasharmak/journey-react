import styles from './price.module.css'


const Price = () => {
    return (

        <div>
            <div className={styles.nav}>
            <div className={styles.nvhead}>Journey</div>
            <div className={styles.nvpib}><div>Pricing</div><div>Integration</div><div>Blog</div></div>
            <div><button className={styles.nvin}>Sign in</button>
                <button className={styles.nvcr}>Create account</button></div></div>
                <div><div>Pricing for all teams sizes</div>
                <div><div>"I sell to large enterprises and journey helps me scale sales training and stakeholder management"</div> <div><div>imgs</div>
                <div>btns</div></div></div></div>
            <div className={styles.pri}>
                <div className={styles.pr}>
                    <div className={styles.asd}>Basic</div>
                    <div className={styles.dis}>The basics you need to get started with journey</div>
                    <div className={styles.freebox}><div className={styles.free}>Free /</div> <div className={styles.freedis} >This plan will be free forever</div> </div>
                    <button className={styles.bt}>Choose</button>
                    <div className={styles.hed}>What's included ?</div>
                    <div ><ul className={styles.tex} ><li>Up to 5 journey per organization </li>
                        <li>unlimited journey view</li>
                        <li>Unlimited content </li>
                        <li>customized journey styling to reflect your organization branding and logo</li>
                        <li>anonymously inside of who viewed what journey</li>
                        <li>send journey activity to zapier</li>
                        <li>capture viewer</li>
                    </ul> </div>


                </div>
                <div className={styles.pr}><div className={styles.gb}> <div className={styles.asd}>Pro</div> <div className={styles.jn}>25% off</div> </div>
                    <div className={styles.dis}>The basics you need to get started with journey</div>
                    <div className={styles.freebox}><div className={styles.free}>$29 /</div> <div className={styles.freedis}>This plan will be free forever</div>
                    </div> <button className={styles.bt}>Choose</button> <div className={styles.hed}>Everthing in free +</div>
                    <div><ul className={styles.tex}><li>unlimeted journey</li>
                        <li>Create workspaces to organise journey</li>
                        <li>Clearbit enriched insights</li>
                        <li>Send journey activity data to segment and stack</li>
                        <li>Option to remove "Made in Journey" branding</li>
                        <li>Secure journey with password, whitelist,blacklist,and email verfication </li>



                    </ul></div> </div>

                <div className={styles.pr}><div className={styles.asd}>Teams</div>
                    <div className={styles.dis}>Empower entire teams to win more deals with journey</div>
                    <div className={styles.freebox}><div className={styles.free}>Contact Us /</div>  </div>
                    <button className={styles.bt}>Choose</button>
                    <div className={styles.hed}>Everthing in Pro +</div>
                    <div ><ul className={styles.tex} ><li>Unlimited journey </li>
                        <li>CRM integrations</li>
                        <li>SAML SSO integrations</li>
                        <li>Dedicated Customer Success </li>
                        <li>Empolyee and team workshop</li>

                    </ul> </div>
                </div>




            </div>
        </div>
    );
}

export default Price;