import React from 'react';
import Button from "../common/Button/Button";

const Item = ({id, name, username}) => {
    return (
        <li className="flex justify-between items-center gap-x-6 py-3">
            <div>{name} - ({username})</div>
            <div className="flex justify-between gap-x-6">
                <Button route={`posts/${id}`}>Posts</Button>
                <Button route={`albums/${id}`}>Albums</Button>
            </div>
        </li>
    )
}

const UserList = ({users}) => {
    return (
            <ul role="list" className="divide-y divide-gray-10">
                {users.map((user) => <Item key={user.id} {...user}/>)}
            </ul>
    );
};

export default UserList;