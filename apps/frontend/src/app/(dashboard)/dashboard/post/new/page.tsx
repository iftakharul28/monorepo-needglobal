'use client';
import { Breadcrumb } from '@iftakhar/ui';
import ImageForm from '@frontend/src/components/form/ImageForm';
import PostFrom from '@frontend/src/components/form/PostFrom';
import Link from 'next/link';

export default function NewPostPage() {
  return (
    <section className='container my-8'>
      <Breadcrumb separator={'/'} className='mb-6'>
        <Breadcrumb.Item>
          <Link href={'/'}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>New Post</Breadcrumb.Item>
      </Breadcrumb>
      <main className=' mx-auto bg-slate-100 p-10'>
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
      </main>
    </section>
  );
}
