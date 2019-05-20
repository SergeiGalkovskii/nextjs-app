import axios from "axios";

const About = ({ users }) => {
  return (
    <div>
      <h3>GitHub Users:</h3>
      ABOUT PAGE
    </div>
  );
};

About.getInitialProps = async () => {
  const { data: users } = await axios.get("https://api.github.com/users");
  return {
    users
  };
};

export default About;
