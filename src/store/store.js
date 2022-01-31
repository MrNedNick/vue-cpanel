import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
 
export default new Vuex.Store({
    state: {
        tasks: [
            {
              id: 1,
              name: "Prüfe deine Textoptimierungs-Analysen",
              priority: "Medium",
              state: "Open",
              date: "20 Apr 2021",
              messages: "Jakob Rosser",
            },
            {
              id: 2,
              name: "H1 Content",
              priority: "Low",
              state: "In progress",
              date: "20 Apr 2021",
              messages: "Jakob Rosser",
            },
            {
              id: 3,
              name: "H1 Content",
              priority: "High",
              state: "Done",
              date: "20 Apr 2021",
              messages: "Jakob Rosser",
            },
          ],
    },
    getters: {},
    mutations: {},
    actions: {

    }

})