// export default function User (props) {
//     let {user,id} = props
//     return(
//         <div>
//            User №{id + 1} :
//             <div>name: {user.name} -
//            age: {user.age}
//             status: {user.status.toString()}</div>
//         </div>
//     )
//
// }
import React, {Component} from 'react';

class User extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        let {user, id} = this.props
        return (
            <div>

                {
                    user.status && (
                        <div><strong>
                            User №{id + 1} :
                            <div>
                                name: {user.name} -
                                age: {user.age}
                                status: {user.status.toString()}
                            </div>
                        </strong></div>
                    )
                }
                {
                    !user.status &&  (<div>
                        User №{id + 1} :
                        <div>
                            name: {user.name} -
                            age: {user.age}
                            status: {user.status.toString()}
                        </div></div>)
                }

            </div>
        );
    }
}

export default User;
