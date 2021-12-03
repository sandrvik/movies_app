export const insertUser = (userObj) => {
    localStorage.setItem(userObj.userName, JSON.stringify({
        password: userObj.password,
        favs: []
    }))
}

export const isUserExists = (login) => {
    return localStorage.getItem(login) !== null
}
export const checkCreds = (creds) => {
    const user = JSON.parse(localStorage.getItem(creds.userName))
    return (user && (user.password === creds.password))
}