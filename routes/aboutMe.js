const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
  res.render('aboutMe', { introOne:'After successful completion of my under graduate studies in Bachelor of Technology in Information Technology from Mahatma Gandhi University, Kerala, India with 7.04 CGPA  in the year 2015, I joined the IT department of St.Anthony’s Sr. Sec. School as a Computer Trainer and School IT administrator having responsibilities of website maintenance, Computer training to students  and other technical works. Though I was happy with my job as a computer trainer, later I realized that my growth in the field of my profession is limited here and by considering my professional growth I decided to join back my core field of technology. Information technology is a field of high level competition and I need to be updated with latest skills and technologies. Since my childhood, I have been interested in web and mobile applications and I was so curious to work on it. It developed an interest in me to go deeper in to it and thus dreamt of developing web and mobile applications to make life easier for a common man. So I opted for C#.Net for mini project and iOS for main project during my under graduate studies. These projects on web and mobile application received great level of appreciation from my professors and friends and I decided to study in detail these topics. I opted Mobile solutions development program at Conestoga College with a co-op option and it is a perfect choice for me which provides lots of exposure to my field of interest. I strongly believe that, the chosen program which provides industrial experience can give enough strength to my portfolio to accelerate my career in the field of information technology.',
  introTwo: 'I also have one year experience as a wordpress developer in Beeka Ventures and it really helped me to upgrade design skills and apply my practical knowledge. I developed various websites for clients with greater customer satisfaction and on-time product delivery.',
  introThree: 'I look forward for freelance projects in the areas of web development, ios and Android development. The project rates are comparatively cheaper and do not hesitate to contact me, if I am the right person for you.'


  });
});

module.exports = router