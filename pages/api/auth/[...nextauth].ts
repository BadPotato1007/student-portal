import NextAuth from "next-auth";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // TODO: Add auth providers here
  ],
};

export default NextAuth(authOptions);
