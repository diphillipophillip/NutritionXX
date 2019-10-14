import React from 'react'
import Navbar from '../userComponents/Navbar'
import AddPost from '../postComponents/AddPost'
import { connect } from 'react-redux'

class Dashboard extends React.Component {

    render() {
        return (
            <div>
                < Navbar />
                < AddPost user={this.props.user} />
            </div>
        )
    }


}

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(Dashboard) 