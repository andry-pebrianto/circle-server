<!-- ABOUT THE PROJECT -->

## About The Project

This is a Restful API repository for Circle. This Restful API is built using ExpressJS and PostgreSQL.

### Technology Used

- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Cloudinary](https://cloudinary.com/)
- [RabbitMQ](https://rabbitmq.com/)
- [Redis](https://redis.io/)
- [CronJob](https://www.npmjs.com/package/node-cron/)

## Getting Started

### Installation

- Clone this project with `https://github.com/andry-pebrianto/circle-api.git`
- Install package required with `npm`
- Setting .env

```bash
NODE_ENV=
PORT=

DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=

JWT_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

AMQP_SERVER=

REDIS_PORT=
REDIS_HOST=
REDIS_PASSWORD=
```

- Migrate database using `npm run migrate:up`

### Executing program

- Run program with `npm run dev` for development and `npm run start` for production (must be compiled first with `npm run compile`)

<!-- RELATED PROJECT -->

## Related Project

- [Circle Client](https://github.com/andry-pebrianto/circle-client)
- [Circle Demo](https://circle-community.netlify.app/)

## Authors

Contributors names and contact info:

1. Andry Pebrianto

- [Linkedin](https://www.linkedin.com/in/andry-pebrianto)

## License

This project is licensed under the MIT License - see the LICENSE file for details
