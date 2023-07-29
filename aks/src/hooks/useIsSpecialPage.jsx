import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useIsSpecialPage = () => {
    const location = useLocation();
    const [isSpecialPage, setIsSpecialPage] = useState(false);
  
    useEffect(() => {
      setIsSpecialPage(location.pathname !== '/');
    }, [location]);
  
    return isSpecialPage;
  };
  
  export default useIsSpecialPage;