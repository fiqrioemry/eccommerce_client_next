export const IncludeNavbarFooter = [
  "/",
  "/users",
  "/users/settings",
  "/users/address",
  "/users/transaction",
  "/cart",
  "/product/:id",
];

export const ExcludeNavbarFooter = [
  "/login",
  "/register",
  "/myshop",
  "/cart/shipment",
  "/*", // page not found
];

export const ProtectedRoute = ["/dashboard", "/dashboard/:path"];

export const NonAuthRoute = [
  "/login",
  "/register",
  "/",
  "/product/:id",
  "/search/:params",
  "/category/:params",
  "/:shopname/product/:id",
  "/:shopname",
];

export const AuthRoute = [
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

export const initialInputState = {
  email: "",
  password: "",
  passwordConfirm: "",
  search: "",
};
