import React, {useContext, useReducer} from 'react'

const AppContext = React.createContext();

const initialState = {
 showNav : false
}

const reducer = (state,action) => {
 if(action.type = "TOGGLE_NAV"){
  return {
   ...state,
   showNav : !(state.showNav)
  }
 }

 throw new Error("No Matching Type")
}

const AppProvider = ({children}) => {

 const [state,dispatch] = useReducer(reducer,initialState);



 return (
  <AppContext.Provider value={{dispatch,...state}}>
   {children}
  </AppContext.Provider>
 );
}

const useGlobalContext = () => {
 return useContext(AppContext);
}

export {useGlobalContext, AppProvider}