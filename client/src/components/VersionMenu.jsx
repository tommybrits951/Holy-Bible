import {useContext} from 'react'
import { BibleContext } from '../App'
export default function VersionMenu() {
    const {versionList} = useContext(BibleContext);

    if (!versionList) {
      return(
        <p>Loading...</p>
      )
    }
    return(
      <ul>
        {versionList.map((ver, idx) => {
          return(
            <li key={idx}>
              <h3>{ver.version_abbr}</h3>
              <p>
                {ver.version_name}
              </p>
            </li>
          )
        })}
      </ul>
    )
  }
