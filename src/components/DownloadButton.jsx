import React from 'react'
import "./Navbar"
const DownloadButton = props => {
  const downloadFile = () => {
    window.location.href = "https://docs.google.com/document/d/1sXYtj3CZ8B4uetn45Hlrj41zMfZ6OumDiO4D8evyZEs/edit"
  }
  return (
            <button  id = "download"onClick={downloadFile}>Download Resume</button>
  )
}
export default DownloadButton