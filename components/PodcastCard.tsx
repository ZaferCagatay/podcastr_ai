import { PodcastCardProps } from '@/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const PodcastCard = ({
  imgUrl,
  title,
  description,
  podcastId,
}: PodcastCardProps) => {
  const router = useRouter();

  // Handle views
  const handleViews = async () => {
    try {
      // Moved handleViews to PodcastDetailPlayer handlePlay function for convenience

      // Navigate to the podcast page after updating views
      router.push(`/podcast/${podcastId}`, { scroll: true });
    } catch (error) {
      console.error('Error updating podcast views:', error);
    }
  };

  return (
    <div className="cursor-pointer" onClick={handleViews}>
      <figure className="flex flex-col gap-2">
        <Image
          src={imgUrl}
          width={174}
          height={174}
          alt={title}
          className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
        />
        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
          <h2 className="text-12 truncate font-normal capitalize text-white-4">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
