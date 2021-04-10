module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 7337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "80de50728538bcbd165ec78b46bd0ea9"),
    },
  },
});
