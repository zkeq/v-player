import { useTranslation } from 'react-i18next'
import { alpha, useTheme } from '@mui/material/styles'
import { useCallback, useEffect, useState } from 'react'
import { useSnackbar } from 'notistack'
import { Button, Dialog, IconButton, TextField, Tooltip, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import Cover from '../components/Cover'
import { createPlaylist } from '@/pages/local/api/playlist'
import GridRow from '@/components/GridRow'
import Col from '@/components/Col'
import { useLocalStore } from '@/store/local'

export function LocalPlaylistPanel() {
  const { t } = useTranslation()
  const { playlist, refreshPlaylist } = useLocalStore()

  return <div className='flex flex-col gap-4'>
    <Col title={t`main.nav.created_list`} variant='body1' more={<CreatePlaylist onLoad={refreshPlaylist} />}>
      <GridRow>
        {
          playlist.map((playlist: any) => (<Cover key={playlist.id} type='playlist' data={playlist} />))
        }
      </GridRow>
    </Col>
  </div>
}


function CreatePlaylist({ onLoad }: { onLoad: () => void }) {
  const theme = useTheme()
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const onClose = useCallback(() => {
    setOpen(false)
    onLoad()
  }, [])
  return <>
    <Tooltip title={t`main.playlist.new`} placement='left'>
      <IconButton
        sx={{
          bgcolor: alpha(theme.palette.tertiaryContainer.main, theme.palette.action.activatedOpacity),
        }}
        color={'tertiary' as 'primary'}
        size='small'
        onClick={() => setOpen(true)}
      >
        <AddCircleOutlineOutlinedIcon fontSize='small' />
      </IconButton>
    </Tooltip>
    <CreateDialog open={open} onClose={onClose} />
  </>
}

function CreateDialog({ open, onClose }: { open: boolean; onClose: () => void }) {

  const theme = useTheme()
  const { t } = useTranslation()
  const { enqueueSnackbar } = useSnackbar()
  const [playlistName, setName] = useState('')
  useEffect(() => {
    if (!open)
      setName('')

    return () => {
      setName('')
    }
  }, [open])

  async function createNewPlaylist() {
    try {
      await createPlaylist(playlistName)
      enqueueSnackbar('创建成功', { variant: 'success' })
      onClose()
    }
    catch (e) {
      enqueueSnackbar('something_wrong', { variant: 'error' })
    }
  }
  return <Dialog sx={{
    '& .MuiPaper-root': {
      borderRadius: 8,
    },
  }} open={open} onClose={onClose}>
    <Box className='pt-5 pb-4 px-2 flex flex-col' sx={{
      bgcolor: theme.palette.surfaceVariant.main,
      color: theme.palette.onSurfaceVariant.main,
      minWidth: 320,
    }}>
      <div className='flex flex-col items-center mb-4 gap-1'>
        <PlaylistAddIcon />
        <Typography variant='body1'>{t`main.playlist.new`}</Typography>
      </div>

      <div className='px-3'>
        <TextField className='w-full' variant='outlined'  label={t`main.playlist.name`} value={playlistName} onChange={(e: any) => {
          setName(state => e.target.value)
        }} />
      </div>
      <div className='flex justify-end'>
        <Button variant='text' onClick={onClose}>{t`common.cancel`}</Button>
        <Button variant='text' onClick={createNewPlaylist}>{t`common.confirm`}</Button>
      </div>
    </Box>
  </Dialog>
}


