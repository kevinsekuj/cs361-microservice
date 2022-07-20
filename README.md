# Jikan Anime/Manga microservice

## Usage

First time

    npm install

Every time

     npm start

The microservice will now be accessible at http://localhost:3000 by default.

### Requesting/Receiving Data

This microservice leverages the Jikan API to return data about a user-supplied anime/manga. Queries are made with the query string `?title=<string>`.

**Endpoints**

`/anime `
`/manga`

**Example Request** (JavaScript Fetch API)

    fetch('http://localhost:3000/anime?title=shingeki-no-kyojin)
      .then(response => response.json())
      .then(data => console.log(data));

**Example Response**:

    data:
    [
        {
            mal_id:  16498,
            title:  "Shingeki no Kyojin",
            title_english:  "Attack on Titan",
            title_japanese:  "進撃の巨人",

    		...
    	}
    ]

## UML Sequence Diagram

```mermaid
sequenceDiagram
Alice ->> Bob: Hello Bob, how are you?
Bob-->>John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

Bob-->Alice: Checking with John...
Alice->John: Yes... John, how are you?
```
