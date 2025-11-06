import './login.css';
import background from '../../assets/images/background.svg';

function Login()
{
    return (
        <div>
            <section className='login-section'>
                <header className='login-header'>
                    <a href="/" className='home-button'>Home</a>
                </header>
                <div className="back">
                        <h1>Log In</h1>
                        <form>
                            <div className='email'>
                                <label for="email">Email</label>
                                <br />
                                <input type="email" id="email" name="email" required placeholder='e-mail'/>
                            </div>
                            <div className='password'>
                                <label for="password">Password</label>
                                <br />
                                <input type="password" id="password" name="password" required placeholder='********'/>
                            </div>
                        
                            <button type="submit" className='submit-button'>Login</button>
                        </form>
                        <p>Don't have an account? <a href="/signup" className='green-a'>Register!</a></p>
                    </div>
            </section>
                
        </div>
    )
}

export default Login;