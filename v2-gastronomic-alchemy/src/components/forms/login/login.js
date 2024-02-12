import './login.css'
function Login(){

    

    return(
    <div className="global">
        <div className='login-wrapper'>
            <h1>Login</h1>
            <form className="login-form">
                <p>Email</p>
                <input type="text" name="email" className="email-login"/>
                <p>Password</p>
                <input type="password" name="password" className="password-login"/>
                <button class="">LOGIN</button>
                <p className="register-link"> Need an account?
                <a href="#Login">Register</a>
                </p>
            </form>
        </div>
    </div>
    )
}

export default Login;