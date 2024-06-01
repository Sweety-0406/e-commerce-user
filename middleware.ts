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
 
export default authMiddleware({
  publicRoutes: [
    "/",
    "/order(.*)",
    '/products(.*)',
    '/cart(.*)',
    '/favourites(.*)',
  ],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};




// import { authMiddleware } from "@clerk/nextjs";
// import { NextResponse, NextRequest } from 'next/server';
// import { auth } from '@clerk/nextjs/server';

// export async function middleware(req: NextRequest) {
//   const { userId } = auth();

//   if (!userId) {
//     const signInUrl = new URL('/sign-in', req.url);
//     return NextResponse.redirect(signInUrl);
//   }

//   return NextResponse.next();
// }

// // Apply middleware to specific routes
// export default authMiddleware({
//   publicRoutes: [
//     "/",
//     "/order(.*)",
//     '/products(.*)',
//     '/cart(.*)',
//     '/favourites(.*)',
//   ],
// });
 
// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };
