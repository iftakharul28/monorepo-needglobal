## Getting Started with monorepo

NPM Packages:

```bash
1. trpc
2. nextjs
3. reactjs
4. fastify
5. @iftakhar/ui
6. prisma
7. sqlite
8. lucia
9. notyf

```

Pages:

1. [@iftakhar/ui components list](http://localhost:5000)
2. [signin page](http://localhost:5000/auth/sign-in)
3. [signup page](http://localhost:5000/auth/sign-up)
4. [Frontend Dashboard](http://localhost:5000/dashboard)
5. [Dashboard](http://localhost:5001)

install the package:

```bash
npm install
# or
yarn
```

setup database:

```bash
npm run db:generate
npm run db:push
# or
yarn db:generate
yarn db:push
```

run the development server:

```bash
npm run dev
# or
yarn dev
```

to see data table:

```bash
npm run db:studio
# or
yarn db:studio
```

Last, see the results:

[Frontend](http://localhost:5000) with your browser.

[Dashboard](http://localhost:5001) with your browser.

[Api](http://localhost:8000) with your api to see.
