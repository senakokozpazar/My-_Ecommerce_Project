import { useState } from "react";

export default function StarRate() {
  const [rating, setRating] = useState(4);
  const [hover, setHover] = useState(null);

  return (
    <div className="m-10 flex items-center justify-start space-x-1">
      {Array(5)
        .fill(0)
        .map((_, index) => {
          const currentRate = index + 1;
          return (
            <label key={index} className="cursor-pointer">
              <input
                type="radio"
                name="rate"
                value={currentRate}
                className="hidden"
                onClick={() => setRating(currentRate)}
              />
              <i
                className={`fa-star fa-solid text-2xl ${
                  currentRate <= (hover || rating)
                    ? "text-yellow-500"
                    : "text-gray-400"
                }`}
                onMouseEnter={() => setHover(currentRate)}
                onMouseLeave={() => setHover(null)}
              ></i>
            </label>
          );
        })}
    </div>
  );
}
