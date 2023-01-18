up:
	docker compose up

up-d:
	docker compose up -d

log:
	docker compose logs -f

down:
	docker compose down

clean:
	docker compose down --rmi all

test:
	docker compose exec app npm run test

lint:
	docker compose exec app npm run lint:fix

format:
	docker compose exec app npm run format:write
