'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { trpc } from '@frontend/src/helpers/trpc';

const PostFrom = ({ children }: { children?: React.ReactNode }) => {
  const router = useRouter();
  const [errors, setErrors] = useState<{ error: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const model = trpc.useContext();
  const { mutate: createPost } = trpc.model.addModel.useMutation({
    onMutate: () => {
      setLoading(true);
      setErrors(null);
    },
    onSuccess: () => {
      return model.invalidate();
    },
    onError: (error) => {
      setErrors({
        error: error.message,
      });
      setLoading(false);
    },
  });
  return (
    <form
      method='post'
      className='mt-4'
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log(formData);
        const title = formData.get('title') as string;
        const slug = formData.get('slug') as string;
        const description = formData.get('description') as string;
        // console.log(image);
        await fetch('/api/media', {
          method: 'POST',
          body: formData,
        }).then(async (response) => {
          const result = await response.json();
          createPost({
            title,
            slug,
            media: [
              {
                url: result.url,
                title: result.name,
                type: 'model',
              },
            ],
            description,
            type: 'model',
            user_id: 'nzwgkpfk17mt2kz',
          });
        });
      }}>
      {errors ? (
        <div className='bg-red-100 p-3 my-4'>
          <h3 className='font-bold text-md'>Error!</h3>
          <p className='text-sm'>{errors.error}</p>
        </div>
      ) : null}
      {children}
      <SubmitButton loading={loading} />
    </form>
  );
};

export default PostFrom;

const SubmitButton = ({ loading }: { loading: boolean }) => {
  return (
    <button
      type='submit'
      className='p-2.5 rounded-md font-medium text-white bg-slate-900 w-full text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed'
      disabled={loading}>
      Post{loading ? 'ing' : ''}
    </button>
  );
};
