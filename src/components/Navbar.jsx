// import React, { useState } from "react";

// const Navbar = ({ onImportClick, onRunClick }) => {
//   return (
//     <div className=" pt-px">
//       <div className="flex justify-end m-2">
//         <button
//           className="bg-[#ffb86c] text-[#282a36] px-6 py-3 rounded mr-4"
//           onClick={onImportClick}
//         >
//           Import
//         </button>
//         <button
//           className="bg-[#50fa7b] text-[#282a36] px-6 py-3 rounded"
//           onClick={onRunClick}
//         >
//           Run
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { BiShareAlt } from "react-icons/bi";

// const Navbar = ({ onImportClick, onRunClick }) => {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleShareClick = () => {
//     setShowPopup(true);
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <div className="pt-px">
//       <div className="flex justify-end m-2">
//         <button
//           className="bg-[#ffb86c] text-[#282a36] px-6 py-3 rounded mr-4"
//           onClick={onImportClick}
//         >
//           Import
//         </button>
//         <button
//           className="bg-[#50fa7b] text-[#282a36] px-6 py-3 rounded"
//           onClick={onRunClick}
//         >
//           Run
//         </button>
//         <button
//           className="border-2 border-[#44475a] text-[#282a36] px-4 rounded ml-4"
//           onClick={handleShareClick}
//         >
//           <BiShareAlt className="text-[#44475a] font-black text-xl" />
//         </button>
//       </div>
//       {showPopup && (
//         <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
//           <div className="bg-white p-4 rounded shadow-md">
//             <p>Share this link:</p>
//             {/* Replace the following URL with your actual shareable link */}
//             <input
//               type="text"
//               value="https://your-shareable-link.com"
//               readOnly
//               className="border p-2 w-full mt-2"
//             />
//             <button
//               className="bg-[#ff5555] text-white px-4 py-2 mt-4 rounded"
//               onClick={closePopup}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaFileImport } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";

const Navbar = ({ onImportClick, onRunClick }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleShareClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="pt-px">
      <div className="flex justify-end m-2">
        <button
          className="border border-[#ffb86c] mr-2 bg-[#44475a] text-[#282a36] px-4 rounded ml-4"
          onClick={handleShareClick}
        >
          <BiShareAlt className="text-[#ffb86c] font-black text-xl" />
        </button>
        <button
          className="bg-[#44475a] text-[#50fa7b] border border-[#50fa7b]  px-6 py-3 rounded mr-2 flex items-center"
          onClick={onImportClick}
        >
          <FaFileImport className="mr-2 text-xl" />
          Import
        </button>
        <button
          className="bg-[#50fa7b] text-[#282a36] px-6 py-3 rounded flex items-center"
          onClick={onRunClick}
        >
          <AiFillPlayCircle className="mr-2 text-xl text-[#282a36]" />
          Run
        </button>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded shadow-md">
            <p>Share this link:</p>
            {/* Replace the following URL with your actual shareable link */}
            <input
              type="text"
              value="https://your-shareable-link.com"
              readOnly
              className="border p-2 w-full mt-2"
            />
            <button
              className="bg-[#ff5555] text-white px-4 py-2 mt-4 rounded"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
