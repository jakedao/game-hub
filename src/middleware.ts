// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware is runnings...");
  // Clone the request headers to modify them
  const requestHeaders = new Headers(request.headers);

  // Add a new custom header
  requestHeaders.append("Access-Control-Allow-Origin", "*");

  // You can also modify existing headers
  // requestHeaders.set('user-agent', 'New User Agent');

  // Return the response with the modified request headers
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// Optional: Define a matcher to apply middleware only to specific paths
export const config = {
  matcher: "/api/:path*", // Applies middleware to all API routes
};
