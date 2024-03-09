import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

export interface IAuthContextProps {
  user: any | any;
  userWallet: string | null;
  userBalance: any;
  userCurrency: string;
  setLoading:any;
  loading:any;
  userRoles:any, setUserRoles?(user: string | null): void;
  setUserBalance?(balance: any | null): void;
  setUserWallet?(wallet: string | null): void;
  setUser?(user: string | null): void;
  setUserCurrency?(user: string | null): void;
}

const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

interface IAuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: FC<IAuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<any>();
  const [userBalance, setUserBalance] = useState<any>(null);
  const [userCurrency, setUserCurrency] = useState<any>(null);
  const [userWallet, setUserWallet] = useState<any>(null);
  const [loading, setLoading] = useState(true); 
  const [userRoles, setUserRoles] = useState<any>(null);

  useEffect(() => {
    if (user?.user?.walletAddress) {
      setUserWallet(user.user.walletAddress);
    }
    if (user?.user?.roles) {
      setUserRoles(user.user.roles);
    }
    console.log("rol", userWallet);
  }, [user]);
  

  const value = useMemo(
    () => ({
      user,
      userWallet,
      setUserWallet,
      setUser,
      userBalance,
      setUserBalance,
      userCurrency,
      setUserCurrency,setLoading,loading,userRoles, setUserRoles
    }),
    [user, userWallet]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
