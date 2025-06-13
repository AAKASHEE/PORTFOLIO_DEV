import React from "react";
import { StickyNote as StickyIcon } from "lucide-react";

interface StickyNoteProps {
  onClick: () => void;
}

const StickyNote: React.FC<StickyNoteProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center p-4 bg-gray-700 rounded-lg transition-all duration-300 hover:bg-yellow-600 hover:scale-105"
    >
      <StickyIcon className="w-8 h-8 mb-2 text-yellow-400" />
      <span className="text-sm font-medium">
  Leave a Note <br /> wait for a minute for message to get delivered
</span>

    </button>
  );
};

export default StickyNote;
