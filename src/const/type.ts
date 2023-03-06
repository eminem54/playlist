export const DragVideoItemType = {
  VIDEO: 'VIDEOITEM',
};

// video item
type ResourceIdProps = {
  videoId: string;
};

type VideoThumbnailProps = {
  default: string;
  standard: string;
  medium: string;
};

type VideoListSnippetProps = {
  title: string;
  thumbnails: VideoThumbnailProps;
  resourceId: ResourceIdProps;
  position: number;
};

type VideoItemProps = {
  etag: string;
  id: string;
  snippet: VideoListSnippetProps;
};

export interface VideoListPartProps {
  etag: string;
  nextPageToken: string;
  items: Array<VideoItemProps>;
}

// playlist item
type ThumbnailImageProps = {
  url: string;
  width: number;
  height: number;
};

type ThumbnailProps = {
  default: ThumbnailImageProps;
  high: ThumbnailImageProps;
  medium: ThumbnailImageProps;
};

type PlayListSnippetProps = {
  description: string;
  title: string;
  thumbnails: Array<ThumbnailProps>;
};

export interface PlayListProps {
  etag: string;
  id: string;
  snippet: PlayListSnippetProps;
}
