// helper 
export const signIn = async (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);

    const response = await fetch('https://wt31hwj1-8000.inc1.devtunnels.ms/api/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',                 
            'Accept': '*/*' 
        },            
        body: formData
    });

    const result = await response.json();
    return result;
};
export const isAuthenticated = () => {
    if (typeof window === 'undefined') {
        return false;
    }
    const userInfo = sessionStorage.getItem('info');
    return userInfo ? true : false;
};

