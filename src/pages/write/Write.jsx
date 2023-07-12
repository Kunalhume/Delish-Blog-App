import './write.css';
import AddIcon from '@mui/icons-material/Add';

const Write = () => {
  return (
    <div className='write'>
      <form className='writeform'>
        <div className='writeFormGroup'>
          <label htmlFor="fileInput">
            <i><AddIcon/></i>
          </label>
          <input type="file" id="fileInput" style={{display:'none'}} />
          <input type="text" placeholder='Title' />
        </div>
      </form>
    </div>
  )
}

export default Write
