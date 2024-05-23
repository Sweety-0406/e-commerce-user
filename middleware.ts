// import {
//   clerkMiddleware,
//   createRouteMatcher
// } from '@clerk/nextjs/server';

// const isProtectedRoute = createRouteMatcher([
//   '/favourites(.*)',
//   '/order(.*)',
//   '/cart(.*)',
  
// ]);

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) auth().protect();
// },{debug:true})

// export const config = {
//   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// };


import { authMiddleware } from "@clerk/nextjs";
 
// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware
export default authMiddleware({
  // Allow signed out users to access the specified routes:
  publicRoutes: ["/"],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

