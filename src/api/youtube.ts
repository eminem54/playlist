import { YOUTUBE_PLAYLISTITEMS_URL } from '@/const/url';
import axios from 'axios';

const makeHeaders = (token: string) => {
  return { Authorization: 'Bearer ' + token };
};

export const requestPlayListItems = async (id: string, accessToken: string) => {
  const { data } = await axios.get(YOUTUBE_PLAYLISTITEMS_URL, {
    headers: makeHeaders(accessToken),
    params: {
      maxResults: 50,
      playlistId: id,
      part: 'id,snippet',
    },
  });
  return data;
};

export const insertVideoToPlaylist = async (playlistId: string, videoId: string, accessToken: string) => {
  const response = await axios.post(
    YOUTUBE_PLAYLISTITEMS_URL,
    {
      snippet: {
        playlistId: playlistId,
        resourceId: {
          kind: 'youtube#video',
          videoId: videoId,
        },
      },
    },
    {
      headers: makeHeaders(accessToken),
      params: {
        part: 'contentDetails,id,snippet',
      },
    }
  );
  return response;
};

export const deletePlaylistVideo = async (id: string, accessToken: string) => {
  const response = await axios.delete(YOUTUBE_PLAYLISTITEMS_URL, {
    headers: makeHeaders(accessToken),
    params: {
      id: id,
    },
  });
  return response;
};
