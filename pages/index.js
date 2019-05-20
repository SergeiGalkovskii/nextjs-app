import axios from "axios";

const Index = ({ users }) => {
  return (
    <div>
      <h3>GitHub Users:</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
};

Index.getInitialProps = async () => {
  const { data: users } = await axios.get("https://api.github.com/users");
  return {
    users
  };
};

export default Index;
