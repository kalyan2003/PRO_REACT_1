/* eslint-disable react/no-unknown-property */
function AppTodo() {
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">
          <input type="text" placeholder="Enter" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success kg-button">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppTodo;
