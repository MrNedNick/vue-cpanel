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

    <v-btn class="todo-button ml-5 text-capitalize" outlined @click="addTodo">
      <v-icon> mdi-plus </v-icon>
    </v-btn>

    <v-data-table
      :headers="headers"
      :items="tasks"
      :items-per-page="5"
      class="elevation-1"
    >
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      newTodo: "",
      idForTodo: 4,
      beforeEditCache: "",
      headers: [
        {
          text: "Topic",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Priority", value: "priority" },
        { text: "State", value: "state" },
        { text: "Create Date", value: "date" },
        { text: "Messages", value: "messages" },
      ],
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
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length == 0) return;

      this.tasks.push({
        id: this.idForTodo,
        name: this.newTodo,
        priority: "High",
        state: "Done",
        date: "20 Apr 2021",
        messages: "Jakob Rosser",
      });

      this.newTodo = "";
      this.idForTodo++;
    },
  },
};
</script>

<style lang='scss'>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");

.advisor-wrapper {
  margin-top: 100px;
  width: 1328px;
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

.tasks-wrapper {
  background-color: white;
}
</style>
