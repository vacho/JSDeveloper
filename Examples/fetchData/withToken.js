// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQBWd5YpNASQyTqT-DGlwGHJlvEtYgtZA2SoibkSdsJlb94uW-Dgw4zLyqrpLhiV4SQkLmHfhe9lDC6PrJ8uZhxMFecojkEyJuyup3W8C7t7q8PsT0xw61JtlA-4kzibNtxNR2DbMhS03zIvuzYjaMC33hk3ukdTPnf2tBxZF8HGx7VnaWMCPovqIcBz81vq0T4JbvjbWd8nZGQH5igp148mFAsQLYEErExBGPd-zghfzuaUEtuJILfN_-JzZEtoAwMA6i-es4ucb57nATX576FdCrw1NR6vDKKUi83EgQ';
const baseUrl = 'https://api.spotify.com/';

async function fetchWebApi(endpoint, method, body) {
  try {
    const res = await fetch(`${baseUrl}${endpoint}`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
        method,
        body:JSON.stringify(body)
    });
    return await res.json();
  }
  catch (error) {
    console.error(`ERROR MANAGED: ${error}`);
    return null;
  }
}

async function getTopTracks(){
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);