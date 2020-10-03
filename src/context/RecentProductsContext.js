import React from 'react';

export const Context = React.createContext();

const RecentProductsProvider = ({ children }) => {
  const [recent, setRecent] = React.useState([]);

  return (
    <Context.Provider value={[recent, setRecent]}>{children}</Context.Provider>
  );
};

export default RecentProductsProvider;
