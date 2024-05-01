export { default } from "next-auth/middleware";

export const config = { matcher: ["/users/:path*"] };

//*: zero ou mais  parâmetros
//+: um ou mais parâmetros
//?: zero um 1 parâmetro

// import { NextResponse, NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }
// export const config = {
//   matcher: ["/laranjas/:path*"],
// };
