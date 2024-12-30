import { createUser, getUserByEmail } from '@/db/models/user';
import { UserModelCreateInput } from '@/types';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const User = z.object({
  name: z.string().optional(),
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
});

export async function POST(request: Request) {
  try {
    const body: UserModelCreateInput = await request.json();

    const validation = User.safeParse(body);

    if (!validation.success) {
      throw validation.error;
    }

    const user = await getUserByEmail(body.email);

    if (user) {
      return NextResponse.json(
        {
          message: 'Email has already registered',
        },
        {
          status: 401,
        }
      );
    }

    await createUser(body);

    return NextResponse.json(
      {
        message: 'Register user success',
      },
      {
        status: 201,
      }
    );
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
