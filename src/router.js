import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@/pages/MainPage";
import KeywordsPage from "@/pages/KeywordsPage"
import ProjectsPage from "@/pages/ProjectsPage"
import AdvisorPage from "@/pages/AdvisorPage"
import AccountSettings from "@/pages/AccountSettings";
import GoPro from "@/pages/GoPro";
import Navigation from "@/pages/Navigation";
import Dashboard from "@/pages/Dashboard";

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
        component: AccountSettings,
    },
    {
        path: '/pro',
        component: GoPro,
    },
    {
        path: '/navigation',
        component: Navigation,
    },
    {
        path: '/dashboard',
        component: Dashboard,
    },
]

export default new VueRouter({
    mode: 'history',
    routes
})