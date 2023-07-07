import React, {useCallback, useEffect, useState} from 'react';

import Loading from "../components/Loading";
import UserList from "../components/user/UserList";
import OrderSelect from "../components/OrderSelect";
import Search from "../components/Search";
import PageTitle from "../components/PageTitle";

const UsersPage = ({fetchInitialData, data}) => {
    const [users, setUsers] = useState(data)

    const [loading, setLoading] = useState(!data)

    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')

    const fetchUsers = useCallback(async () => {
        setLoading(true)

        const users = await fetchInitialData()

        setUsers(users)
        setLoading(false)
    }, [])

    useEffect(() => {
        !data && fetchUsers()
    }, [fetchUsers])

    if (loading) return <Loading/>

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const handleSort = (event) => {
        setSort(event.target.value)
    }

    const searchedUsers = users.filter(user => user.username?.toLowerCase().includes(search.toLowerCase()))

    const getSortedUsers = (users, sort) => {
        const sorted = [...searchedUsers].sort((user1, user2) => user1.username?.localeCompare(user2.username))

        if (sort === 'asc') {
            return sorted
        } else if (sort === 'desc') {
            return sorted.reverse()
        }

        return users;
    }

    const sortedUsers = getSortedUsers(searchedUsers, sort)

    return (
        <>
            <PageTitle>User page</PageTitle>
            <div className="flex justify-between mb-5">
                <Search value={search} onChange={handleSearch}/>
                <OrderSelect sort={sort} onChange={handleSort}/>
            </div>
            <div>
                <UserList users={sortedUsers}/>
            </div>
        </>
    );
};

export default UsersPage;