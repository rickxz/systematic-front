
//imorting styles
import Style from './Loader.module.css';

const Loader = () => {
  return (
    <div className={Style.loader}>   
        <img src='/assets/loader.svg' alt="Loading" />
        <p>Searching for existent studies</p>
    </div>
  )
}

export default Loader