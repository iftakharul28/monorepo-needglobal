'use client';
import { useState } from 'react';
import { Button, Clsx, Sidebar } from '@iftakhar/ui';
import Link from 'next/link';
import { ArrowDown, Blocks, BlogIcon, MediaIcon, Store } from '../../../constant/icons';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsedSidebar, setCollapsedSidebar] = useState<boolean>(false);
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);

  return (
    <section className='flex gap-2'>
      <Sidebar className='h-full min-h-screen sitebar' breakPoint='md' collapsed={collapsedSidebar} toggled={toggleSidebar} onToggle={(toggle) => setToggleSidebar(toggle)}>
        <Sidebar.Header className='flex justify-center py-2'>
          <Link href={'/'}>
            <img src={'/favicon.ico'} alt='applegadgets' className='w-10' />
          </Link>
        </Sidebar.Header>
        <Sidebar.Content className='h-full'>
          <Sidebar.Menu iconShape='circle'>
            <Sidebar.MenuItem icon={<Blocks />}>
              <Link href={'/dashboard'}>Dashboard</Link>
            </Sidebar.MenuItem>
            <Sidebar.MenuItem icon={<MediaIcon />}>
              <Link href={'/dashboard/media'}>Media</Link>
            </Sidebar.MenuItem>
            <Sidebar.SubMenu title={'Post Manage'} icon={<BlogIcon />}>
              <Sidebar.MenuItem>
                <Link href={'/dashboard/post/new'}>Add Post</Link>
              </Sidebar.MenuItem>
              <Sidebar.MenuItem>
                <Link href={'/dashboard/post'}>Post List</Link>
              </Sidebar.MenuItem>
            </Sidebar.SubMenu>
          </Sidebar.Menu>
        </Sidebar.Content>
        <Sidebar.Footer className=' flex justify-center py-2'>
          <Button type='button' onClick={() => setCollapsedSidebar(!collapsedSidebar)} className={Clsx('border-0 center-inner hover:text-primary h-10 w-10 text-xl duration-300 hover:text-2xl')}>
            <ArrowDown className=' rotate-90' />
          </Button>
        </Sidebar.Footer>
      </Sidebar>
      <div className='w-full'>{children}</div>
    </section>
  );
}
