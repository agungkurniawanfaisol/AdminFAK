import { Loader } from "Components";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { INC_HEADER, INC_POPOVER_MENU, INC_ROUTER, INC_SIDEBAR } from "Routes/Components";
import { FIRST_LOAD, FUNC_CEK_REDIRECT } from "Routes/Functions";
import GLOBAL_STORE from 'Store/GLOBAL_STORE'

const InitialState = {
  IS_LOADING: true,
  VAL_SIDEBAR: false,
  VAL_HALAMAN: [],
  VAL_TOGGLE_OPEN_MENU: false,
  VAL_MENU: [],
  VAL_STORAGE: {},
  VAL_URL: "",
  VAL_TOGGLE_SIDEBAR: false,
  VAL_TOGGLE_NOTIFICATION: false,
};

const NewRouter = () => {
  const Navigate = useNavigate();
  const Location = useLocation();
  const [StateValue, setStateValue] = useState(InitialState);
  const { IS_LOADING } = StateValue;

  const useGlobalStore = GLOBAL_STORE();

  const ChangeHandleState = (data, func) => {
    setStateValue((prev) => {
      return {
        ...prev,
        [func]: data,
      }
    })
  }

  useEffect(() => {
    FIRST_LOAD(StateValue, ChangeHandleState, useGlobalStore, Navigate)
  },
    // eslint-disable-next-line 
    []
  )

  useEffect(
    () => {
      FUNC_CEK_REDIRECT(ChangeHandleState, Navigate, Location)
    },
    // eslint-disable-next-line
    [Location],
  )

  const props = { StateValue, ChangeHandleState }


  return (
    <div className="h-screen overflow-hidden bg-slate-200 dark:bg-neutral-800 ">
      {IS_LOADING && <Loader />}
      <INC_HEADER {...props} />
      <INC_POPOVER_MENU {...props} />
      <div className="flex ">
        <INC_SIDEBAR {...props} />
        <INC_ROUTER {...props} />
      </div>
    </div>
  )
};

export default NewRouter;
