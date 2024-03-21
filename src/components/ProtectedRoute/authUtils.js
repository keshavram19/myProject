export const isAuthenticated = () => {
    const token = sessionStorage.getItem("adminloginToken");
    const expireTime = sessionStorage.getItem("adminexpireTime");
    // Ensure both token and expireTime are present and not expired
    return token && expireTime && new Date().getTime() < parseInt(expireTime, 10);
};

export const handleTokenExpiration = (navigate) => {
    if (!isAuthenticated()) {
        navigate("/admin/login");
    } else {
        const expireTime = parseInt(sessionStorage.getItem("adminexpireTime"), 10);
        const timeRemaining = expireTime - new Date().getTime();

        if (timeRemaining <= 0) {
            // Token has expired, remove it and navigate to login
            sessionStorage.removeItem("adminloginToken");
            sessionStorage.removeItem("adminexpireTime");
            navigate("/admin/login");
        } else {
            // Token is present and not expired, set timeout for expiration
            const expireTimeout = setTimeout(() => {
                sessionStorage.removeItem("adminloginToken");
                sessionStorage.removeItem("adminexpireTime");
                navigate("/admin/login");
            }, timeRemaining);
            return () => clearTimeout(expireTimeout);
        }
    }
};
