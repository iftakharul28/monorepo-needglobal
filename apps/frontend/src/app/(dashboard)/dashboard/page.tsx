'use client';
import { trpc } from '@frontend/src/helpers/trpc';
import { Breadcrumb, List } from '@iftakhar/ui';
import Link from 'next/link';
export default function Dashboard() {
  const { data: greeting } = trpc.example.hello.useQuery({ name: 'From Frontend' });
  const { data: user } = trpc.example.user.useQuery();
  return (
    <section className='container my-8'>
      <Breadcrumb separator={'/'} className='mb-6'>
        <Breadcrumb.Item>
          <Link href={'/'}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <div>
        <h2>{greeting}</h2>
        <pre className='bg-slate-100 p-6 rounded-lg my-2'>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </section>
  );
}
