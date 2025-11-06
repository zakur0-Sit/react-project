import background from '../../assets/images/background.svg';
import './signup.css';

export function Signup()
{
    return (
        <div>
            <section className='login-section'>
                <header className='login-header'>
                    <a href="/" className='home-button'>Home</a>
                </header>
                <div className="back signup">
                    <h1>Sign Up</h1>
                    <form>
                        <div className='name'>
                            <label for="name">Full Name</label>
                            <br />
                            <input type="text" id="name" name="name" required placeholder='full name'/>
                        </div>
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
                        <div className='password'>
                            <label for="password">Confirm Password</label>
                            <br />
                            <input type="password" id="password" name="password" required placeholder='********'/>
                        </div>
                        <button type="submit" className='submit-button'>Sign Up</button>
                    </form>
                    <p>Already have an account? <a href="/login" className='green-a'>Login!</a></p>
                </div>
            </section>
        </div>
    )
}

export default Signup;