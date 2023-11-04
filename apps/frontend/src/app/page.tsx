import AuthForm from '@frontend/src/components/form/AuthForm';
import { getUserAuth } from '@frontend/src/lib/auth/utils';
import { redirect } from 'next/navigation';
import User from '../components/User';
export default async function Home() {
  const { session } = await getUserAuth();
  if (!session) redirect('/auth/sign-up');
  return (
    <div className='max-w-5xl mx-auto md:p-0 p-6'>
      <User />
      <AuthForm action='/api/auth/sign-out' />
    </div>
  );
}
