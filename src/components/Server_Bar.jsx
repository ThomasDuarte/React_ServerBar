function Server_List() {
  return (
    <ul className="server-list">
      <li>
        <img src="https://via.placeholder.com/150" alt="Server 1" />
      </li>
      <li>
        <img src="https://via.placeholder.com/150" alt="Server 2" />
      </li>
      <li>
        <img src="https://via.placeholder.com/150" alt="Server 3" />
      </li>
      <li>
        <img src="https://via.placeholder.com/150" alt="Server 4" />
      </li>
      <li>
        <img src="https://via.placeholder.com/150" alt="Server 5" />
      </li>
      <li>
        <img src="https://via.placeholder.com/150" alt="Server 6" />
      </li>
      <li>
        <img src="https://via.placeholder.com/150" alt="Server 7" />
      </li>
      <li>
        <img src="https://via.placeholder.com/150" alt="Server 8" />
      </li>
      <li>
        <img src="https://via.placeholder.com/150" alt="Server 9" />
      </li>
    </ul>
  );
}

function Server_Bar() {
  return (
    <div className="server-bar">
      <div className="server-bar__header">
        <h1>Servers</h1>
      </div>
      <div className="server-bar__content">
        <Server_List />
      </div>
    </div>
  );
}

export default Server_Bar;