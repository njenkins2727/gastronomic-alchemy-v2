function Register(){
    return(
    <div className="global">
       <div className="global">
        <div className='register-wrapper'>
            <h1>Register</h1>
            <form className="register-form">
                <p>Email</p>
                <input type="text" name="email" className="email-register"/>
                <p>Password</p>
                <input type="password" name="password" className="password-register"/>
                <button class="">register</button>
                <p className="register-link"> Need an account? <a href="#Register">Register</a></p>
            </form>
        </div>
    </div>
    </div>
    )
}

export default Register;