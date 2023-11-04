'use client';
import { Breadcrumb, Clsx, Sidebar, Pagination, List, Button, Modal, Accordion, Tabs, Input, Table } from '@iftakhar/ui';
import { trpc } from '../helpers/trpc';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowDown, Blocks, BlogIcon, MediaIcon } from '../constant/icons';

const ComponentsList = () => {
  const [isActive, setActive] = useState<boolean>(false);
  const [collapsedSidebar, setCollapsedSidebar] = useState<boolean>(false);
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  const { data: response } = trpc.example.hello.useQuery({ name: 'From Server' });
  const { data: modelList, isLoading } = trpc.model.modelList.useQuery();
  const components = [
    'Accordion',
    'Button',
    'Breadcrumb',
    'Condition',
    'Input',
    'List',
    'Model',
    'Select',
    'Sidebar',
    'Pagination',
    'Tab',
    'Table',
    'Timeline (not stable)',
    'Toast (not stable)',
    'Tooltip (not stable)',
  ];
  const [page, setPage] = useState<number>(1);
  const handlePageChange = (value: number) => {
    setPage(value);
  };
  return (
    <div>
      <h1 className='my-5 py-2 border-b border-b-slate-600'>List</h1>
      <List
        data={components}
        renderItem={(item, index) => (
          <div className='flex gap-1'>
            <span>{index! + 1}.</span>
            <p>{item}</p>
          </div>
        )}
      />
      <h2 className='my-5 py-2 border-b border-b-slate-600'>Accordion</h2>
      <Accordion defaultValue='item-1' className='max-w-[500px] w-full mx-auto p-10'>
        <Accordion.Item className='cursor-pointer' value='item-1'>
          <Accordion.Trigger value='item-1' activeClass='border-b-0' className='border-b py-4 	font-semibold w-full flex items-center justify-between'>
            <h2>Website Development</h2>
          </Accordion.Trigger>
          <Accordion.Content value='item-1'>Harness the power of various programming languages and frameworks to create visually stunning and functional websites.</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item className='cursor-pointer' value='item-2'>
          <Accordion.Trigger value='item-2' activeClass='border-b-0' className='border-b py-4 font-semibold w-full flex items-center justify-between'>
            <h2>Web Application Development</h2>
          </Accordion.Trigger>
          <Accordion.Content value='item-2'>Craft custom online solutions that cater specifically to your business needs, empowering you to achieve your goals effectively.</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item className='cursor-pointer' value='item-3'>
          <Accordion.Trigger value='item-3' activeClass='border-b-0' className='border-b py-4 font-semibold w-full flex items-center justify-between'>
            <h2>Web Service Development</h2>
          </Accordion.Trigger>
          <Accordion.Content value='item-3'>Seamlessly integrate and exchange data with external systems, ensuring smooth communication and enhanced functionality.</Accordion.Content>
        </Accordion.Item>
      </Accordion>
      <h2 className='my-5 py-2 border-b border-b-slate-600'>Breadcrumb</h2>
      <Breadcrumb separator={'/'}>
        <Breadcrumb.Item>
          <Link href={'/dashboard/'}>dashboard</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>product</Breadcrumb.Item>
        <Breadcrumb.Item>iphone-14-pro</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className='my-5 py-2 border-b border-b-slate-600'>Sidebar</h2>
      <Sidebar className='h-full min-h-[60vh]' breakPoint='md' collapsed={collapsedSidebar} toggled={toggleSidebar} onToggle={(toggle) => setToggleSidebar(toggle)}>
        <Sidebar.Header className='flex justify-center py-2'>
          <img src={'/favicon.ico'} alt='applegadgets' className='w-10' />
        </Sidebar.Header>
        <Sidebar.Content className='h-full'>
          <Sidebar.Menu iconShape='circle'>
            <Sidebar.MenuItem icon={<Blocks />}>Dashboard</Sidebar.MenuItem>
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

      <h1 className='my-5 py-2 border-b border-b-slate-600'>Table</h1>
      <Pagination current={page} pageSize={10} total={30} onChange={handlePageChange} />
      <h1 className='my-5 py-2 border-b border-b-slate-600'>Table</h1>
      <Table
        loading={isLoading}
        dataSource={modelList?.length ? modelList : []}
        className='w-full caption-bottom text-sm'
        columns={[
          {
            title: 'Id',
            render: (value) => value.id,
            className: 'h-12 px-4 text-center font-medium text-muted-foreground w-20',
          },
          {
            title: 'Title',
            render: (value) => value.title,
            className: 'h-12 px-4 text-center font-medium text-muted-foreground w-20',
          },
          {
            title: 'Slug',
            render: (value) => value.slug?.url,
            className: 'h-12 px-4 text-center font-medium text-muted-foreground w-20',
          },
          {
            title: 'Media',
            render: (value) => <img className='w-20 mx-auto' src={`http://localhost:5000/${value.media[0]?.url}`} alt={value.media[0]?.title} />,
            className: 'h-12 px-4 text-center font-medium text-muted-foreground w-20',
          },
          {
            title: 'Type',
            render: (value) => value.type,
            className: 'h-12 px-4 text-center font-medium text-muted-foreground w-20',
          },
          {
            title: 'Description',
            render: (value) => value.description,
            className: 'h-12 px-4 text-center font-medium text-muted-foreground w-20',
          },
          {
            title: 'createdAt',
            render: (value) => value.createdAt.toISOString(),
            className: 'h-12 px-4 text-center font-medium text-muted-foreground w-20',
          },
        ]}
      />
      <div className='flex justify-between my-5 py-2 border-b border-b-slate-600'>
        <h2>Modal</h2>
        <Button type='button' className='text-white bg-blue-600 px-2 py-2 rounded' onClick={() => setActive(!isActive)}>
          Click here
        </Button>
      </div>
      <Modal
        title={'Modal'}
        visible={isActive}
        maskClosable={true}
        okButton={{ onClick: () => setActive(!isActive), type: 'button', className: 'ok btn', children: 'OK' }}
        cancelButton={{ onClick: () => setActive(!isActive), type: 'button', className: 'ok btn', children: 'Close' }}
        className='!max-w-xl mx-auto !top-40'>
        <div>{response}</div>
      </Modal>
      <h2 className='my-5 py-2 border-b border-b-slate-600'>Tab</h2>
      <Tabs className='w-[500px] mx-auto' defaultValue='item-1'>
        <Tabs.List className='h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-2' ariaLabel='Manage your account'>
          <Tabs.Trigger
            className='whitespace-nowrap rounded-sm px-3 py-1.5 text-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2'
            activeClass='bg-slate-700 text-white'
            value='item-1'>
            Account
          </Tabs.Trigger>
          <Tabs.Trigger
            className='whitespace-nowrap rounded-sm px-3 py-1.5 text-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2'
            activeClass='bg-slate-700 text-white'
            value='item-2'>
            Password
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className='mt-3 rounded border border-gray-400 px-4 py-3 space-y-2' value='item-1'>
          <div>
            <label htmlFor='loginName' className='auth-input-label'>
              Name
            </label>
            <Input type='email' id='loginName' placeholder='Name' className='h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none' name='name' />
          </div>
          <div>
            <label htmlFor='loginEmail' className='auth-input-label'>
              Email
            </label>
            <Input type='email' id='loginEmail' placeholder='Email address' className='h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none' name='email' />
          </div>
          <div>
            <label htmlFor='loginPassword' className='auth-input-label'>
              Password
            </label>
            <Input type='password' id='loginPassword' placeholder='Password' className='h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none' name='password' />
          </div>
        </Tabs.Content>
        <Tabs.Content className='mt-3 rounded border border-gray-400 px-4 py-3 space-y-2' value='item-2'>
          <div>
            <label htmlFor='loginEmail' className='auth-input-label'>
              Email
            </label>
            <Input type='email' id='loginEmail' placeholder='Email address' className='h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none' name='email' />
          </div>
          <div>
            <label htmlFor='loginPassword' className='auth-input-label'>
              Password
            </label>
            <Input type='password' id='loginPassword' placeholder='Password' className='h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none' name='password' />
          </div>
        </Tabs.Content>
      </Tabs>
    </div>
  );
};

export default ComponentsList;
