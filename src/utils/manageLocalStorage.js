
export const getLocalStorage = key => {
   return localStorage.getItem(key)
}

export const setLocalStorage = value => {
    localStorage.setItem('lang', value)
}