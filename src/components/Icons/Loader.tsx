import loading from '../../../public/assets/loadingIcon.svg';

//imorting styles
import Style from './Loader.module.css';

const Loader = () => {
  return (
    <div className={Style.loader}>   
        <img src={loading} alt="Loading" />
    </div>
  )
}

export default Loader