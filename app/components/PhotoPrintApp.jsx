'use client';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import OrderComplete from './OrderComplete';
import ImageViewer from './ImageViewer';
import styles from './PhotoPrintApp.module.css';

export default function PhotoPrintApp() {
  const [selectedSize, setSelectedSize] = useState('');
  const [images, setImages] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showOrderComplete, setShowOrderComplete] = useState(false);
  const [expandedImage, setExpandedImage] = useState(null);

  const prices = {
    '6x9': 500,
    '9x12': 500,
    '10x15': 500,
    '15x20': 1200,
    '20x30': 3500
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleFileUpload = (e) => {
    const files = e.target.files;
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      
      reader.onload = function(event) {
        const imageObj = {
          src: event.target.result,
          quantity: 1,
          size: selectedSize,
          price: prices[selectedSize]
        };
        
        setImages(prevImages => [...prevImages, imageObj]);
      };
      
      reader.readAsDataURL(file);
    }
    
    setSelectedSize('');
  };

  const handleDeleteImage = (index) => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
  };

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity < 1) return;
    
    setImages(prevImages => prevImages.map((img, i) => 
      i === index ? {...img, quantity: newQuantity} : img
    ));
  };

  const handlePayment = () => {
    if (images.length > 0) {
      setShowOrderComplete(true);
      
      setTimeout(() => {
        setShowOrderComplete(false);
        setImages([]);
      }, 3000);
    }
  };

  const updateTotalPrice = () => {
    const total = images.reduce((total, image) => {
      return total + (prices[image.size] * image.quantity);
    }, 0);
    
    setTotalPrice(total);
  };

  // Update total price whenever images change
  useEffect(() => {
    updateTotalPrice();
  }, [images]);

  return (
    <div>
      <Header />
      
      <div className={styles.appContainer}>
        <Sidebar 
          selectedSize={selectedSize} 
          onSizeSelect={handleSizeSelect} 
          onFileUpload={handleFileUpload} 
          prices={prices}
        />
        
        <MainContent 
          images={images}
          onDeleteImage={handleDeleteImage}
          onQuantityChange={handleQuantityChange}
          totalPrice={totalPrice}
          onPayment={handlePayment}
          onExpandImage={setExpandedImage}
        />
      </div>
      
      {showOrderComplete && <OrderComplete />}
      {expandedImage && (
        <ImageViewer 
          image={expandedImage} 
          onClose={() => setExpandedImage(null)} 
        />
      )}
    </div>
  );
}