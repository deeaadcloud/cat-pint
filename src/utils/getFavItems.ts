// Функция создана для хранения элементов в локальном хранилище браузера
export const getFavItems = () => {
    const data = localStorage.getItem('favorite')
    const cat = data ? JSON.parse(data) : []
        return cat
}