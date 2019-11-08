Ext.define("Tasks.model.TaskModel", {
  extend: "Ext.data.Model",
  fields: [
    { name: "id", type: "int" },
    { name: "name", type: "string" },
    { name: "description", type: "string" },
    { name: "isCompleted", type: "boolean" },
    { name: "dueDate", type: "date", dateFormat: "timestamp" }
  ],
  validators: {
    name: { type: "presence", message: "Field is required" },
    description: { type: "length", message: "Field is required", min: 5 }
  },
  proxy: {
    type: "secured-rest",
    url: "http://localhost:3000/tasks",
    writer: {
      writeAllFields: true
    }
  }
});
