import {
  clerkMiddleware,
  createRouteMatcher
} from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/favourites(.*)',
  '/order(.*)',
  '/cart(.*)',
  '/'
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
},{debug:true})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};





// import { clerkMiddleware } from '@clerk/nextjs/server';
// // import { authMiddleware } from "@clerk/nextjs";

// export default clerkMiddleware()

// export const config = {
//   // The following matcher runs middleware on all routes
//   // except static assets.
//   matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// };

