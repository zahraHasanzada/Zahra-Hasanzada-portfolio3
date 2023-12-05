// export default function Map(){
//     return(
//         <div>

       
//         <iframe src=""></iframe>
//         </div>
   
//     )https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.906037582513!2d62.20660362509918!3d34.35286940179822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f3ce766a0732e19%3A0x31e6b922d98c2b0a!2z2Kjaqdix2KfYqNin2K8!5e0!3m2!1sfa!2s!4v1701752964535!5m2!1sfa!2s
// }
import React from "react";
import "./map.scss";

const MyMapComponent = () => {
  return (
    <div className="map-style">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.906037582513!2d62.20660362509918!3d34.35286940179822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f3ce766a0732e19%3A0x31e6b922d98c2b0a!2z2Kjaqdix2KfYqNin2K8!5e0!3m2!1sfa!2s!4v1701752964535!5m2!1sfa!2s"
        width="50%"
        height="50%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="fast"
        text-alighn="center"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default MyMapComponent;