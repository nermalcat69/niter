'use client'
// import { useRef, useState } from 'react';
// import { Toaster, toast } from 'react-hot-toast';
// import DropDown, { VibeType } from '../components/DropDown';


export default function PlaygroundMain() {
  return (
    <div>
      <div className="flex items-stretch w-full  border-b border-gray-200">
        <div className="flex-1 text-center border-r py-4 bg-white font-medium  flex items-center"> <span className="ml-4 mr-3 px-2 py-1 text-xs text-blue-500 hover:text-blue-600 border border-blue-200 bg-blue-50 duration-75 rounded-full ">GPT 3.5</span><p className="text-lg text-gray-700">Your Article</p>
        </div>
        <div className="flex-1 text-center py-4 bg-white font-medium text-lg text-gray-700">Preview</div>
      </div>
    <div className="flex h-screen overflow-visible items-stretch">
      <div className="flex-1 bg-white  border-r border-gray-200">
        <div className="flex justify-center divide-y"><div>nermal</div></div>
          <div>Nermal</div>
      </div>
      <div className="flex-1 bg-white">ff</div>
      </div>
    </div>
  );
}