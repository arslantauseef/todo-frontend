import "../App.css";
export const Todos = () => {
  return (
      <div className="grid">
        <div>
          <div>
            <div>Todo</div>
            <button>Sign Out</button>
          </div>
          <div>
            <div>
              Welcome <span>User</span>
            </div>
            <div>Completed Count</div>
          </div>
          <form action="">
            <input type="text" placeholder="What needs to be done?" />
            <button>Add task</button>
          </form>
        </div>
      </div>
  );
};
