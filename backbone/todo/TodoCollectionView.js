import $ from 'jquery';
import { _, Backbone } from 'backbone';
import TodoCollection from './TodoCollection';
import TodoView from './TodoView';

// backbone view for all todos
const TodoCollectionView = Backbone.View.extend({
  model: TodoCollection,

  el: $('.todo-list'),

  initialize: () => {
    const self = this;

    this.model.on('add', this.render, this);

    this.model.on('change', () => {
      setTimeout(() => {
        self.render();
      }, 30);
    }, this);

    this.model.on('remove', this.render, this);

    this.model.fetch({
      success: (response) => {
        console.info(response);
      },
      error: () => {},
    });
  },

  render: () => {
    const self = this;

    this.$el.html('');

    _.each(this.model.toArray(), (todo) => {
      self.$el.append((new TodoView({ model: todo })).render().$el);
    });

    return this;
  },
});

export default TodoCollectionView;
