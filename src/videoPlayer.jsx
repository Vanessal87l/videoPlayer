// import React, { useRef } from "react";
// import PropTypes from "prop-types";
// export default function VideoPlayer({ title }) {
//   const videoRef = useRef(null);
//   const handlePlay = () => {
//     const video = videoRef.current;
//     if (video) video.play();
//   };

//   const handlePause = () => {
//     const video = videoRef.current;
//     if (video) video.pause();
//   };

//   const handleRestart = () => {
//     const video = videoRef.current;
//     if (video) {
//       video.currentTime = 0;
//       video.play();
//     }
//   };

//   return (
//     <div className="flex flex-col items-center gap-3 p-6 rounded-2xl shadow-lg border border-gray-200 mt-10">
//       <h2 className="text-2xl font-semibold text-[#1a1a2e] mb-2">{title}</h2>

//       <video
//         ref={videoRef}
//         src="https://cdn.pixabay.com/video/2021/09/13/88481-606110665_tiny.mp4"
//         width="640"
//         height="360"
//         className="rounded-xl shadow-lg"
//         controls={false}
//       />

//       <div className="flex gap-4 mt-4">
//         <button
//           onClick={handlePlay}
//           className="bg-red-600 px-6 text-xl w-30 h-15  rounded-lg hover:bg-red-700 transition"
//         >
//           Play
//         </button>

//         <button
//           onClick={handlePause}
//           className="bg-gray-500 text-xl  px-6 rounded-lg hover:bg-gray-600 transition"
//         >
//           Pause
//         </button>

//         <button
//           onClick={handleRestart}
//           className="bg-blue-800 text-xl  px-5 rounded-lg hover:bg-blue-900 transition"
//         >
//           Restart
//         </button>
//       </div>
//     </div>
//   );
// }

// VideoPlayer.propTypes = {
//   src: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// };
