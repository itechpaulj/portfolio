import React from "react";
import { Fade } from "react-awesome-reveal";
function ContactUs() {
  return (
    <div className="border border-emerald-500 rounded-[2rem]">
      <Fade direction="left" delay={500}>
        <div className="flex justify-center items-center">
          <div className="font-semibold text-2xl">
            <pre>
              <code>{`< GET IN TOUCH />`}</code>
            </pre>
          </div>
        </div>
        <div className="flex justify-start items-center 2xl:justify-center">
          <div className="font-semibold text-[10px] 2xl:text-2xl">
            <pre>
              <code>{`
const contact_me = 
[
social_media: 
    {
        'facebook': 
            'https://www.facebook.com/Muckosaurus',
        
        'twitter/x': 
            'https://x.com/PaulJavinez',
        
        'instagram': 
            'https://www.instagram.com/pjavinez',
        
        'tiktok': 
            'https://www.tiktok.com/@pjavinez',
    },

'where_i_am':
    {
        'country': 'Philippines',
        'country_code': 'PH',
        'hometown': '(404) Not Found',
        'liked_city': 'Manila City',
    },

'github': 'https://github.com/itechpaulj',
'gmail': 'itechpaulj@gmail.com'
            
];

console.log(\`$\{"Made in Tailwind CSS"}\`)
          `}</code>
            </pre>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default ContactUs;
