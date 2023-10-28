import React from 'react'

function TopButtons({setQuery}) {
    const cities = [
      {
        id: 1,
        title: "Delhi",
      },
      {
        id: 2,
        title: "Barcelona",
      },
      {
        id: 3,
        title: "Paris",
      },
      {
        id: 4,
        title: "London",
      },
      {
        id: 5,
        title: "Berlin",
      },
    ];
    return (
      <div className="flex items-center justify-around my-6">
        {cities.map((city) => (
          <button
            key={city.id}
            className="text-white text-lg font-medium"
            onClick={() => setQuery({ q: city.title })}
          >
            {city.title}
          </button>
        ))}
      </div>
    );
  }

export default TopButtons