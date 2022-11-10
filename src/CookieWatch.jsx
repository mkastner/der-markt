import styles from './CookieWatch.module.css';
import { For, createSignal } from 'solid-js';

function fetchCookies() {
  const filteredCookies = document.cookie
    .split('; ')
    .map((c) => c.split('='))
    .filter((c) => c[0]);
  return filteredCookies.concat([['a', 1]]);
}

function defaultDate(...args) {

  let date;

  if (args.length) {
    date = new Date(...args);
  } else {
    date = new Date();
  }

  const isoString = date.toISOString().replace(/\.\d{3}Z$/ig, '');
  return isoString;
}

function createCookie({ key, value }) {
  document.cookie[key] = value;
}

function CookieWatch() {
  console.log('fetchCookies()', fetchCookies());

  const rawCookies = fetchCookies();

  const [cookies, setCookies] = createSignal(rawCookies);
  const [newKey, setNewKey] = createSignal('');
  const [newValue, setNewValue] = createSignal('');

  const addCookie = () => {
    console.log('newKey', newKey());
    if (newKey() && newValue()) {
      return setCookies([...cookies(), [newKey, newValue]]);
    }
  };

  const removeCookie = (index) => {
    //return setCookies([...cookies().slice(index, index + 1)]);
    cookies().splice(index, 1);
    return setCookies([...cookies()]);
  };

  return (
    <div class={styles.CookieWatch}>
      <ul>
        <For each={cookies()}>
          {(cookie, index) => (
            <li>
              {cookie[0]}: {cookie[1]}
              <input type="button" onClick={() => removeCookie(index)}>
                X
              </input>
            </li>
          )}
        </For>
      </ul>
      <label for="new-key">Neuer Schlüssel</label>
      <input
        placeholder="Schlüssel"
        id="new-key"
        type="text"
        onChange={(e) => setNewKey(e.target.value)}
      />
      <br />
      <label for="new-key">Neuer Wert</label>
      <input
        id="new-value"
        placeholder="Wert"
        type="text"
        onChange={(e) => setNewValue(e.target.value)}
      />
      <br />
      <label for="new-date">Gültig bis</label>
      <input
        id="new-date"
        type="datetime-local"
        value={defaultDate()}
      />
      <button onClick={addCookie}>Eigenen Cookie anlegen</button>
    </div>
  );
}

export default CookieWatch;
