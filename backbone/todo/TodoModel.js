import Backbone from 'backbone';

// backbone model
const TodoModel = Backbone.Model.extend({
  defaults: {
    author: '',
    title: '',
    due: '',
  },
});

export default TodoModel;
