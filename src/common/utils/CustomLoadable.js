import Loadable from 'react-loadable'
import LoadingComponent from '../components/Loading'

function CustomLoadable({
  loader
}) {
  return Loadable({
    loader,
    loading: LoadingComponent
  })
}

export default CustomLoadable