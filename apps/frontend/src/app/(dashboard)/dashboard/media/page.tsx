'use client';
import { Button, Table } from '@iftakhar/ui';
import { trpc } from '@frontend/src/helpers/trpc';

export default function PostPage() {
  const { data: mediaList, isLoading } = trpc.media.mediaList.useQuery();
  const { mutate: deleteModel } = trpc.model.deleteModel.useMutation({
    onSuccess: () => {
      console.log('Delete');
    },
  });
  return (
    <div className=' grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))]'>
      {mediaList?.map((media) => (
        <figure key={media.id}>
          <img src={`/${media?.url}`} alt={media?.title} />
        </figure>
      ))}
    </div>
  );
}
