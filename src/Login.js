import React,{useState} from 'react';
import './Login.css';
import {Link,useHistory}   from 'react-router-dom';
import { auth } from './firebase';
function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();
    const signIn = e=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then( auth =>{ if(auth) {history.push('/')}}).catch((error)=> alert(error.message));
    }
    const creteAccount =e=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then( (auth)=> {history.push('/')} ).catch( (error)=> alert(error.message));
        if(auth){
            history.push('/');
        }
    }
    return (
        <div className='login' >
            <Link to ='/'>
            <img className='login__image' 
                 src='https://lh3.googleusercontent.com/hgPEA4dzC3OedtHHjBqK55U8XitFLOhkfE0UKG8tJ9oS-Np5Z-R3vi8p1Y1_0mffNMR-mQieRJy8pRYvSvgpMvQGEOBVTKMa7j2Tsz-ZVmyoe4JSY0MEnQ6hCijg505QiU--U2-4B4EL-hXtreAAcNjy1LSLBNLt1_LP4_o8r8z4hGojBggRaPOl-_CE9y1efHT3GPLrb-IRr9D29_6328HGl1kQeHslDY--nTllzrXorVjqMjoyiqR0OaXwrDtw2JPzYR5QBm4oj4vWILlkuFkY0DqX6RPHVlmtPBHYkUD5lepU9HxDCwUuQNmaAuC_Tmx5t0PhQ42RmKjkafHj_HO5Ib3-b2exwFjWWWIJ3LduabvnlP7KlU166xyXS7R9_7T9EjJLoBRpzT_gE1mxy27WKRAam6H6QZgXGVZ3IgIsS5YBwqLOgJP0zG0aBEf00iU3uQuMT-0y13LZQrCKMESCjc4sAQzpsjZZ-MoUp1FMNk5Crn1OYtXdsYl_ECz6U9-cNKjVP0ybwvSFH2VWTqS7ApyHClauPFH3TrtZCAvkHtxrsZtHchtNe5LvtP7DP1fAjMV5BFtzLcJwddsvSWSGLp_FOAw_n2czngUzmtgxLXn6Lm-GG88M5AD9aXHhA3JAeKbbBkT31rEd_0k069IrsikMiRrUA5LDKWgz6nrBiL234KO3fqaM8DuY=w827-h302-no?authuser=0'
                 alt=''
            />
            </Link>
            <div className="login__component">
                <div className="login__message">
                    <h1 className='login__text'>Best Place. </h1>
                    <h1> To Find</h1>
                    <h1>Your Favourite</h1>
                    <h1>Homemade</h1>
                    <h1> Products.</h1>
                </div>
                <div className="login__container">
                    <h1 className='login__title'>Sign-in</h1>
                        <form>
                            <h5>Email ID</h5>
                            <input type='text'placeholder="Type your Email ID here" value={email} onChange={e=> setEmail(e.target.value)}/>
                            <h5>Password</h5>
                            <input type='password' placeholder="Type your password here" value={password} onChange={e=> setPassword(e.target.value)}/>
                            <button className="login__button" type="submit" 
                                    onClick={signIn}>
                                    Sign-in
                            </button>
                        </form>

                        <p>
                            By signing-in you agree to our
                            Conditions of Use & Sale. Please check out our
                            privacy policy and cookies and our Interent-Based Ads
                        </p>
                        <p>Don't have an account?</p>
                        <button className="create__account" onClick={creteAccount}>Create Account</button>
                </div>
            </div>
        </div>
    ) 
}

export default Login
