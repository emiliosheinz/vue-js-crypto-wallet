import api from './api'
import type { Nft } from '@/types/nft'

export const getAllNfts = () => api.get<Nft[]>('/nfts')
