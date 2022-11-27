import AppInsertarDatos from "./firebase/AppInsertarDatos";
import AppLeerDatos from "./firebase/AppLeerDatos";

function App() {
  return (
    <div className="container">
      <h1>CRUD con Firebase</h1>
      <div className="flex-row">
        <div className="flex-large">
          <AppInsertarDatos/>
        </div>
        <div className="flex-large">
          <h2>Ver usuarios</h2>
          <AppLeerDatos/>
        </div>
      </div>
    </div>
  );
}

export default App;
