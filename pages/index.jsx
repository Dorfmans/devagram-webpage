import {useEffect, useState} from 'react';
import Home from "../components/home";
import Login from "../components/login";
import UserService from "../services/UserService";


const userService = new UserService();
const Index = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
      setLoggedIn(userService.loggedIn());
  }, []);

  if(loggedIn) {
    return (
      <Home />
    );
  }
    return (
      <Login 
        afterLogin={() => 
          setLoggedIn(true)}
      />
    );
};

export default Index;