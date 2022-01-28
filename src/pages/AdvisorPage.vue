<template>
  <v-container class="advisor-wrapper">
    <h1 class="advisor-title">Advisor</h1>
    <input
      type="text"
      class="todo-input"
      placeholder="Add new task"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <v-btn
      class="todo-button ml-5 text-capitalize"
      outlined
      @click="addTodo"
    >
      <v-icon> mdi-plus </v-icon>
    </v-btn>
    <transition-group name="fade">
      <task-item
        v-for="(todo, index) in todos"
        :key="todo.id"
        :todo="todo"
        :index="index"
        :checkAll="!anyRemaining"
        @removedTodo="removeTodo"
        @finishedEdit="finishedEdit"
      />
    </transition-group>

    <!-- <div class="footer">
      <div>
        <label>
          <input
            type="checkbox"
            :checked="!anyRemaining"
            @change="checkAllTodos"
          />
          Check All</label
        >
      </div>

      <div>{{ remaining }} tasks left</div>
    </div> -->
    <!-- <v-app id="inspire">
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="290">
          <template v-slot:activator="{ on, attrs }">
            <transition name="fade">
              <button
                v-if="showClearCompleatedButton"
                class="todo-button clear-button"
                v-bind="attrs"
                v-on="on"
              >
                Clear Completed
              </button>
            </transition>
          </template>
          <v-card>
            <v-card-title class="text-h5"> Are you sure? </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">
                NO
              </v-btn>
              <v-btn color="green darken-1" text @click="clearCompleated">
                YES
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-app> -->
  </v-container>
</template>

<script>
import TaskItem from "../components/TaskItem.vue";

export default {
  name: "TodoList",
  components: {
    TaskItem,
  },
  data() {
    return {
      newTodo: "",
      idForTodo: 3,
      beforeEditCache: "",
      dialog: false,
      todos: [
        {
          id: 1,
          title: "Prüfe deine Textoptimierungs-Analysen",
          completed: false,
          editing: false,
        },
        {
          id: 2,
          title: "Prüfe deine Textoptimierungs",
          completed: false,
          editing: false,
        },
      ],
    };
  },
  computed: {
    remaining() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
    anyRemaining() {
      return this.remaining != 0;
    },
    showClearCompleatedButton() {
      return this.todos.filter((todo) => todo.completed).length > 0;
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length == 0) return;

      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
        editing: false,
      });

      this.newTodo = "";
      this.idForTodo++;
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    checkAllTodos() {
      this.todos.forEach((todo) => (todo.completed = event.target.checked));
    },
    clearCompleated() {
      this.todos = this.todos.filter((todo) => !todo.completed);
      this.dialog = false;
    },
    finishedEdit(data) {
      this.todos.splice(data.index, 1, data.todo);
    },
  },
};
</script>

<style lang='scss'>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");

.advisor-wrapper {
  margin-top: 100px;
}
.advisor-title {
  font-family: Source Sans Pro;
  font-size: 28px;
  line-height: 35px;
  color: #05122d;
}
.todo-input {
  width: 448px;
  height: 40px;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;
  border: 1px solid rgba(26, 44, 89, 0.08);
  background: rgba(26, 44, 89, 0.04);
  font-family: Source Sans Pro;
  font-size: 16px;
  line-height: 166%;
  color: #05122d;
}
.todo-button {
  width: 40px;
  border-radius: 6px;
  border: 1px solid #3366ff;
  background-color: #3366ff;
  & .v-btn__content {
    color: white;
    font-size: 16px;
  }
}
.v-btn:not(.v-btn--round).v-size--default {
    height: 40px;
    min-width: 40px;
}
.todo-button .theme--light.v-btn:hover::before {
  opacity: 1;
}
.todo-button .theme--light.v-btn:hover .v-btn__content {
  color: white;
}
.v-btn:before {
  background-color: #3366ff;
}

.clear-button {
  width: 150px;
  height: 25px;
  font-size: 12px;
}

.completed {
  text-decoration: line-through;
  color: grey;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border-top: 1px solid lightgrey;
  padding-top: 14px;
  margin-bottom: 14px;
  height: 30px;
}

.active {
  background: lightgrey;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
