
import "./Styles/ContactStyles.scss";
export const Contact = () =>
{
    return(
        <div className="ContactContainer">
        
        <div className="contactHeader">
        <h1>Contact</h1>
        </div>
        
        <div className="contactInfo">
        <div className="contactDetails">
        <h3>Phone</h3>
        <p>Wiekus: (222) 222-2222</p>
        <p>Monique: (222) 222-2222</p>

        <br></br>
        <h3>Email</h3>
        <p>Wiekus: Admin@WSG.co.za</p>
        <p>Monique: Admin@WSG.co.za</p>
 
        <div className="contactHeaders">
        <h3>Visit us</h3>
        <h4>23 Monkor rd, Randpark, Johannesberg</h4>
        </div>

        </div> 
        </div>
        
        
        <div className="directionMap">
        <div className="mapColumn">
        <iframe className="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.5347244968584!2d27.954665815350218!3d-26.114102683478087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95753b80c7a1f5%3A0x93a17f2f80b56426!2sWsg%20Academy!5e0!3m2!1sen!2sza!4v1672356840003!5m2!1sen!2sza" 
         style={{border:0}}
         allowfullscreen="" 
         loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        
          </iframe>
        </div>
        </div>
        
        
        </div>
        )
}