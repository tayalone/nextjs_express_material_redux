# Next.js - Express, Material UI and redux

dependency express
dev @types/express @types/node nodemon ts-node

add tsconfig.server.json
add nodemon.json

confiq "dev": "nodemon",
"build": "next build && tsc && tsc --project tsconfig.server.json",
"start": "NODE_ENV=production node .next/server",
