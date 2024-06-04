import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        password: {},
      },

      authorize: async (credentials) => {
        if (credentials.password !== "password") {
          return null;
        }
        return { id: "admin", name: "admin" };
      },
    }),
  ],

  pages: {
    signIn: "/signin",
  },
});
