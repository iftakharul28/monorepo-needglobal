import { Breadcrumb, List } from '@iftakhar/ui';
import { trpc } from '../lib/trpc';
import { Link } from 'react-router-dom';

export default function MediaPage() {
  const {
    data: mediaList,
    // isLoading
  } = trpc.media.mediaList.useQuery();
  return (
    <section className='container'>
      <Breadcrumb separator={'/'} className='mb-6'>
        <Breadcrumb.Item>
          <Link to={'/'}>Home</Link>
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
