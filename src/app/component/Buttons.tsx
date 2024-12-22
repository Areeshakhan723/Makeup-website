"use client";
import Image, { StaticImageData } from "next/image";
import Swal from "sweetalert2";

interface Card {
  label: string;
  iconURL?: string | StaticImageData; // Optional prop to display an icon next to the label. If not provided, the icon will not be displayed.
  message?: string; // Toast message
  showDialog?: boolean;
}

const Buttons = ({ label, iconURL, message, showDialog }: Card) => {
  const handleEvent = () => {
    if (showDialog) {
      // Show SweetAlert2 dialog box
      Swal.fire({
        position: "center",
        icon: "success",
        title: message || "Successfully submitted",
        showConfirmButton: true,
        timer: 2000,
      });
    }
  };
  return (
    <button
      onClick={handleEvent}
      className={
        "flex justify-center items-center px-2 py-2 text-deco border border-transparent bg-primaryPink mt-2 ml-2 md:ml-0 transition duration-300 hover:scale-110"
      }
    >
      {label}

      {iconURL && (
        <Image
          src={iconURL}
          alt="icon"
          width={25}
          height={25}
          className="ml-2 hover:animate-bounce"
        />
      )}
    </button>
  );
};

export default Buttons;
