import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { readPayloadJose } from './lib/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  if (request.url.includes('/api/wishlist') || request.url.includes('/api/redis') || request.url.includes('/api/elastic') || request.url.includes('/api/mongodb')) {
    let authorization: any;
    authorization = cookies().get('Authorization') as {value: string};
    if(!authorization){
      authorization = request.headers.get('Authorization') as {};
      authorization = {value: authorization}
    }

    if (!authorization) {
      return NextResponse.json(
        {
          message: 'Authentication Failed',
        },
        {
          status: 401,
        }
      );
    }

    const accessToken = authorization.value.split(' ')[1];
    const decodedUser = await readPayloadJose<{
      id: string;
      email: string;
    }>(accessToken);

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', decodedUser.id);
    requestHeaders.set('x-user-email', decodedUser.email);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    return response;
  }
}



export const config = {
  matcher: ['/api/:path*'],
};
