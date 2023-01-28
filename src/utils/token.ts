export const updateToken = (token: string) => {
    return localStorage.setItem('pizza-app-token', token);
};

export const getToken = () => {
    return localStorage.getItem('pizza-app-token');
};

export const removeToken = () => {
    localStorage.removeItem('pizza-app-token');
};
