Ext.define("Tasks.model.TaskModel", {
  extend: "Ext.data.Model",
  fields: [
    { name: "id", type: "int" },
    { name: "name", type: "string" },
    { name: "description", type: "string" },
    { name: "isCompleted", type: "boolean" },
    { name: "dueDate", type: "date", dateFormat: "timestamp" }
  ],
  proxy: {
    type: "secured-rest",
    url: "http://localhost:3000/tasks",
    writer: {
      writeAllFields: true
    }
  }
});
