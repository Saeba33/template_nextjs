//Tutorial :
https://www.youtube.com/watch?v=bicCg4GxOP8&ab_channel=CandDev


Commandes à éxécuter :

//Installation NextJS
npx create-next-app@latest .
npm i

//Installation Prisma
npm i prisma --save-dev
npx prisma init

//Installation NexAuth
npm i next-auth

// Post configuration schema.prisma
npx prisma migrate dev
--> pré-requis : 
- avoir installer extension "Prisma" sur IDE
- vérifier fichier.env et schema.prisma pour connexion à la base de données


npm install @prisma/client

npm i bcrypt
npm i --save-dev @types/bcrypt