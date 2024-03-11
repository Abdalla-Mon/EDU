import { Client } from "@elastic/elasticsearch";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector"; // const client = Client(

// const client = Client(
//   "main",
//   "https://6aec9ca46ed5408d922a6b08e0459821.us-central1.gcp.cloud.es.io:443",
//   "M1hsbkw0NEIxeUQzcUxUUVduQXY6TzJpdTFuOGpRb2VlVWdSWWEtcVE4Zw=="
// );
const client = new Client({
  node: " https://6aec9ca46ed5408d922a6b08e0459821.us-central1.gcp.cloud.es.io:443",
  auth: {
    apiKey: "OW5tOUw0NEIxeUQzcUxUUXhuQmI6b2hzY0xwUHZSNXlBTkFQc3lvbnhVQQ==",
  },
});

// const url = 'https://381a3a3953d9433fbfd223cc12081b31.ent-search.us-central1.gcp.cloud.es.io/api/as/v1/engines/main/documents';
//
// async function fetchData() {
//     const results = (await client().query("").search()).hits.hits
//    const data= results.map(result => {
// return result._source})
//
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer private-kfrpr698freaomjoiv3opae5'
//         },
//         body: JSON.stringify(data)
//     })
//           .then(response => response.json())
//           .then(data => console.log(data))
//           .catch((error) => console.error('Error:', error));
//
// }
const connector = new AppSearchAPIConnector({
  searchKey: "search-n1pkbi6csyiq98qpjidg1qhs",
  engineName: "main_app_search",
  hostIdentifier: "private-kfrpr698freaomjoiv3opae5",
});

export async function GET(request) {
  const { searchParams } = request.nextUrl;
  let q = searchParams.get("q");
  // if (!q) {
  //   q = "";
  // }
  // const url =
  //   "https://6aec9ca46ed5408d922a6b08e0459821.us-central1.gcp.cloud.es.io:443/_application/search_application/main/_search";
  //
  // async function fetchData() {
  //   const response = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       apiKey: "BM1hsbkw0NEIxeUQzcUxUUVduQXY6TzJpdTFuOGpRb2VlVWdSWWEtcVE4Zw==",
  //     },
  //     body: JSON.stringify({
  //       query: {
  //         match_all: {},
  //       },
  //     }),
  //   });
  //   const data = await response.json();
  //   return data;
  // }

  // const newData = await fetchData();
  const elaticSearchParams = {
    index: "main",
    body: {
      query: {
        match: {
          title: q,
        },
        // multi_match: {
        //   query: q,
        //   fields: ["abstract", "title"],
        // },
      },
    },
  };
  const data = await client.search(elaticSearchParams);
  const documents = data.hits.hits.map((hit) => hit._source);

  return Response.json(documents);
}
