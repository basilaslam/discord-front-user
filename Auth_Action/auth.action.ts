export const saveToken = (token: string) =>{
    localStorage.setItem('access_token',token)
}

export const getToken = (): string =>{
   let token = localStorage.getItem('access_token')
   return token!
}