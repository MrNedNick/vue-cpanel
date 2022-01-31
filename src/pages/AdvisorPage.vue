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

    <div class="table-wrapper">
      <div class="table-title">Tasks ({{ $store.state.tasks.length }})</div>
      <v-data-table
        :headers="headers"
        :items="$store.state.tasks"
        :items-per-page="10"
        class="table elevation-0"
      >
      </v-data-table>
    </div>
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
      curentDate: "",
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
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length == 0) return;

      let today = new Date();
      this.curentDate = new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(today);

      this.$store.state.tasks.push({
        id: this.idForTodo,
        name: this.newTodo,
        priority: "High",
        state: "Done",
        date: this.curentDate,
        messages: "Jakob Rosser",
      });

      this.newTodo = "";
      this.idForTodo++;
    },
  },
};
</script>

<style lang='scss'>
.advisor-wrapper {
  margin-top: 100px;
  width: 1328px;
}
.advisor-title {
  font-family: Source Sans Pro;
  font-weight: normal;
  font-size: 28px;
  line-height: 35px;
  color: #05122d;
  font-family: Source Sans Pro;
}
.todo-input {
  width: 448px;
  height: 40px;
  padding: 10px 40px;
  font-size: 18px;
  margin-bottom: 16px;
  border: 1px solid rgba(26, 44, 89, 0.08);
  background: rgba(26, 44, 89, 0.04);
  background-image: url("../assets/search.png");
  background-repeat: no-repeat;
  background-position: 10px;
  font-family: Source Sans Pro;
  font-size: 16px;
  line-height: 166%;
  color: #05122d;
  margin-top: 30px;
  margin-bottom: 30px;
}
.todo-button {
  width: 40px;
  border-radius: 6px;
  border: 1px solid #3366ff;
  background-color: #3366ff;
  margin-bottom: 4px;
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
.table-wrapper {
  background-color: white;
}
.table-title {
  padding-top: 16px;
  padding-left: 16px;
  padding-bottom: 6px;
  font-family: Source Sans Pro;
  font-weight: 600;
  font-size: 16px;
  line-height: 166%;
  color: #05122d;
  opacity: 0.6;
}
.v-data-table-header {
  color: #05122d;
  opacity: 0.6;
}
.table .text-start {
  font-family: Source Sans Pro;
  font-size: 14px;
  line-height: 166%;
  color: #05122d;
  opacity: 0.6;
}
.table tbody tr {
  height: 72px;
}
.table tbody tr:hover {
  cursor: pointer;
}
.table tr th:first-child {
  padding-left: 50px !important;
}
.table tr td:first-child {
  font-size: 16px;
  color: #3366ff;
  opacity: 1;
  padding-left: 50px !important;
}
.v-data-footer {
  font-family: Source Sans Pro;
  font-size: 12px;
  line-height: 15px;
  color: #05122d;
  mix-blend-mode: normal;
  opacity: 0.6;
}
</style>
