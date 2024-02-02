/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
function Todoitem({ clgName, clgDate }) {
  return (
    <div class="todo-cont">
      <div class="row kg-row">
        <div class="col-6">{clgName}</div>
        <div class="col-4">{clgDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
