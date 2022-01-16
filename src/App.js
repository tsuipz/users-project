import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (uName, uAge) => {
		setUsersList((prevUser) => {
			return [
				...prevUser,
				{
					name: uName,
					age: uAge,
					id: Math.random().toString(),
				},
			];
		});
	};

	return (
		<React.Fragment>
			<AddUser onAddUser={addUserHandler} />
			<UserList users={usersList} />
		</React.Fragment>
	);
}

export default App;
