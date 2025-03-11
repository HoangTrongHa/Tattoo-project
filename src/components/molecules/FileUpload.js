import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function FileUpload({ onFileUpload }) {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');

  const onDrop = (acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      setError('Only image files are allowed.');
    } else {
      setError('');
      setFiles(acceptedFiles);
      if (onFileUpload) {
        onFileUpload(acceptedFiles);
      }
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    onDropRejected: (rejectedFiles) => {
      setError('Only image files are allowed.');
    }
  });

  return (
    <div {...getRootProps()} className="border-dashed border-2 border-gray-400 p-6 text-center rounded-[8px]">
      <input {...getInputProps()} />
      <CloudUploadIcon className="text-[#121212]" style={{ fontSize: 48 }} />
      <p className="!text-[#121212]">Drag & drop files here, or click to select files</p>
      {error && <p className="!text-red-500">{error}</p>}
      <div className="mt-4">
        {files.map((file, index) => (
          <div key={index} className="text-[#121212]">
            {file.name}
          </div>
        ))}
      </div>
    </div>
  );
}