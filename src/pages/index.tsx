import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Table } from 'reactstrap';

import { Headder } from "../components/Header";

import api from '../services/api';

import microservice from '../services/microservice';

export default function Home() {

  const [url, setUrl] = useState('');
  const [urlShortener, setUrlShortener] = useState('');
  const [urls, setUrls] = useState([]);

  useEffect(()=>{
      async function loadUrls() {
          const response = await api.get('/urlshorteners');
          setUrls(response.data);
      }
      loadUrls();
    },[url]);

  async function handleSubmit(e) {
    e.preventDefault();

    setUrlShortener('https://is.gd/Y2NUhd');

    if (url !== "") await api.post('/urlshorteners', { id: Math.floor(Math.random() * 1000), url: url });

    setUrl('');
  }

  return (
    <div>
      <Headder />
      <main className="container">
        {urlShortener.length > 0 ?( <h1>{urlShortener}</h1> ):(<></>)}

        <form>
            <input type="text" value={url} onChange={e => setUrl(e.target.value)}/>
            <button onClick={handleSubmit}>Shorten!</button>
        </form>

        <Table striped>
          <thead>
            <tr>
              <th>
                Urls
              </th>
              <th>
                Accssed
              </th>
            </tr>
          </thead>
          <tbody>
            {urls.map(url => (
              <tr key={url.id}>
                  <td>{url.url}</td>
                  <td>2</td>
              </tr>
            ))}
          </tbody>
        </Table>

      </main>
    </div>
  )
}
