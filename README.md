# 🦋 Mariposa Tech Hub Website

mariposa tech hub website

# 📚 Technologies

- **Node** with **Express** for API
- **MongoDB** for database
- **React** with **Vite** tooling for UI
- **[TailwindCSS](https://tailwindcss.com/)** for rapid styling
- **GitHub Actions** for CI/CD
- **SwaggerDocs** for API documentation
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
