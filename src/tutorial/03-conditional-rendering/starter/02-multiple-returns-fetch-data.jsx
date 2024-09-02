import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }
  if (isError) {
    return <h2>There is an error</h2>;
  }

  return (
    <div>
      <img
        src={user.avatar_url}
        style={{ width: "150", borderRadius: "50%" }}
      />
      <div>
        <h2>{user.login}</h2>
        <h4>Works at {user.company}</h4>
        <p>{user.bio}</p>
      </div>
    </div>
  );
};
export default MultipleReturnsFetchData;
