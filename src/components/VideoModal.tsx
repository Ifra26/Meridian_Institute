import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  videoUrl: string | null;
  title: string | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, title, onClose }) => {
  if (!videoUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-meridian-navy-950/90 backdrop-blur-lg">
      <div className="bg-slate-900 border border-meridian-gold/30 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative">
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950">
          <h3 className="font-serif font-semibold text-white text-sm sm:text-base truncate max-w-xl">
            {title || 'Meridian Institute Video Tour'}
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg bg-white/5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={videoUrl}
            title={title || 'Meridian Video Showcase'}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
