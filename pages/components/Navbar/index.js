import { NavLink } from 'react-router-dom'
import './index.scss';

const Navbar = () => {

    return (
        <div className='main'>
            <input type="checkbox" id="chk" aria-hidden="true" />
            <div className='signUp'>
                <form>
                    <label for="chk" aria-hidden="true" >Sign Up</label>
                    <input type="text" name='txt' placeholder='User Name' required="" />
                    <input type="email" name='email' placeholder='Email' required="" />
                    <input type="password" name='pswd' placeholder='Password' required="" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div className='login'>
                <form>
                    <label for="chk" aria-hidden="true" >Login</label>
                    <input type="email" name='email' placeholder='Email' required="" />
                    <input type="password" name='pswd' placeholder='Password' required="" />
                    <button>Login</button>
                </form>
            </div>
        </div>

    )
}