import $ from 'jquery';
import TodoModel from './TodoModel';
import TodoCollection from './TodoCollection';
import TodoCollectionView from './TodoCollectionView';

// initial a collection
const todos = new TodoCollection();
let todosView = new TodoCollectionView(todos);

$(document).ready(() => {
  todosView.render();

  $('.add-todo').on('click', () => {
    const todo = new TodoModel({
      author: $('.author-input').val(),
      title: $('.title-input').val(),
      due: $('.due-input').val(),
    });

    todos.add(todo);

    todo.save(null, {
      success: () => {},
      error: () => {},
    });

    todosView = new TodoCollectionView(todos);

    todosView.render();

    $('.author-input').val('');
    $('.title-input').val('');
    $('.due-input').val('');
  });
});
