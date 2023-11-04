'use client';
import { Breadcrumb, List } from '@iftakhar/ui';
import { trpc } from '@frontend/src/helpers/trpc';
import Link from 'next/link';

export default function PostPage() {
  const { data: mediaList, isLoading } = trpc.media.mediaList.useQuery();
  const { mutate: deleteModel } = trpc.model.deleteModel.useMutation({
    onSuccess: () => {
      console.log('Delete');
    },
  });
  return (
    <section className='container my-8'>
      <Breadcrumb separator={'/'} className='mb-6'>
        <Breadcrumb.Item>
          <Link href={'/'}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Media</Breadcrumb.Item>
      </Breadcrumb>
      <div className=' grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-3 mx-4'>
        <List
          data={mediaList ? mediaList : []}
          renderItem={(media) => (
            <figure key={media.id}>
              <img src={`http://localhost:5000/${media?.url}`} alt={media?.title} />
            </figure>
          )}
        />
      </div>
    </section>
  );
}
