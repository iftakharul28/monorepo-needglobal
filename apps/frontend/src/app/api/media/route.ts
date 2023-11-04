import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { join } from 'path';
import { writeFile } from 'fs/promises';
import { getRandomNumber, imagevalidator } from '@frontend/src/helpers/ImageUploader';
export const POST = async (request: NextRequest) => {
  const formData = await request.formData();
  console.log(formData);
  const image = formData.get('image') as Blob | null;
  // * IF image exist
  if (!image) return;
  //@ts-ignore
  const isImageNotValid = imagevalidator(image?.name, image?.size);
  if (isImageNotValid) {
    return NextResponse.json({
      status: 400,
      errors: {
        content: isImageNotValid,
      },
    });
  }
  // * Upload image if all good
  try {
    const buffer = Buffer.from(await image!.arrayBuffer());
    const uploadDir = join(process.cwd(), 'public', '/uploads');
    const uniqueNmae = Date.now() + '_' + getRandomNumber(1, 999999);
    //@ts-ignore
    const imgExt = image?.name.split('.');
    const filename = uniqueNmae + '.' + imgExt?.[1];
    await writeFile(`${uploadDir}/${filename}`, buffer);
    return NextResponse.json({
      url: `uploads/${filename}`,
      name: uniqueNmae,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      message: error?.message,
    });
  }
};
