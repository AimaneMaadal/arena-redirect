// The old address of Aurelia Legends: Rotom tells players the game has moved, with a button to the new site.
const NEW_SITE = 'https://aurelialegends.xyz/';

export default function App() {
  return (
    <main className="card">
      <img className="rotom" src="/rotom.png" alt="Rotom" width={120} height={128} />
      <div><span className="bubble">Bzzt! We moved!</span></div>
      <h1>NEW ADDRESS!</h1>
      <p>
        This is the old home of <span className="new">Aurelia Legends</span>. The game now lives on a new domain.
        Log in with the same account and your progress is waiting for you.
      </p>
      <a className="btn" href={NEW_SITE}>&#9654; PLAY AT AURELIALEGENDS.XYZ</a>
      <small>Update your bookmarks: aurelialegends.xyz</small>
    </main>
  );
}
