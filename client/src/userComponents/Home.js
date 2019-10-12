import React from 'react' 
import { NavLink } from 'react-router-dom'


class Home extends React.Component {


    render() {
        return (
            <div>
            < NavLink to='/login'><button>Login</button> </NavLink>
            < NavLink to='/signup'><button>SignUp</button> </ NavLink>
            </div>
        )
    }


}


export default Home 