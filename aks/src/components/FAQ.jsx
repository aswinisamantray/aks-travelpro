import React from 'react'
import '../css/bootstrap.min.css'
import '../css/style.css'
import '../css/FAQ.css'

const FAQ = () => {
    const faqsArray = [
        {
          title: "What is the purpose of the travel app?",
          description: "Our travel app is designed to help you plan, organize, and enhance your travel experiences. It provides various features such as trip planning, booking accommodations, discovering attractions, and accessing useful travel information.",
        },
        {
          title: "Is the travel app available for both Android and iOS devices?",
          description: "Yes, our travel app is available for both Android and iOS platforms. You can download it from the respective app stores.",
        },
        {
          title: "Do I need to create an account to use the travel app?",
          description: "While you can explore some features without an account, creating one offers additional benefits, such as saving your preferences, syncing trip data across devices, and accessing exclusive offers.",
        },
        {
          title: "Can I create and customize travel itineraries using the app?",
          description: "Yes, the travel app offers a user-friendly itinerary planner. You can create, modify, and organize your travel plans, including adding attractions, activities, and notes.",
        },
        {
          title: "Can I review and rate hotels, attractions, or restaurants through the app?",
          description: "Yes, we encourage users to share their experiences by leaving reviews and ratings for hotels, attractions, restaurants, and other places they visit through the app.",
        },
        {
          title: "Is my personal information safe and private with the travel app?",
          description: "Absolutely! We take data privacy seriously and adhere to strict policies to safeguard your personal information. Your data is used only for enhancing your travel experience and is not shared with third parties without your consent.",
        },
      ];
      
  return (
     <div className='faqContainer'>
        <div className="accordion item-container" id="accordionExample">
            <h1>Frequently Asked Questions(FAQ)</h1>
            {faqsArray.map((item,index)=>(
                <div className="accordion-item mt-2" key={index}>
                  <h3 className="accordion-header" id={index}>
                  <button>
                    {item.title}
                  </button>
                </h3>
                <div className=" collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
       </div>
     </div>
  )
}

export default FAQ
