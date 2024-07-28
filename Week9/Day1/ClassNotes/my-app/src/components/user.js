const Users = (props) => {
    console.log(props);
    const {id, name, username} = props.user;
    return (
        <div>
            <img src={`https://robohash.org/${id}size=150x150.`} />
            <h2>{name}</h2>
            <h2>{username}</h2>
        </div>
    )
}

export default Users;