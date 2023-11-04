import {
  Link,
  Outlet,
  // useNavigate
} from 'react-router-dom';
import { useState, Suspense } from 'react';
import { Sidebar, Button, Clsx } from '@iftakhar/ui';
import { ArrowDown, Blocks, BlogIcon, MediaIcon } from '../constant/icons';

export default function Layout() {
  const [collapsedSidebar, setCollapsedSidebar] = useState<boolean>(false);
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  return (
    <div className='h-screen flex'>
      <Sidebar className='h-full min-h-screen sitebar' breakPoint='md' collapsed={collapsedSidebar} toggled={toggleSidebar} onToggle={(toggle) => setToggleSidebar(toggle)}>
        <Sidebar.Header className='flex justify-center py-2'>
          <img src={'/vite.svg'} alt='school app' className='w-10' />
        </Sidebar.Header>
        <Sidebar.Content className='h-full'>
          <Sidebar.Menu iconShape='circle'>
            <Sidebar.MenuItem icon={<Blocks />}>
              <Link to={'/'}>Dashboard</Link>
            </Sidebar.MenuItem>
            <Sidebar.MenuItem icon={<MediaIcon />}>
              <Link to={'/media'}>Media</Link>
            </Sidebar.MenuItem>
            <Sidebar.SubMenu title={'Post Manage'} icon={<BlogIcon />}>
              <Sidebar.MenuItem>
                <Link to={'/post/new'}>Add Post</Link>
              </Sidebar.MenuItem>
              <Sidebar.MenuItem>
                <Link to={'/post'}>Post List</Link>
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
      <main className='h-full w-full overflow-auto bg-card-4'>
        <div className='w-full py-2 bg-secondary flex items-center justify-between px-4 sticky top-0 z-20'>
          <button type='button' className='text-white text-2xl md:hidden' onClick={() => setToggleSidebar(true)}>
            {/* <AiOutlineMenu /> */}
            AiOutlineMenu
          </button>
          {/* <Dropdown overlay={profileMenu} placement='bottomRight' arrow>
           <p className='cursor-pointer rounded border border-primary text-white px-1 py-1'>{me.data?.firstname}</p>
          </Dropdown> */}
        </div>
        <Suspense fallback={<p>loading</p>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
