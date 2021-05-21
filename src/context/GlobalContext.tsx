// Import from dependencies
import React, { createContext, useReducer } from 'react';

// Import from components
import instance from '../api/apiConfig';

// Initialize a default state for the app
const initialState = {
    members: [],
    member: undefined,
    getMembers: () => {},
    addMember: () => {},
  };

  const appReducer = (state: any, action: any) => {
    switch (action.type) {
      case 'ADD_MEMBER':
        // when a case matches, the return will update the state
        return { ...state, members: action.payload };
      default:
        return state;
    }
  };

// Create Context from react
export const GlobalContext = createContext<InitialStateType>(initialState);

// Create Global provider which will feed state to the components
export const GlobalProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    // Actions = methods that run tasks for the app
    const getMembers = async () => {
        try {
          let { data } = await instance.get(`/user`);
          dispatch({ type: 'ADD_MEMBERS', payload: data });
        } catch (e) {
          console.log(e);
        }
      };
    
      const addMember = async (member: User) => {
        try {
          let { data } = await instance.post(`/user`, member);
          debugger;
          dispatch({ type: 'ADD_MEMBER', payload: data });
        } catch (e) {
          console.log(e);
        }
      };   
  
    return (
      <GlobalContext.Provider
        value={{
          members: state.members,
          member: state.member,
          getMembers,
          addMember      
        }}>
        {children} {/* <AppRouter/> */}
      </GlobalContext.Provider>
    );
  };