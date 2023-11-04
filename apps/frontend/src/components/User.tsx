'use client';

import { trpc } from '../helpers/trpc';

const User = () => {
  const { data: response } = trpc.example.hello.useQuery({ name: 'Iftakharul Alam' });
  const { data: user } = trpc.example.user.useQuery();
  return (
    <div>
      <pre className='bg-slate-100 p-6 rounded-lg my-2'>{JSON.stringify(response, null, 2)}</pre>
      <pre className='bg-slate-100 p-6 rounded-lg my-2'>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default User;
