import React, {useState} from 'react'


function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function submitHandler(e) {
        e.preventDefault();
        console.log("CLICK SUBMIT LOGIN")
    }


    return (
        <div className='login_container'>
            <div className='login_wrapper'>
                <div className='login_wrapper_body'>
                    <form onSubmit={submitHandler}>
                        <p>ВОЙТИ В АККАУНТ</p>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="Ваша почта ..." />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder="Ваш пароль ..." />
                        <button>ВОЙТИ</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
