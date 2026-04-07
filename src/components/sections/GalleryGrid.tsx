import { useState } from 'react';
import { X } from 'lucide-react';
import { useHayc } from '../../hayc/config-context';
import { Dialog, DialogContent } from '../ui/dialog';

export function GalleryGrid() {
  const { t, img, config, cp } = useHayc();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { key: 'all', label: config.galleryConfig.all, configPath: 'galleryConfig.all' as const },
    { key: 'breakfast', label: config.menuConfig.breakfast, configPath: 'menuConfig.breakfast' as const },
    { key: 'coffee', label: config.galleryConfig.coffee, configPath: 'galleryConfig.coffee' as const },
    { key: 'lunch', label: config.galleryConfig.lunch, configPath: 'galleryConfig.lunch' as const },
    { key: 'dinner', label: config.menuConfig.dinner, configPath: 'menuConfig.dinner' as const },
    { key: 'nonveg', label: config.galleryConfig.nonveg, configPath: 'galleryConfig.nonveg' as const },
  ];

  const filteredImages = activeFilter === 'all' 
    ? config.galleryConfig.images 
    : config.galleryConfig.images.filter(imgItem => imgItem.category === activeFilter);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 {...cp('galleryConfig.sectionTitle')} className="font-['Great_Vibes'] text-4xl text-[#c8a97e] mb-2">
            {t(config.galleryConfig.sectionTitle)}
          </h3>
          <h2 {...cp('galleryConfig.title')} className="text-2xl md:text-3xl font-serif text-white uppercase">
            {t(config.galleryConfig.title)}
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              {...cp(cat.configPath)}
              className={`px-6 py-2 text-sm font-medium uppercase tracking-wider transition-colors border-l-2 ${
                activeFilter === cat.key
                  ? 'border-[#c8a97e] text-[#c8a97e] pl-4'
                  : 'border-white/25 text-white/70 hover:border-white/50 pl-4'
              }`}
            >
              {t(cat.label)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            >
              <img 
                {...cp(`galleryConfig.images.${config.galleryConfig.images.indexOf(image)}.src`)}
                src={img(image.src)} 
                alt={`${t(config.galleryConfig.imageAltPrefix)} ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#c8a97e]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span {...cp('galleryConfig.hoverExpandLabel')} className="text-white text-2xl">
                  {t(config.galleryConfig.hoverExpandLabel)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl bg-transparent border-0 p-0">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            {selectedImage && (
              <img 
                src={img(selectedImage)} 
                {...cp('galleryConfig.lightboxImageAlt')}
                alt={t(config.galleryConfig.lightboxImageAlt)}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
