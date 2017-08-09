import $ from 'jquery';
import { _, Backbone } from 'backbone';
import TodoModel from './TodoModel';
import TodoCollectionView from './TodoCollectionView';

// backbone view for one todo
const TodoModelView = Backbone.View.extend({
  model: new TodoModel(),

  tagName: 'tr',

  initialize: () => {
    this.template = _.template($('.todo-list-template').html());
    this.todoCollectionView = new TodoCollectionView();
  },

  events: {
    'click .edit-todo': 'edit',
    'click .delete-todo': 'delete',
    'click .update-todo': 'update',
    'click .cancel': 'cancel',
  },

  edit: () => {
    $('.edit-todo').hide();
    $('.delete-todo').hide();
    this.$('.update-todo').show();
    this.$('.cancel').show();

    const author = this.$('.author').html();
    const title = this.$('.title').html();
    const due = this.$('.due').html();

    this.$('.author').html(`<input class="form-control update-author-input" value='${author}'/>`);
    this.$('.title').html(`<input class="form-control update-title-input" value='${title}'/>`);
    this.$('.due').html(`<input class="form-control update-due-input" value='${due}'/>`);
  },

  update: function update() {
    this.model.set('author', this.$('.update-author-input').val());
    this.model.set('title', this.$('.update-title-input').val());
    this.model.set('due', this.$('.update-due-input').val());

    this.model.save(null, {
      success: () => {},
      error: () => {},
    });
  },

  cancel: () => {
    this.todoCollectionView.render();
  },

  delete: () => {
    this.model.destroy({
      success: (res) => {
        console.info(res);
      },
      error: () => {},
    });
  },

  render: () => {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});

export default TodoModelView;
