# Doctor opening hours and booking - React application
[![](https://github.com/patrikmasiar/doctor-opening-hours-react-app/workflows/Build/badge.svg)](https://github.com/patrikmasiar/doctor-opening-hours-react-app/actions)

## Gettings started with the project
1. You have to run [NodeJS server](https://github.com/patrikmasiar/doctor-opening-hours-api) as API. Then the server URL should be: `http://localhost:3010`
2. Install dependencies `yarn install`
3. Run ReactJS project with `yarn start`

## API docs
### Routes

| ROUTE | METHOD | RESPONSE
|:-------------|:-------------|:-------------|
| `/reservation/all` | **GET** | `Reservation[]` |
| `/reservation` | **POST* | `Reservation` |

### Types
```javascript
type Reservation = {
  date: string;
  start: string;
  end: string;
};