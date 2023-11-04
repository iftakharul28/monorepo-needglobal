import { redirect } from 'next/navigation';
import '@iftakhar/ui/lib/cjs/index.css';
import { getUserAuth } from '@frontend/src/lib/auth/utils';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const { session } = await getUserAuth();
  if (!session) redirect('/auth/sign-up');

  return <>{children}</>;
}
