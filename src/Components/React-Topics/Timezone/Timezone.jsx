import { useState, useEffect } from "react";
import moment from "moment-timezone";

const Timezone = () => {
  const [timeZone, setTimeZone] = useState(moment.tz.guess());
  const [currentTime, setCurrentTime] = useState(
    moment().tz(timeZone).format("YYYY-MM-DD HH:mm:ss")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().tz(timeZone).format("YYYY-MM-DD HH:mm:ss"));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeZone]);

  const timeZones = moment.tz.names();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-4">
          🌍 Time Zone Converter
        </h2>
        <p className="text-center text-lg font-mono bg-gray-700 p-3 rounded-lg shadow-md">
          🕒 {currentTime}
        </p>

        <div className="mt-6">
          <label className="block text-gray-300 mb-2 text-lg">
            Select Time Zone:
          </label>
          <select
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring focus:ring-blue-500"
            value={timeZone}
            onChange={(e) => setTimeZone(e.target.value)}
          >
            {timeZones.map((tz) => (
              <option key={tz} value={tz}>
                {tz}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Timezone;
