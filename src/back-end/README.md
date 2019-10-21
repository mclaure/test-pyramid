## back-end
```
Simple API that provides soccer statistics using a public database
```
![Sync-Communication](https://user-images.githubusercontent.com/24611413/62910994-b8626400-bd50-11e9-923b-ef0d5d8f3c1f.jpg)

* [Source Data](https://www.kaggle.com/hugomathien/soccer) - real world sample data 
* [Data description](http://www.football-data.co.uk/notes.txt) - detailed data description
---
## Installing

1. Download the code
2. Run the following command:
```
    npm install
```
3. Run the following commnad to start the node server (default port 8000):
```
    npm start
```
![npm-start-back-end](https://user-images.githubusercontent.com/24611413/67206646-13af7300-f3e0-11e9-8474-040a7dc4e94d.jpg)
---
## How to use it

- Example using GET /api/player/
![postman-example](https://user-images.githubusercontent.com/24611413/67207344-60477e00-f3e1-11e9-87fe-ca86649e8906.jpg)

## Available APIs

**SQLite**
* GET /api/countries
* GET /api/teams
* GET /api/leagues
* GET /api/player?name={name}
* GET /api/summary?season={season}
---
## Author

* **Marcelo Claure** - *Initial work*
