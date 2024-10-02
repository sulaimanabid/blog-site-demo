"use server"

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 60 }, 
  });
  const users = await res.json();

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
