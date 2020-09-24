import React, { Component } from 'react'

import Search from './search'
import Payment from './payment'

class Home extends Component {

    render() {
        return (
            <div>
                <Search />
                <Payment />
            </div>
        )
    }
}

export default Home