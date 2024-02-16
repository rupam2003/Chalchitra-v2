export {default} from "next-auth/middleware"

export const config = {matcher: ["/","/favs","/movies/:path*","/tv/:path*","/search/:path*"]};