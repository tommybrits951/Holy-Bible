import {useContext} from 'react'
import { BibleContext } from '../context/BibleContext';
import { Link } from 'react-router';
export default function VersionMenu() {
    const {versionList, setCurrentVersion} = useContext(BibleContext);


    function versionHandler(e) {
      const version = e.target.innerText;
      setCurrentVersion(version)
    }
    if (!versionList) {
      return(
        <p>Loading...</p>
      )
    }

    return(
      <ul className='absolute w-1/2 left-1/4 text-center bg-stone-300 z-1 pb-30 pt-12'>
        {versionList.map((ver, idx) => {
          return(
            <li key={idx} className='border-white border-2 w-full'>
              <Link to={`/book`} className='w-full text-lg' onClick={versionHandler}>{ver.version_abbr}</Link>
              <p className='text-sm italic'>{ver.version_name}</p>
            </li>
          )
        })}
      </ul>
    )
  }
