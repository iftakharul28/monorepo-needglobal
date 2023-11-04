import { Breadcrumb, Button, Modal, Table } from '@iftakhar/ui';
import { trpc } from '../../lib/trpc';
// import { Link } from 'react-router-dom';
import { DeleteIcon } from '../../constant/icons';
import toast from '../../lib/toast';
import { useState } from 'react';
import PostFrom from '../../components/form/PostFrom';
import ImageForm from '../../components/form/ImageForm';
import { Link } from 'react-router-dom';

export default function ModelPage() {
  const [isActive, setActive] = useState<boolean>(false);
  const { data: modelList, isLoading } = trpc.model.modelList.useQuery();
  const { mutate: deleteModel } = trpc.model.deleteModel.useMutation({
    onSuccess: () => {
      toast.success({
        position: { x: 'right', y: 'top' },
        message: 'Model deleted successfully',
        duration: 3000,
      });
    },
  });
  return (
    <div className='container'>
      <Breadcrumb separator={'/'} className='mb-6'>
        <Breadcrumb.Item>
          <Link to={'/'}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Post list</Breadcrumb.Item>
      </Breadcrumb>
      <Modal
        title={'Post model'}
        visible={isActive}
        maskClosable={false}
        okButton={{ type: 'button', className: 'sr-only', children: 'OK' }}
        cancelButton={{ onClick: () => setActive(!isActive), type: 'button', className: 'sr-only', children: 'Close' }}
        className='!max-w-xl mx-auto !top-40'>
        <PostFrom>
          <label htmlFor='title' className='block font-medium text-sm text-slate-500'>
            Title
          </label>
          <input name='title' id='title' placeholder='Title' className='block w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-slate-700' />
          <br />
          <label htmlFor='slug' className='block font-medium text-sm text-slate-500'>
            Slug
          </label>
          <input name='slug' id='slug' placeholder='Slug' className='block w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-slate-700' />
          <br />
          <label htmlFor='description' className='block font-medium text-sm text-slate-500'>
            Image
          </label>
          <ImageForm />
          <br />
          <label htmlFor='description' className='block font-medium text-sm text-slate-500'>
            Description
          </label>
          <input name='description' id='description' placeholder='Description' className='block w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-slate-700' />
          <br />
        </PostFrom>
      </Modal>
      <Table
        loading={isLoading}
        dataSource={modelList?.length ? modelList : []}
        className='w-full caption-bottom text-sm'
        title={
          <div className='flex justify-between px-8 py-2'>
            <span>Post List</span>
            <button type='button' onClick={() => setActive(!isActive)}>
              Add new
            </button>
            {/* <Link href={`/dashboard/post/new`}>Add new</Link> */}
          </div>
        }
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
            title: 'Slug',
            render: (value) => value.slug?.url,
            className: 'h-12 px-4 text-center font-medium text-muted-foreground w-20',
          },
          {
            title: 'Action',
            render: (value) => (
              <Button
                type='button'
                className='border-0'
                onClick={() =>
                  deleteModel({
                    id: value.id,
                  })
                }>
                <DeleteIcon className='w-6 h-6' />
              </Button>
            ),
            className: 'h-12 px-4 text-center font-medium text-muted-foreground w-20',
          },
        ]}
      />
    </div>
  );
}
