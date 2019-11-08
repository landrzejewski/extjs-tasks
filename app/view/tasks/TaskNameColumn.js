Ext.define("Tasks.view.tasks.TaskNameColumn", {
  extend: "Ext.grid.Column",
  xtype: "task-name-column",
  columnTemplate: new Ext.XTemplate(
    "<div class={completed}>{name}",
    '<tpl if="isCompleted">',
    " Is completed",
    "</tpl>",
    "</div>"
  ),
  defaultRenderer: function(name, meta, task) {
    const isCompleted = task.get("isCompleted");
    return this.columnTemplate.apply({
      name,
      isCompleted,
      completed: isCompleted ? "completed" : ""
    });
  }
});
