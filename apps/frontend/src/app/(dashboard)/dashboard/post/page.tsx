'use client';
import { Button, Breadcrumb, Table } from '@iftakhar/ui';
import Link from 'next/link';
import { trpc } from '@frontend/src/helpers/trpc';
import { DeleteIcon } from '@frontend/src/constant/icons';
import toast from '@frontend/src/helpers/toast';

export default function PostPage() {
  const { data: modelList, isLoading } = trpc.model.modelList.useQuery();
  const { mutate: deleteModel } = trpc.model.deleteModel.useMutation({
    onSuccess: () => {
      toast.success('model deleted successfully');
    },
  });
  return (
    <section className='container my-8'>
      <Breadcrumb separator={'/'} className='mb-6'>
        <Breadcrumb.Item>
          <Link href={'/'}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>New Post</Breadcrumb.Item>
      </Breadcrumb>
      <Table
        loading={isLoading}
        dataSource={modelList?.length ? modelList : []}
        className='w-full caption-bottom text-sm'
        title={
          <div className='flex justify-between px-8 py-2'>
            <span>Post List</span>
            <Link href={`/dashboard/post/new`}>Add new</Link>
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
            render: (value) => <img className='w-20 mx-auto' src={`/${value.media[0]?.url}`} alt={value.media[0]?.title} />,
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
          //   {
          //     title: "User",
          //     render: (value) => value.user_name,
          //     className:
          //       "h-12 px-4 text-center font-medium text-muted-foreground w-20",
          //   },
        ]}
      />
    </section>
  );
}
