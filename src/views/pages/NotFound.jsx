import React from 'react';

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-7xl px-3 py-10 fade-in">
      <h2 className="text-2xl font-bold text-center underline decoration-3 decoration-orange-500 underline-offset-4">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;404&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </h2>
      <br />
      <br />
      <p className="text-center">The resource requested could not be found on this server!</p>
    </div>
  );
}
