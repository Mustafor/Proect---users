import { createContext, useState, useEffect } from "react"

export const Context = createContext()

export const AuthContext = ({ children }) => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")) || false)

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token))
  }, [token])

  return (
    <Context.Provider value={{ token, setToken }}>{children}</Context.Provider>
  )
}
