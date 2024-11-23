export const PathWithNavbar = [
  "/",
  "/users",
  "/users/settings",
  "/users/address",
  "/users/transaction",
  "/cart",
  "/product/:id",
];

export const PathWithoutNavbar = [
  "/login",
  "/register",
  "/myshop",
  "/cart/shipment",
  "/*", // page not found
];

export const RestrictedPath = ["/dashboard", "/dashboard/:path"];

export const NonAuthPath = ["/login", "/register"];

export const AuthPath = [
  "/users",
  "/users/settings",
  "/users/address",
  "/users/transaction",
  "/cart/shipment",
  "/dashboard",
  "/dashboard/:path",
  "/dashboard/admin",
  "/dashboard/seller",
  "/myshop",
];
