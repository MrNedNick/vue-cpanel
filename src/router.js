import Vue from 'vue'
import VueRouter from 'vue-router'
import KeywordsPage from "@/pages/KeywordsPage"
import ProjectsPage from "@/pages/ProjectsPage"
import AdvisorPage from "@/pages/AdvisorPage"

Vue.use(VueRouter)

const routes = [
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
]

export default new VueRouter({
    mode: 'history',
    routes
})