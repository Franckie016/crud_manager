import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home
    },
    {
        name: "StudentList",
        path: "/studentList",
        component: () => import ("../views/StudentList.vue")
    },
    {
        name: "Form",
        path: "/form",
        component: () => import ("../views/Form.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router