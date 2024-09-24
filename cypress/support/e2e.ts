import hkdf from "@panva/hkdf";
import { EncryptJWT, JWTPayload } from "jose";

declare global {
  namespace Cypress {
    interface Chainable {
      login(userObj: JWTPayload): Chainable<JQuery<HTMLElement>>;
    }
  }
}

async function getDerivedEncryptionKey(secret: string) {
  return await hkdf(
    "sha256",
    secret,
    "",
    "NextAuth.js Generated Encryption Key",
    32
  );
}

export async function encode(
  token: JWTPayload,
  secret: string
): Promise<string> {
  const maxAge = 30 * 24 * 60 * 60; // 30 days
  const encryptionSecret = await getDerivedEncryptionKey(secret);
  return await new EncryptJWT(token)
    .setProtectedHeader({ alg: "dir", enc: "A256GCM" })
    .setIssuedAt()
    .setExpirationTime(Math.round(Date.now() / 1000 + maxAge))
    .setJti("test")
    .encrypt(encryptionSecret);
}

Cypress.Commands.add("login", (userObj: JWTPayload) => {
  cy.wrap(null)
    .then(() => {
      return encode(userObj, Cypress.env("NEXTAUTH_SECRET"));
    })
    .then((encryptedToken) =>
      cy.setCookie("next-auth.session-token", encryptedToken)
    );
});
