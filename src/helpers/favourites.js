export const toggleFavourites = (id, user) => {

    const userInfo = JSON.parse(localStorage.getItem(user))

    const newFavourites = userInfo.favs.includes(id) ?
        userInfo.favs.filter(item => item !== id) :
        [...userInfo.favs, id]

    const updatedUser = JSON.stringify({ ...userInfo, favs: newFavourites })

    localStorage.setItem(user, updatedUser)
}

export const isIdinFavourites = (id, user) => {
    const userInfo = JSON.parse(localStorage.getItem(user))

    return userInfo.favs.includes(id)
}