# 🛍️ StoreApp

An **Angular** storefront and admin panel for an e-commerce store. It uses the [StoreAPI](https://github.com/majid99h/storeapi) ASP.NET Core backend.

![Angular](https://img.shields.io/badge/Angular-8-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-4-7952B3?logo=bootstrap&logoColor=white)

## ✨ Features

### 🛒 Shop
- Product browsing and shopping
- Shopping cart
- Order summary and order completion

### 🔐 Auth
- Login and registration
- JWT added to API calls by an HTTP interceptor (`AuthInterceptor`)
- Route protection with `AuthGuard` and a role-aware user menu

### 🧑‍💼 Admin
- Product management
- Product list
- Order management

## 🏗️ Project structure

```
src/app/
├── Admin/         → order, product, productlist components
├── Shop/          → shopping, shoppingcart, ordersummary (feature module)
├── Auth/          → auth module + route guard
├── Shared/        → navbar, shared module
├── appSerives/    → API services (auth, cart, category, order, product, user)
├── helper/        → AuthInterceptor
└── Model/         → Cart, Role, Shipment, User
```

## 🚀 Getting started

```bash
npm install
ng serve
```

Open `http://localhost:4200/`. Set the API base URL in `src/app/AppSetting.ts` or `src/environments/`.

## 🔗 Related
- Backend: [storeapi](https://github.com/majid99h/storeapi) (ASP.NET Core Web API)
