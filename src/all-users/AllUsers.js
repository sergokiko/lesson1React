import React, {Component} from 'react';
import {users} from "../data/data";
import User from "../user/user";

class AllUsers extends Component {

    render() {
        return (
            <div className='container'>
                {users.map((user, i) => {
                    return (
                        <div className='card' key={i}>
                            <User user={user} id={i} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default AllUsers;
