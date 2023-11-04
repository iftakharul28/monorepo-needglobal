'use client';
import { useRef, useState } from 'react';

const ImageForm = () => {
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [image, setimage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>();
  //   const handleIconClick = () => {
  //     imageRef.current?.click();
  //   };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setimage(selectedFile);
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(imageUrl);
      console.log('The image is', imageUrl);
    }
  };
  return (
    <input
      type='file'
      ref={imageRef}
      onChange={handleImageChange}
      name='image'
      id='image'
      placeholder='Select Image'
      className='block w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-slate-700'
    />
  );
};

export default ImageForm;
