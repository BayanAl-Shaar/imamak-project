import React from 'react';

export function Watermark() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      <div className="text-center opacity-20">
        <div className="text-8xl md:text-9xl font-bold text-gray-400 select-none transform -rotate-12">
          IMAMAK
        </div>
        <div className="text-2xl md:text-3xl text-gray-500 mt-4 select-none transform -rotate-12">
          Industrial Solutions
        </div>
      </div>
    </div>
  );
}
