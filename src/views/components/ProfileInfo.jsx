import david1 from '../assets/Images/Headshots/davidwilson1.jpg';
import david2 from '../assets/Images/Headshots/davidwilson2.png';
import jeremy from '../assets/Images/Headshots/jeremy.png';
import jerri from '../assets/Images/Headshots/jglover.jpg';
import karl from '../assets/Images/Headshots/KarlShinn.jpg';
import mccall from '../assets/Images/Headshots/mccall.jpg';
import will from '../assets/Images/Headshots/will.jpeg';

export default function ProfileInfo() {
  return (
    <div className="max-w-7xl mx-auto p-3">
      <div>
        {' '}
        <img src={david1} />
      </div>
      <div>
        <img src={david2} />
        {
          ' David possesses a Bachelor degree in Psychology with a minor in Fine Arts from Eastern New Mexico University, a Master of Arts in Postsecondary Education from San Diego State University, a Master of Education in Instructional Design & Technology from West Texas A&M University, as well as a certificate in Full Stack Web Development from Amarillo College. His career background is in education, digital marketing, technology, and web design. Some of his passions include photography, videography, graphic design, and hot air ballooning. In terms of web development, David’s focus has always been on the user experience and usability; he loves building responsive websites that are aesthetically pleasing and easy to use.'
        }
      </div>
      <div>
        <img src={jeremy} />
        {
          'Jerri serves Closed Carrot as our business development and project management lead. She has a diverse professional background including mediation, real estate, project management, small business owner, court reporter legal assistant, training and even worked on the Space Shuttle Recovery team at Edward Air Force Base in California. She is passionate about community and helping others excel in their personal and professional goals. '
        }
      </div>
      <div>
        {' '}
        <img src={jerri} />
        {
          'Jerri serves Closed Carrot as our business development and project management lead. She has a diverse professional background including mediation, real estate, project management, small business owner, court reporter legal assistant, training and even worked on the Space Shuttle Recovery team at Edward Air Force Base in California. She is passionate about community and helping others excel in their personal and professional goals. '
        }
      </div>
      <div>
        {' '}
        <img src={karl} />{' '}
      </div>
      <div>
        <img src={mccall} />
        {
          'McCall Money double majored in Public Relations and Advertising at The University of Texas at Arlington. While in college, McCall was a member of the UT Arlington chapter of the American Advertising Federation, Public Relations Student Society of America, and led many of her projects as the Campaign Manager. McCall has experience with the Texas Rangers Baseball Club in customer service and promotions, and has also served as the Promotions Coordinator for Chick-fil-A. McCall’s mission is to provide clients with first-class care and attention. She is passionate about creating a seamless user experience and crafting innovative ideas through marketing, photography, and web design. '
        }
      </div>
      <div>
        {' '}
        <img src={will} />
        {
          'William Manning is an IT Business Analyst and Project Coordinator with experience in software development, reporting, automation, and project management. He has worked on custom software using MS Access, Crystal Reporting, SQL, and VBA, and has developed automation processes for Mulesoft Developers. William is proficient in various front-end and back-end programming languages, such as JavaScript, React, Python, and SQL. He is skilled in project planning, risk management, cost estimation, and schedule reporting, and has experience in maintaining data integrity and configuration control. Additionally, William has a Bachelors degree in Business Management from West Texas A&M University, and an Associates degree in Business Administration from Amarillo College. '
        }
      </div>
    </div>
  );
}
