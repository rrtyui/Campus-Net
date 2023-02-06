import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <form>
                <label>Usuario:</label>
                <br />
                <input type="text" />
                <br />
                <label>Contraseña:</label>
                <br />
                <input type="password" />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default App;
