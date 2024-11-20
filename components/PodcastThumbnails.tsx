import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useQuery } from 'convex/react';
import Image from 'next/image';

const PodcastThumbnails = ({ podcastId }: { podcastId: Id<'podcasts'> }) => {
  const podcast = useQuery(api.podcasts.getPodcastById, {
    podcastId: podcastId,
  });

  return (
    <>
      <Image
        src={podcast?.imageUrl!}
        alt="card"
        fill
        className="absolute size-full rounded-xl border-none"
      />
    </>
  );
};

export default PodcastThumbnails;
