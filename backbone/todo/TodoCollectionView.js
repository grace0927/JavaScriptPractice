import $ from 'jquery';
import * as _ from 'underscore';
import Backbone from 'backbone';
import TodoView from './TodoView';

// backbone view for all todos
const TodoCollectionView = Backbone.View.extend({
  initialize: (model) => {
    self.model = model;

    // attach listener
    self.model.on('add', self.render, self);
    self.model.on('change', () => {
      setTimeout(() => {
        self.render();
      }, 30);
    }, self);
    self.model.on('remove', self.render, self);
    self.model.fetch({
      success: () => {},
      error: () => {},
    });

    self.$el = $('.todo-list');
  },

  render: () => {
    const collectionView = self.$el;
    collectionView.html('');

    _.each(self.model.toArray(), (todo) => {
      collectionView.append((new TodoView({
        model: todo,
        todoCollectionView: collectionView,
      })).render().$el);
    });

    return self;
  },
});

export default TodoCollectionView;
