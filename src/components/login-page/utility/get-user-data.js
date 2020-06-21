const getUserData = async (Authorization, setUser) => {
  const response = await fetch('https://jogtracker.herokuapp.com/api/v1/auth/user', {
    headers: {
      Authorization
    }
  });
  if (response.status !== 200) throw new Error("User data has not be gotten");
  const { response: user } = await response.json();
  
  setUser(user);
}

export default getUserData;
