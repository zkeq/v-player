import { useQuery } from '@tanstack/react-query'
import { ipcRenderer } from 'electron'

export default function useQueryTrack() {
  const { data, isLoading } = useQuery(['local', 'tracks'], async () => {
    const { data, totalDt, totalSize } = await ipcRenderer.invoke('track/all-tracks')
    return {
      tracks: data,
      totalDt,
      totalSize,
    }
  }, {
    staleTime: 5 * 1000 * 60,
  })
  return {
    data,
    isLoading,
  }
}

export function useQueryLocalPlaylistTrack(id: number) {
  const { data, isLoading } = useQuery(['local', 'playlist', 'tracks', id], async () => {
    const { data, totalDt, totalSize } = await ipcRenderer.invoke('track/get-playlist-tracks', id)
    return {
      tracks: data,
      totalDt,
      totalSize,
    }
  })
  return {
    data,
    isLoading,
  }
}
