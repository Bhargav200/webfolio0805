import React, { useState } from 'react';
import { Upload, Image as ImageIcon, X } from 'lucide-react';

export function ImageUpload() {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setPreview(null);
  };

  return (
    <div className="relative w-full h-[400px] bg-dark-light rounded-2xl overflow-hidden">
      {preview ? (
        <div className="relative w-full h-full">
          <img
            src={preview}
            alt="Uploaded preview"
            className="w-full h-full object-cover"
          />
          <button
            onClick={removeImage}
            className="absolute top-4 right-4 p-2 bg-dark/80 rounded-full text-white hover:bg-dark transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <div
          className={`w-full h-full flex flex-col items-center justify-center border-2 border-dashed transition-colors ${
            isDragging ? 'border-primary' : 'border-gray-600'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center space-y-4 p-8 text-center">
            <div className="p-4 bg-dark-lighter rounded-full">
              <ImageIcon className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-2">
              <p className="text-lg text-gray-300">
                Drag and drop your image here, or
              </p>
              <label className="inline-block px-4 py-2 bg-primary text-dark font-semibold rounded-lg hover:bg-primary-dark transition cursor-pointer">
                Browse Files
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <p className="text-sm text-gray-400">
              Supports: JPG, PNG, GIF (Max 5MB)
            </p>
          </div>
        </div>
      )}
    </div>
  );
}