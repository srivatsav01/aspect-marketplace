import React from 'react';

function AspectList({ onAddAspect }) {
  const aspects = [
    { name: 'Aspect 1', description: 'Description for Aspect 1' },
    { name: 'Aspect 2', description: 'Description for Aspect 2' },
    // Add more aspects as needed
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-5">
  {aspects.map((aspect, index) => (
    <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800">{aspect.name}</h3>
      <p className="text-gray-600">{aspect.description}</p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 transition-colors duration-300" onClick={() => onAddAspect(aspect)}>Add Aspect</button>
    </div>
  ))}
</div>

  );
}

export default AspectList;
