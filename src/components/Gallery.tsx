import { useState } from 'react';
import { X } from 'lucide-react';
import heroRoomImage from '@/assets/hero-room.jpg';
import bathroomImage from '@/assets/bathroom.jpg';
import commonAreaImage from '@/assets/common-area.jpg';
import diningAreaImage from '@/assets/dining-area.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: heroRoomImage,
      alt: 'Premium Room with Modern Amenities',
      title: 'Premium Rooms',
      description: 'Spacious, well-furnished rooms with AC, WiFi, and storage space'
    },
    {
      src: commonAreaImage,
      alt: 'Modern Building Exterior',
      title: 'Modern Architecture',
      description: 'Contemporary building design with premium finishes'
    },
    {
      src: diningAreaImage,
      alt: 'Night View of the Building',
      title: 'Evening Ambiance',
      description: 'Beautiful LED lighting creating a welcoming atmosphere'
    },
    {
      src: bathroomImage,
      alt: 'Clean and Modern Bathroom',
      title: 'Modern Bathrooms',
      description: 'Hygienic bathrooms with hot water and premium fixtures'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Photo <span className="text-secondary">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            Take a virtual tour of our premium facilities and see why SP Men's PG 
            is the perfect home away from home.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-luxury hover:shadow-gold transition-all duration-500 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-heading font-bold mb-2">
                      {image.title}
                    </h3>
                    <p className="text-white/90 font-body leading-relaxed">
                      {image.description}
                    </p>
                  </div>
                </div>

                {/* View Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-secondary/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Highlight */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <div className="text-center p-6 bg-card rounded-2xl shadow-luxury">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-semibold text-card-foreground mb-2">Prime Location</h3>
            <p className="text-muted-foreground font-body">Strategically located with easy access to IT hubs and transportation</p>
          </div>

          <div className="text-center p-6 bg-card rounded-2xl shadow-luxury">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-semibold text-card-foreground mb-2">Secure Environment</h3>
            <p className="text-muted-foreground font-body">24/7 security with CCTV monitoring and controlled access</p>
          </div>

          <div className="text-center p-6 bg-card rounded-2xl shadow-luxury">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-semibold text-card-foreground mb-2">Homely Atmosphere</h3>
            <p className="text-muted-foreground font-body">Friendly community environment that feels like home</p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-secondary transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;