export const getFavItems = () => {
    const data = localStorage.getItem('favorite')
    const cat = data ? JSON.parse(data) : []
        return cat
    
}