import $ from 'jquery';
import * as _ from 'underscore';
import Backbone from 'backbone';

// backbone view for one todo
const TodoModelView = Backbone.View.extend({
  initialize: (data) => {
    self.template = _.template($('.todo-list-template').html());
    self.todoCollectionView = data.todoCollectionView;
    self.model = data.model;
    self.$el = $('<tr></tr>');
    self.events = {
      'click .edit-todo': 'edit',
      'click .delete-todo': 'delete',
      'click .update-todo': 'update',
      'click .cancel': 'cancel',
    };
  },

  edit: () => {
    $('.edit-todo').hide();
    $('.delete-todo').hide();
    self.$('.update-todo').show();
    self.$('.cancel').show();

    const author = self.$('.author').html();
    const title = self.$('.title').html();
    const due = self.$('.due').html();

    self.$('.author').html(`<input class="form-control update-author-input" value='${author}'/>`);
    self.$('.title').html(`<input class="form-control update-title-input" value='${title}'/>`);
    self.$('.due').html(`<input class="form-control update-due-input" value='${due}'/>`);
  },

  update: () => {
    self.model.set('author', self.$('.update-author-input').val());
    self.model.set('title', self.$('.update-title-input').val());
    self.model.set('due', self.$('.update-due-input').val());

    self.model.save(null, {
      success: () => {},
      error: () => {},
    });
  },

  cancel: () => {
    self.todoCollectionView.render();
  },

  delete: () => {
    self.model.destroy({
      success: (res) => {
        console.info(res);
      },
      error: () => {},
    });
  },

  render: () => {
    const todo = self.model.toJSON();
    const view = self.template(todo);
    self.$el.html(view);

    return self;
  },
});

export default TodoModelView;
