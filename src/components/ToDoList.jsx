function ToDoList() {
  return (
    <div>
      <h1 className="bg-slate-700">Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul style={{ display: "block", backgroundColor: "blue" }}>
        <li style={{ backgroundColor: "red" }}>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </div>
  );
}

export default ToDoList;
