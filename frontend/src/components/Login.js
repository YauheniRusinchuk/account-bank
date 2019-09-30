import React from 'react'


function Login() {
    return (
        <div className='login_container'>
            <div className='login_wrapper'>
                <div className='login_wrapper_body'>
                    <form>
                        <p>ВОЙТИ В АККАУНТ</p>
                        <input type='email' placeholder="Ваша почта ..." />
                        <input type='password' placeholder="Ваш пароль ..." />
                        <button>ВОЙТИ</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
