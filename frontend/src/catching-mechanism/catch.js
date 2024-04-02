export const setCatch = (key,user) =>{
    localStorage.setItem(key,user);
}
export const getCatch = (key) =>{
    return localStorage.getItem(key);
}