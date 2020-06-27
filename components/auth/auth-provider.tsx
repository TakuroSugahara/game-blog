import { useEffect, useState, createContext } from 'react'
import firebase from '../../lib/firebase'

const initialState = {
  login: null,
  signup: null,
  unsubscribe: null,
  currentUser: null,
}

// contextの作成
export const AuthContext = createContext(initialState)

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  const login = async (email: string, password: string, history) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      history.push('/')
    } catch (error) {
      alert(error)
    }
  }

  const signup = async (email: string, password: string, history) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      history.push('/')
    } catch (error) {
      alert(error)
    }
  }

  // 退会処理
  const unsubscribe = async (email: string, password: string, history) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      history.push('/')
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser)
  }, [])

  return (
    // Contextを使用して認証に必要な情報をコンポーネントツリーに流し込む。
    <AuthContext.Provider
      value={{
        login,
        signup,
        unsubscribe,
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
