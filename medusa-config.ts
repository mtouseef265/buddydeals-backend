import { loadEnv, defineConfig } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
    databaseDriverOptions:
      process.env.NODE_ENV !== "development"
        ? { connection: { ssl: { rejectUnauthorized: false } } }
        : {},
    admin: {
      vite: () => {
        return {
          server: {
            allowedHosts: [
              "https://buddydeals-backend-262420122176.asia-south2.run.app/",
              "https://buddydeals-backend-uqtppluqga-em.a.run.app",
            ],
          },
        };
      },
    },
  },
});
