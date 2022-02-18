import React, { useContext, useState, useEffect } from "react"
import { fnc } from "../firebase"
import { httpsCallable,connectFunctionsEmulator } from "firebase-functions";

const FunctionsContext = React.createContext()

export function useFunctions() {
  return useContext(FunctionsContext)
}

let abc = {};
abc.addMessage = httpsCallable(fnc, 'addMessage');
export {abc};
