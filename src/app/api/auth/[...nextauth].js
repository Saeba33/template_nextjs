import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { compare } from "bcrypt";
import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Credentials",

      authorize: async (credentials) => {
        const [user] = await db.execute("SELECT * FROM users WHERE email = ?", [
          credentials.email,
        ]);

        if (!user) {
          throw new Error("No user found!");
        }

        const isValid = await compare(credentials.password, user.password);

        if (!isValid) {
          throw new Error("Could not validate credentials");
        }

        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],

  session: {
    jwt: true,
  },

  callbacks: {
    jwt: async (token, user) => {
      if (user) {
        token.id = user.id;
      }
      return Promise.resolve(token);
    },

    session: async (session, token) => {
      session.user.id = token.id;
      return Promise.resolve(session);
    },
  },

  secret: process.env.APP_SECRET,

  pages: {
    signIn: "/login",
  },
});
