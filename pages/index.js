import axios from "axios";
import Link from "next/link";

const Index = ({ users }) => {
  return (
    <div>
      <h3>GitHub Users:</h3>
      <Link href="/about">about</Link>
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
