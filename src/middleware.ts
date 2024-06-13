// import { checkIsAuthenticated } from "@/app/utils/Auth";
// import { NextResponse } from "next/server";
// // const user = localStorage.getItem("userInfo");

// import type { NextRequest } from "next/server";
// const isAuthenticated = checkIsAuthenticated();

// const protectedRoutes = ["/doctors"];

// export default function middleware(req: NextRequest) {
//   console.log("isAuthenticated", isAuthenticated);
//   if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
//     const absoluteURL = new URL("/", req.nextUrl.origin);
//     return NextResponse.redirect(absoluteURL.toString());
//   }
// }

import { NextResponse } from "next/server";

export function middleware(request: { url: string | URL | undefined }) {
  const user = "false";

  if (!user) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/appointment"],
};
