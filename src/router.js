import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@/pages/MainPage";
import KeywordsPage from "@/pages/KeywordsPage"
import ProjectsPage from "@/pages/ProjectsPage"
import AdvisorPage from "@/pages/AdvisorPage"
import AccountSettingsPage from "@/pages/AccountSettingsPage";
import GoProPage from "@/pages/GoProPage";
import NavigationPage from "@/pages/NavigationPage";
import DashboardPage from "@/pages/DashboardPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/keywords',
        component: KeywordsPage,
    },
    {
        path: '/projects',
        component: ProjectsPage,
    },
    {
        path: '/advisor',
        component: AdvisorPage,
    },
    {
        path: '/account',
        component: AccountSettingsPage,
    },
    {
        path: '/pro',
        component: GoProPage,
    },
    {
        path: '/navigation',
        component: NavigationPage,
    },
    {
        path: '/dashboard',
        component: DashboardPage,
    },
]

export default new VueRouter({
    mode: 'history',
    routes
})