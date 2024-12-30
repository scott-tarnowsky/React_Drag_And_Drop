import {useState} from 'react'

import './DropArea.css'

const DropArea = () => {
    const [showDrop, setShowDrop] = useState(false)
  return (
    <section onDragEnter={()=>setShowDrop(true)} onDragLeave={()=>setShowDrop(false)} className={showDrop ? 'drop_area' : 'hide_drop'}>Drop Here</section>
  )
}

export default DropArea