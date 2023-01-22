# 🦋 Mariposa Tech Hub Website

mariposa tech hub website

# 📚 Technologies

- **Node** with **Express** for API
- **MongoDB and Mongoose** for database and modeling
- **React** with **Vite** tooling for UI
- **[Vitest](https://vitest.dev/)** for unit testing
- **[TailwindCSS](https://tailwindcss.com/)** for rapid styling
- **GitHub Actions** for CI/CD
- **[SwaggerDocs](https://github.com/brikev/express-jsdoc-swagger)** for API documentation
- **[React Query](https://react-query-v3.tanstack.com/)** for data fetching on React
- **[react-icons](https://react-icons.github.io/react-icons/)** for icons

# 👨‍💻 Getting started

install docker

```
https://www.docker.com/
```

copy `.env.example` as `.env`

```bash
$ cp .env.example .env
```

run project

```bash
$ docker compose up
```

wait until you get the following messages.

```
app            | [EXPRESS] db connection started!
app            | [EXPRESS] Express server is running at http://localhost:8080
```

visit project at

```
http://localhost:8081 # with hmr
```

# 🙋️ Things to know

## 🌎 URLs
for react built dist with express serving the dist files as static *(will be used for prod)*

```
http://localhost:8080
```

for real time reloading  when any css or api file changes *(highly recommended)*

```
http://localhost:8081
```

for local mongodb UI

```
http://localhost:8082
```

for email testing

```
http://localhost:8025
```

## 🐳 Docker/Make commands

to start docker containers with output

```bash
$ docker compose up        # make up
```

to start docker containers without output

```bash
$ docker compose up -d     # make up-d
```

to stop docker containers

```bash
$ docker compose down      # make down
```

to view docker containers log *(previously must run `docker compose up -d`)*

```bash
$ docker compose logs -f    # make log
```

to clean remove docker containers

```bash
$ docker compose down --rmi all   # make clean
```

to run tests

```bash
$ docker compose exec app npm run test   # make test
```

to run lint

```bash
$ docker compose exec app npm run lint    # make lint
```

to run formatting code

```bash
$ docker compose exec app npm run format    # make format
```
