import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";
import { ApiRequest } from "../pages/api";
import AuthContext from "./AuthContext";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export interface ISettingsContextProps {
  settingsData: any;
  setSettingsData: any;
}
const SettingsContext = createContext<ISettingsContextProps>(
  {} as ISettingsContextProps
);
interface ISettingsContextProviderProps {
  children: ReactNode;
}
export const SettingsContextProvider: FC<ISettingsContextProviderProps> = ({
  children,
}) => {
  const [settingsData, setSettingsData] = useState<{
    SocialMedia: string;
    brand: {};
    displayName: string;
    birthday: string;
    email: string;
    country: string;
    phoneNumber: string;
    name: string;
    lastName: string;
    aboutMe: string;
    pronoun: string;
    customTags: [];
    userTags: [];
  }>({
    SocialMedia: "",
    displayName: "",
    brand: {},
    birthday: "",
    email: "",
    country: "",
    phoneNumber: "",
    lastName: "",
    name: "",
    aboutMe: "",
    pronoun: "",
    customTags: [],
    userTags: [],
  });
  const { user } = useContext(AuthContext);

  // const handleGetSettingsData = useCallback(async () => {
  //   user &&
  //     Cookies.get("accessToken") &&
  //     // (await ApiRequest.(login{ userId: user })
  //     //   .then((res: any) => {
  //     //     setSettingsData(res.data);
  //     //   })
  //     //   .catch((e) =>
  //     //     toast.error("An Error Occurred.", {
  //     //       position: "top-right",
  //     //       hideProgressBar: false,
  //     //       closeOnClick: false,
  //     //       pauseOnHover: true,
  //     //       draggable: false,
  //     //       progress: undefined,
  //     //       theme: "light",
  //     //       autoClose: 3000,
  //     //     })
  //     //   ));
  // }, [user]);
  // useEffect(() => {
  //   handleGetSettingsData();

  //   return () => {};
  // }, [handleGetSettingsData]);

  const value = useMemo(
    () => ({
      settingsData,
      setSettingsData,
    }),
    [settingsData]
  );
  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
SettingsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SettingsContext;
