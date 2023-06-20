import '../UsersRegistered/UsersRegistered.css'

export const UsersRegistered = ({ registeredUsers, handleRemoveUser }) => {

    return (
        <div>
            <h1>Users registered:</h1>
            {registeredUsers.map((user) => (
                <ul key={user.password}>
                    <li>
                        <h3>{user.fullname}</h3>
                        <p>{user.email}</p>
                    </li>
                </ul>
            ))}

            <button className="removeButton" onClick={handleRemoveUser}>Remove Users</button>
        </div>
    )
}