// import { comparePass } from '@/app/db/helpers/hash';
// import { createUser, getUserByEmail } from '@/app/db/models/user';
import { comparePass } from '@/db/helpers/hash';
import { getUserByEmail } from '@/db/models/user';
import { createToken } from '@/lib/jwt';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const User = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

interface userType {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  try {
    const body: userType = await request.json();

    const validation = User.safeParse(body);

    if (!validation.success) {
      throw validation.error;
    }

    const user = await getUserByEmail(body.email);

    if (!user) {
      return NextResponse.json(
        {
          message: 'Email or Password is wrong',
        },
        {
          status: 401,
        }
      );
    }

    const isValid = comparePass(body.password, user.password);
    (isValid);

    if (!isValid) {
      return NextResponse.json(
        {
          message: 'Email or Password is wrong',
        },
        {
          status: 401,
        }
      );
    }

    const access_token = createToken({
      id: user._id,
      email: user.email,
    });


    const response = NextResponse.json(
      {
        message: 'Login user success',
        data: {
          access_token,
        },
      },
      {
        status: 201,
      }
    );

    response.cookies.set('Authorization', `Bearer ${access_token}`);
    return response;
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errPath = error.issues[0].path[0];
      const errMessage = error.issues[0].message;

      return NextResponse.json({
        message: `${errPath} ${errMessage.toLocaleLowerCase()}`,
      });
    }

    return NextResponse.json(
      {
        message: 'Internal server error',
      },
      {
        status: 500,
      }
    );
  }
}
