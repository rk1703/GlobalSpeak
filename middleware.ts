// import { authMiddleware } from "@clerk/nextjs";
 
// // See https://clerk.com/docs/references/nextjs/auth-middleware
// // for more information about configuring your Middleware
// export default authMiddleware({
//   // Allow signed out users to access the specified routes:
//   publicRoutes: ['/'],
// });
 
// export const config = {
//   matcher: [
//     // Exclude files with a "." followed by an extension, which are typically static files.
//     // Exclude files in the _next directory, which are Next.js internals.
//     "/((?!.+\\.[\\w]+$|_next).*)",
//     // Re-include any files in the api or trpc folders that might have an extension
//     "/(api|trpc)(.*)"
//   ]
// };


import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
 
// const isDashboardRoute = createRouteMatcher(['/dashboard(.*)']);
// const isAdminRoute = createRouteMatcher(['/admin(.*)']);
 
export default clerkMiddleware((auth, req) => {
//   // Restrict admin route to users with specific role
//   if (isAdminRoute(req)) auth().protect({ role: 'org:admin' });
 
//   // Restrict dashboard routes to logged in users
//   if (isDashboardRoute(req)) auth().protect();
});
 
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};