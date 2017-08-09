import Backbone from 'backbone';

// backbone collection
const TodoCollection = Backbone.Collection.extend({
  url: 'todo/api',
});

export default TodoCollection;
