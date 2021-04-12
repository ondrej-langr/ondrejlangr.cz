import create from "zustand"

type siteStore = {
  isLoading: boolean,
  setLoading: (loading: boolean) => void
}

const useSiteStore = create<siteStore>( set => ({
  isLoading: false,
  setLoading: (loading) => set( state => ({isLoading: loading}))
}))

export default useSiteStore;