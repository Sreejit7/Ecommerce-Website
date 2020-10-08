import React from 'react';
import './Home.css';
import Product from './Product';
import SimpleImageSlider from "react-simple-image-slider";
import {Footercolumn} from './Footercolumn';

//import {AnimationWrapper,useHover} from 'react-hover-animation';
function Home() {

    const images=[
        {url:"https://lh3.googleusercontent.com/5g3K3sMUO3yL3RMDjLs81UEDJ1hTpcfTVmUkBO0N-Lt9AowZfDSazwL-yJRIVFtWq-JI9XQY3Occa-fTQ4jN1_P6y71i4iWD7KVNGC8f6mEUbpCEXi-yOQHfJ2mV876gWBcHgDAleHoy6hONR-eDPV3hHgUUHjXEDCL5yU6UoFkuJcCdwdr1NbpN6z9YsamLMyQZXAxF-p4HzJbhK2Nl79rdOrIqYMAHFO_Q_ZFizATCnWYE8xy0OPEfX06rbMCaqc-7o3b0CE5zNDZFkA0wOpVmvb2c_nTFdX0LEZ6uWb7S1SzOtyiysu26L20NVFPeRhaudYa2TMjkQimAWgooPiShfO0fLXMpoPd8vANEBnutiwd70x2iYKt2uPL8zQ09Afq70j-p7RGZ5qhZxc5np97SMDHqn0uuawHCBaKH4ej_TwJuPoEXTogsj6i6CGTn0zOBfJwZHOPvJTwGbpdvHckiseqSLrh56hegmNThXRgYwI_091QQg2wdwDwRtAi03_tJEYpoMMEHfZq4KXtoaBng5TSu9mwmZdTjbccrEKlzMTsjUSc61GISvBYm8Yqj2QVZj1oj-KeqiBDlFHwCGCBrDaIJ5Ve_7mn8dqIfq1G_C6HMvCzrVtHeJ2VystaqbQKxyunYcaCRPerJLaSgrluxCJEuK02yNYOOBVDXUQqftGYXwYOlQ5DW8RXc=w1366-h749-no?authuser=0"},
        {url:"https://lh3.googleusercontent.com/PVFWGPLuZ3wKKkn5yPfk6NCJMeRUqNVbtD05l-CgAjpuqU9Zcn9cyOGXYGN-z8hdWHqm3s5GoCBpYlewZhmP8mcPgyhdCW8wvJHQXL9fhXX_ireCszcGhkBH1cfJVbFDYvVZhSKNMQZts9WVxD6beypGcFD-cFtRbRb9e44TskAzaFNmsni4XM63gZX1HoixaKM65AhQwypkzEQwlGiYc-MD6owToMypmhkbFe9m9CAJkTYzdl9p9OJk7sOul0rrlld-U78dWI3dGMYrmilrMS5yywKpUQlvtgwQ8cd_lqiFZA7gIzFcnME182ssqEwyQA_a3vRTGaKDKYXItd0Iz7QtmJbZNAbJqHao1MevCNVy59KhA6M6snIIGrT0x2SlmMAd8vh6rI_--TWr18buiSY61yFqa-CB1zTJ6IMUuC7OLnhnAKCxRhv0YO6fJAE81qROMroGEwigU6XEwUWsi13ofVjeJ1zzzyscSVPmX2jtL9oaKiUFHXSmbx5-Uy6hb2391gZfL7npQpotKpsW7mU-3BB7URrZ-vnak1oY4lxfujsibKYAszoe5lI562_bwipkW5FUUciW0VKPjTe4TwlhPBgFjJK-bfU82EwARba843t5gNL4g3grh2NIKgabu-zbD2oO6jncIy2zA8c96F4iVbt7OvfGzbNYs7FK19XuDdFTZLJY95XDL67l=w1202-h801-no?authuser=0"},
        {url:"https://lh3.googleusercontent.com/Q2_tPHMBtLOYRpoveVGSGbFBe6MiC5iUKQyg_s7VhSTG86HzCsOrMqTkk2AGZ28RQZbKL_t4nS1o_XS2OSx_7daiSdYPzsfIwQkBl89gJj5Lr0Se4oIVM67W-RaKUXwiFEQDST3s7JYxMil8dnFmBo84eGvZ3nfkZWR7yKpLBQbfEbaxtMDNUGAvRJ7qowfIwns7prVY1b0lHz0pHMGn7fHW9c3TAK1a4opLeZ3t4HdSD9U3FMMqOstqEZm275CGPmGyzoZQ2LSN4OYKb3PKbVFqdLtMTXx5bMZK34gNjPkDS-O35cnk7lPpeasS_-Oko4B6ZZhfBw8DAplUznp80uzjeNjawv2joFLLLhC-p56mESHg-zFueRhzQRBdqYF8d5jhJEWBdO4xvgylQ7ZS37Hb0EgAwKMK4SnKiJyPjPdECzgKWhmkU2gDgv5rpD4JFy2NuVsvxNH8s30oSA96N6ay6371cfenjEX9ByIyEwoJKNDd_aC6GdEAAzRQZ37wAA4pKE7DNbBWXgx_O_tjLK2nCAgLl2EaCX7HElrxfdOYgfOKA6lRUHmyxNi0G2o8V8WLzoUsTOK7YSYBWPEJf9h5462Gp8sdLWlBMkLmeWSRERvkiN2pHi4pmlIFKWuaGh7ZdEtxhF0kJp15IVdGfPBUYgj3FCBxBKL5TtfDedF53gnAs-YYqj4_r7MN=w1024-h639-no?authuser=0"},
        {url:"https://lh3.googleusercontent.com/2izrxW4kuO_mHSmWHV2wgs1S5mmEfNWMGW4O3Ka6xC7FffVdrKw7g1jG3WujdacPzc2RQDbvpdZKL0ZaCS8t92Pj-uTdZE0hhhKltIs-jI2E_FX8vikTLMttyq-HEckvrnZYfW-d7FeDyNXFL6oyrvaSEpaPpyKm_qXz_EXSrhsQuyrj8zJRiaRS-8nRiVZMxgCFfjcjo7MPMIRrEHzhXF7hc7P7XtG7h0ZQq3ffG3xdKYW8J1qqmaQ9DTD1uCAz3RmXpzUy7GhgSE-I91z-2IGpsHCWGkKsWnvCHtB5h_PQ5nP8YltLejy9LmU4o2rRgimXBbM_uaPNFnP99mpWySkMAQuE_BDDF-lv0qlFWcuJIta8bEM5pcaSNW3qIuytUHkel1G8O7OUL_8fkJhUSJibPwKeoXU5eGMPzo-3Pf_mk4ecqQyDEONGsvOeKfoeXrH0OPXZs2kMnt3IGnc_ii_Xg75kw8Lp-eq1vD0hHE5XSYSznA9FYMdHK6ijnhpCZaAPgEgDugxN6XYb1ZRPZQS5g-NAcWxR3yKaMESFaPnHIxdeB8r5djSGL8k6XuvbZRzqbYedPELQ8u471ny9SSf3Tj74Db5al0f8S7dWgOErMBtrticA2Szftjv-_RoQx4J5AbegnfOf93r4Vgx9wS_qeDVoJKaGEHbQpuEGfxn49byAk1bgxb5Csees=w1234-h801-no?authuser=0"},
        {url:"https://lh3.googleusercontent.com/CVufGZ2xaFZEWHSacoWfKodreSyUbjzm-kAElvPLyI0BQQLjdaa4Y4MHoMXGC69II54QoU8lJtx24_8FFQSj37MW8VrGZEeDC4GkbW-r7_OEu6TYUk5eMiShOi3pNDnGsArSj79YLzivMqVKJHC-UFeStqceySpGgOWdcji14jQKmKZpwB_VIy093yURhx-IXe7r7Hc-UWreA1bxVOXB_lrTs7Zpmd2oWbmOLHTpKGtsy63_jYL4PYwXh29qg06cOLT_HDb0qsQKCJNOep3EJRPynS4WrOKvVrl8Lk-S2XYiGPOMHtRDdTVP3iu492TcNNL5gJKuL54xD61qJ0Du87a2i68gp64h17FWEnsbt4hegrffTyGc3yn8iRlTABZHOt0DH4Fl5RL3jxn4NIE_XFVjAhKT8LoABCP2zg8iRXr-cgO9tFIBH32Daiy-yYnlvqkn0-Lk7kCwYx15uMJQYiP3iEA_29n9d857Ld_EtmKbFJB7AoZaw2TsioEHl4dUBOP_-OiEazYYhg0QH7a7LZYqbr9uXASQNTziFHAQAV-W3xK7PeS4LeO8ftwqrUKiNne6gH_M5h6HYqbxEydQAa1txFvC72D2O0534PO8dyP3zgQwpNK0iwxD1SAOvGFISmjC2V4Lk908swY5NcrMFx6huAPnU8ONv5i0xRFB2rdyOBpp1lism9d7b2q-=w1533-h769-no?authuser=0"},
        {url:"https://lh3.googleusercontent.com/vmadnu9baAM5NnacvVoWUvtfROE4pNFvHx0w5Lqd_Ojvz1FlOrhzOJSki2QMlW3jAcPGb2vtdhaPHeInAHsSLCQdHpqlOzAsdjQDnlq7oC52t7sZ2mqfatgHFafIZ9VsjRT_wWnf7qtUxOoV1_qK9rxCek9yNbYg12fGMK3503upKYSb4iNRbtytIgfOqDlhId9CJM5ahr6mFULftZ89-qx8M5ETNlgcahupzhl2477P0w7Znm5nhyuNXvD7RGVOJ97MBIYnyIGgZ9thU3gwa4ChiGXmnuhlrrFB0rXoiW1r6VV7vqlC5yC3JN4BHapbU-klAPVUQECOJGezwkG1XbWbBTDEQH3frdn4aIra0XGRbgyS6d3yLR_w-S-u_pSGanNoECAxuqQYxOQd_oXoPA2WQ4DxtNqQdOhE2Zp7AFZSvIZVsRt3U62Fas_2mHF7XPqj-bP-WcoB1YfNfV8d1khWoJyr_1GYyQjHOcibcy18bYXCKZDsZCHdHMOCa6OrO_8SmE5PimvTwOZnRx0vfnwtaNIQd8fpei9HS_UkoDL1bT3heyd21ETP8piofBdnSEL6t9f72tvxAgToIuXyn6ftksJgqoPuwyx5a5vCBHUD33o7BUMqxOvkOhICljII4bFBhcR-zyQe3tLrRbDQylOt9dUp5Iy_b6_QLIYLZmwy6MWSNpkY38Grty_l=w1000-h600-no?authuser=0"}
    ]
    return (
        <div className="home">
            <div className='home__container'>
                <div className='home__image'>
                <SimpleImageSlider
                    height={550}
                    width={1400}
                    images={images}
                    
                />
                </div>
                <div className="home__row">
                   
                    <Product id="rum212jdei" title ="Homemade Chocolate Rum Ball Truffles with cream on top (Pack of 10)" price={420} rating={4} 
                    image="https://lh3.googleusercontent.com/0pZ7Lj6EL1A-jbkJjaqBK7l2dp7hsr7Xiopw9j6J3ByqioWVs7sIZhfPhLBZYVZ6g7GBNb3Xo1lQwK1eGhcDAmC9jCmucViwfZsHJj1Ly2s0r4RtBEHwz2snRof94XuEdUE1MxeRS88vbMa2cz8ME7fYP_8PiQ8fHU8q-03OM945FmIYwsIbRYg7lS5GMcJop3tDkKfkH8TEAs6L5gXPIjT7z61-wznS6hSdXnZWqKPLwcb7M-kq67WMxNiznfTzDuLcm09sZtqhbe1bRzuHEf2dpLCmvgjxic-BNR8sPplkM3RKoZ5DqdzgPOKW1whpo1bTGMGoCepviccBxJ8yT9m6f_g2Al6zTV-fxP-YKqCJjVHIds-8CqVvwotuQ2pSP0ukzjZsL6SIeT1Qm1qHYDNgoFYY7sxqKfDOd4c0pB2ciqb_BEzahWCKLLo6CIcf1sUD_fCTUbdFs_vAuejQXcfZ-v0lfB9Ic5_t4n64oG_-5uV3kdpFxPhWutCQkp07cnwgfCZObaG0C3gt9xAxv3KCNBv7HkDPsTs59b3B8EF1xWQrrcnp2GWks_ItHdgK1vxRX5dXZ0gFqok5wPD2zwkrMH17YYFpJAG5l3mp-wkTVoHTn7QDpbqWJKrwy_3_JyxF98fFahAaJpOs6_kUPdiP7Ei1-niTqzqvUInfxLoCBMtHuByF-MHKzhpe=w512-h294-no?authuser=0"
                    />
                    
            
                    <Product  id="cakejdo12ck"
                        title="Homemade eggless moist & soft Chocolate Cake (Wacky cake/ Depression cake)"
                        price={820}
                        rating={4}
                        image="https://lh3.googleusercontent.com/x_xd2ON0Yz8ZhvzB-d8cbK4nxqqkhR6rP821rCaUgaff7N6uAU-tHd97ABaVxla--y-J-I3l321o9ZEQjqewAPqued8jBni-SntECNPtzHbXEPLKd99Gp1LjpdpY_MiZZjDpBDuj6tP7puRX7zkM02bov92Uzmk7ijrWs3jlrVFEAleONoEzjvYP8JcOkvBHKKupI9G_B0CbkLdaNP9Jw8gOTWpTDRH5NwrmWFiKxJjB2WSH6uW04mhEwaB1e2REw1noels2eCajHsdiRMwfHboEvuVHSriSiYo8rxbGzJF7DLmddkKlyPkyBQmNVutqttGcA2rgasonXnbZmdE2PxLa--_YLQqXzLtL3KEh-kY3_-p4D1SOAfEMHDCzBOrYwhxtAOjLmXmPPR3EbwvgBuZiXCNpEqBs9AVErenzazwySZHN1aQ-xmwlXECuh26-kYQnlbdUOZp0K6QLx33CL3MXpDz0jrtcUUIudlTBE8uxHdZJInW5unmp0NJJ0CEud8gPs4BA8iLfa0GVC4sYf3YjsiqfiE6sI7TUiatKCMwM--5nZMmvQPITG3Z9lsrK-X1559sqjriP_64mUDtTxbIFhUGISrcXbU0CamVmHHIIJ49NTpEw18HwxUccW5WRgBE8KWlBLV7KcTMalOLRcFxy-9V1iK9bShbFsHn8drSu0gsGEl1NBJ0_RZQ3=w1202-h801-no?authuser=0"
                    />
                    
                </div>
                <div className="home__row">
                    
                    <Product id="cookie2opqepd"
                        title="Homemade Chocolate Chip Cookies (Packet of 5 pieces)"
                        price={180}
                        rating={4}
                        image="https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1.jpg"
                    />
                    
                    
                    <Product  id="biscuit18y31sa@1"
                        title="Homemade Flaky & Buttery Round-shaped Biscuits made of Buttermilk (Packet of 5 pieces)"
                        price={119}
                        rating={5}
                        image="https://www.jessicagavin.com/wp-content/uploads/2018/11/homemade-biscuits-13-1200.jpg"
                    />
                    
                    
                    <Product  id="cakep2uue83"
                        title="Homemade Dry fruit Plum Cake- 500 grams"
                        price={840}
                        rating={4}
                        image="https://lh3.googleusercontent.com/OuX9QntD9gtC2T1FS46m0kNskK5K0dkuny77GQgE4wthtoXoswd5jwo_myWRXu0SlwIwyUYtJmZNBCaQ4kiQ_C09GEz2zh98UyJofMrkJIQI937o8Kd1frj_f3gVFnlcwAEv4nn9uM_N_VTjnCY1QbpYP05FFuS2XnTl0PqeJ3n-9YcJUYPrhZL2k8P481XtzprdIMeyj2iVlCVR7N9MExIXCIcXZLtffDS9XkpDil6HdlKKxtippa3uarpQSGCoStiwq6WlIgwMf7qc7L9er2PuAjf5fUXlGpB6XTevTpPq2QNAy2MkaOCoMUF9clWF4AHUeLL9ZwoWt2kfgcVYyXKw-LQCjvh4Lky4_tjBZ9cJDOpnfDF70SW5JRXyWDc9jF6T0K1c_pIrFlP2IUGVR07Z7LIeeFLVugDjdXQw2XCWeL3PcE_U0na3xKlpZEuFiNxJ1_kAP1aCnRZCLj-z7KyEKSlPIs8subeGIInaX6b6UQhHcMlGvnZYWkXg-7VrWPumjQYoAG_W4KxQflV8c-MOAQEjl1ahhBuDJqhLC6_erG28u8M4XPj21W1Bz_zUnkH5qHnYTuvi_kJn2qKEkZMZw_wyq9mAkplKulLnUvU5qsWzrlL9ZPJZ-XiGVfdJVXIJ5Dawg7qe1OuVXHUGv473Qb2AnnpR4CJt1HS9cggGs9ieSJMSkE0NkZj7=s532-no?authuser=0"
                    />
                    <Product  id="cheezits21jBs"
                        title="Crunchy Square-shaped Cheez-its snacks (Box of 200 grams)"
                        price={90}
                        rating={4}
                        image="https://www.tasteofhome.com/wp-content/uploads/2018/07/cheez-its.jpg"
                    />
                    
                </div>
                <div className="home__row">
                    <Product id="truffle2-osjh21"
                        title="Homemade Oreo Truffles (Packet of 10 pieces)"
                        price={149}
                        rating={5}
                        image="https://lh3.googleusercontent.com/Q2_tPHMBtLOYRpoveVGSGbFBe6MiC5iUKQyg_s7VhSTG86HzCsOrMqTkk2AGZ28RQZbKL_t4nS1o_XS2OSx_7daiSdYPzsfIwQkBl89gJj5Lr0Se4oIVM67W-RaKUXwiFEQDST3s7JYxMil8dnFmBo84eGvZ3nfkZWR7yKpLBQbfEbaxtMDNUGAvRJ7qowfIwns7prVY1b0lHz0pHMGn7fHW9c3TAK1a4opLeZ3t4HdSD9U3FMMqOstqEZm275CGPmGyzoZQ2LSN4OYKb3PKbVFqdLtMTXx5bMZK34gNjPkDS-O35cnk7lPpeasS_-Oko4B6ZZhfBw8DAplUznp80uzjeNjawv2joFLLLhC-p56mESHg-zFueRhzQRBdqYF8d5jhJEWBdO4xvgylQ7ZS37Hb0EgAwKMK4SnKiJyPjPdECzgKWhmkU2gDgv5rpD4JFy2NuVsvxNH8s30oSA96N6ay6371cfenjEX9ByIyEwoJKNDd_aC6GdEAAzRQZ37wAA4pKE7DNbBWXgx_O_tjLK2nCAgLl2EaCX7HElrxfdOYgfOKA6lRUHmyxNi0G2o8V8WLzoUsTOK7YSYBWPEJf9h5462Gp8sdLWlBMkLmeWSRERvkiN2pHi4pmlIFKWuaGh7ZdEtxhF0kJp15IVdGfPBUYgj3FCBxBKL5TtfDedF53gnAs-YYqj4_r7MN=w1024-h639-no?authuser=0"
                    />
                    <Product id="granola-219ubar39"
                        title="Homemade Peanut Butter Chocolate-Chip Granola Bars (Pack of 10)"
                        price={419}
                        rating={4}
                        image="https://lh3.googleusercontent.com/vmadnu9baAM5NnacvVoWUvtfROE4pNFvHx0w5Lqd_Ojvz1FlOrhzOJSki2QMlW3jAcPGb2vtdhaPHeInAHsSLCQdHpqlOzAsdjQDnlq7oC52t7sZ2mqfatgHFafIZ9VsjRT_wWnf7qtUxOoV1_qK9rxCek9yNbYg12fGMK3503upKYSb4iNRbtytIgfOqDlhId9CJM5ahr6mFULftZ89-qx8M5ETNlgcahupzhl2477P0w7Znm5nhyuNXvD7RGVOJ97MBIYnyIGgZ9thU3gwa4ChiGXmnuhlrrFB0rXoiW1r6VV7vqlC5yC3JN4BHapbU-klAPVUQECOJGezwkG1XbWbBTDEQH3frdn4aIra0XGRbgyS6d3yLR_w-S-u_pSGanNoECAxuqQYxOQd_oXoPA2WQ4DxtNqQdOhE2Zp7AFZSvIZVsRt3U62Fas_2mHF7XPqj-bP-WcoB1YfNfV8d1khWoJyr_1GYyQjHOcibcy18bYXCKZDsZCHdHMOCa6OrO_8SmE5PimvTwOZnRx0vfnwtaNIQd8fpei9HS_UkoDL1bT3heyd21ETP8piofBdnSEL6t9f72tvxAgToIuXyn6ftksJgqoPuwyx5a5vCBHUD33o7BUMqxOvkOhICljII4bFBhcR-zyQe3tLrRbDQylOt9dUp5Iy_b6_QLIYLZmwy6MWSNpkY38Grty_l=w1000-h600-no?authuser=0"
                    />
                </div>
                <div className="home__row">
                    
                    <Product id="pizza221wq2kj"
                        title="Homemade Pizza Dough with Cheese and Pepperoni"
                        price={399}
                        rating={5}
                        image="https://www.budgetbytes.com/wp-content/uploads/2010/07/Classic-Homemade-Pizza-Dough-close.jpg"
                    />
                    
                    
                    <Product  id="chips23df24345"
                        title=" Homemade Light as Air Deep Fried Potato Chips with Sweet Smoky Paprika & Cumin Aioli (Packet of 100grams)"
                        price={99}
                        rating={3}
                        image="https://steamykitchen.com/wp-content/uploads/2010/02/potato-chips.jpg"
                    />
                    
                    
                    <Product  id="proteinbar28qh005"
                        title="Soft and Chewy Homemade Peanut Butter Protein Bars with Oatmeal, Honey & Chocolate (Packet of 10 pieces)"
                        price={179}
                        rating={4}
                        image="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/12/12/0/EA0906H_protein-bars_s4x3.jpg.rend.hgtvcom.616.462.suffix/1387410422191.jpeg"
                    />
                     
                    
                </div>
                <div className="home__row">
                    <Product  id="pickle2iyw81"
                        title="Homemade Sweet & Sour Okra Pickle (Set of 4 Jars)"
                        price={399}
                        rating={4}
                        image="https://lh3.googleusercontent.com/Z0zvg9_iovug4KW4XTo6xUusoEcxio1M4EkeZsGZUx6wWXheENhrLxMEjr-OkilwHHtREBVexHTsd65XzuKvBTe5qiWFukHtCVgWWVVQFQp_mKAb1uy8AF_MZ3-vd_Vf6lMf9Y0iw4-AXqJBVY0aG0nYyFTDLehvh9-56z2Rf9SffugnzW1pOnXvet1LDh7F7QQArD5mhuJrhD10DTJqOWev-q2t7EXiom9_jT73QE9k5dFXN50YthSR47JD5NTpTe_M-I62MNjSK1rru2TlP5hstt-JTSQW2BOcJTqCvQKJyugSDrGlX0RB3A7_GDTjDJM0vuHtbhpx4rewhgLr5YC3xgzRU2txMF1pfhrQ3iTLS60nWFcWfGoPx_yDR5uBZsTmCjNMRDzlk_t4_PjZkiXItwXo__hi_l9RHXDjrW4W2okVM3N7YY7T7TpaYlC8euUGyobRft76HkNygkPpe_pIoy4NzuiHSB3Hu1qUq0ufoXa5EtLeI46Rvq8EwoevB0kRQ7BROX2fDyGucorBuuB4ETF_0xS_fHEU_04MVSPRxil_DO-QwGHJ_upnlsJbQCwdneqgakq7ifvT7gzuYQiuxY-kIXA7qQ3-VtVTOmbFu78JmX08ddpuDsE_2xejzSvyGAqb-w2pZhzEOZe9V7e8DEohblZhsnovb3VO1mxRfH-OUlMSIQ8HzezD=w1234-h801-no?authuser=0"
                    />
                    <Product  id="sweet0f329a"
                        title="Homemade Rasmalai with Cashew, Almond & Pistachios (Packet of 10 pieces)"
                        price={149}
                        rating={5}
                        image="https://lh3.googleusercontent.com/f6mWqXzbsO6bPLZFIYhNT9vKzzgLDJ5gq8E4GIpRGS6PrCBg6w6OmpsZ7FAKPD4tdDtg9zQKpamcx_9gdiIarsYmBEs9YpPIpwHoni-MxXYe7B6EQS87FE_0eA4L_ya4mboqxxgA9EtgQe9sSgqFUwr_dz8ner4K0cEiygEyGWpvyt7Mj24emgmb2PK8FEzK9fKAdnAeuNfYuj0o0OCXxE1xCT-7KEjJyXX2udkH13edyncGuPTlk-eWONijWNeFEa0liaNHxB2ZoeF87DVgRQXvPMhyW1wqO-xudeO2U0ViqLGKxjz9IlCtRV7JICfRpfpV2h-ihXgrwDYf1VWvWTc9YvFY-Bn6UqODUDvkVVCDv_si_g0l6gdE8INEJfa1IOy1e8bhoymMVoK0zjTuKYOxM7OLi4r7D_skyW61PfDcMoxxhs_wuyFjGiucHyUgpTyRJ8ymepx6GfXGDhZ0HMlovuLYJmFmuFlHrdTfDK_S_BpiFtrwyvoQmh6DcAdrLlBL64rMMBEp53Pras2Pc2J8AndHdyqwejl5y3wgJoKtzHpLjGaaj_sEaiITRs3abweOQuDwV-fZ5CStO_suapliwDNGe_hbq0JZdlbObLffrNJXrbtN6KzW4Irg1z8EUmhRRt0RSxu_acqL7qYly19OUzkj27kVlY4e48DI-Da_uiJ_u05ZGjM4w4io=w1201-h801-no?authuser=0"
                    />

                </div>
            
            </div>
            
                <div className='home__footer' >
                    {
                        Footercolumn.map((item,index)=> {
                            return(
                                <li key={index} className={item.cName}>
                                    <strong className="footer__title">{item.title}</strong>
                                    <div className="footer__option"><p>{item.opt1}</p> {item.icon1} </div>
                                    <div className="footer__option"><p >{item.opt2}</p> {item.icon2}</div>
                                    <div className="footer__option"><p>{item.opt3}</p> {item.icon3}</div>
                                </li>
                            );
                        })
                    }
                </div>
            

        </div>
    )
}

export default Home
