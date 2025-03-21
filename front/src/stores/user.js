import { defineStore } from 'pinia'
import router, {setRoutes} from "@/router";

export const useUserStore = defineStore('manager', {
    state: () => ({
        managerInfo: {}
    }),
    getters: {
        getUserId() {
            return this.managerInfo.user ? this.managerInfo.user.id : 0
        },
        getUser() {
            return this.managerInfo.user || {}
        },
        getBearerToken() {
            return this.managerInfo.token ? 'Bearer ' + this.managerInfo.token : ''
        },
        getToken() {
            return this.managerInfo.token || ""
        },
        getMenus() {
            return this.managerInfo.menus || []
        },
        getAuths() {
            return this.managerInfo.auths.length ? this.managerInfo.auths.map(v => v.auth) : []
        }
    },
    actions: {
        setManagerInfo(managerInfo) {
            this.managerInfo = managerInfo
            // Setting up routing
            setRoutes(managerInfo.menus)
        },
        setUser(user) {
            this.managerInfo.user = JSON.parse(JSON.stringify(user))
        },
        logout() {
            localStorage.removeItem('manager')
            router.push('/login')
        }
    },
    // Enable data persistence
    persist: true
})
