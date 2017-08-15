import $ from 'jquery';
import Todo from './TodoModel';
import TodoCollection from './TodoCollection';
import TodoCollectionView from './TodoCollectionView';

// initial a collection
const todos = new TodoCollection();
const todosView = new TodoCollectionView();

$(document).ready(() => {
  todosView.initialize(todos);

  $('.add-todo').on('click', () => {
    const todo = new Todo({
      author: $('.author-input').val(),
      title: $('.title-input').val(),
      due: $('.due-input').val(),
    });

    todos.add(todo);

    todo.save(null, {
      success: (response) => {
        console.info(response);
      },
      error: () => {},
    });

    $('.author-input').val('');
    $('.title-input').val('');
    $('.due-input').val('');
  });
});
