import facebook from '../../../../public/assets/facebook.svg';
import instagram from '../../../../public/assets/instagram.svg';
import twitter from '../../../../public/assets/twitter.svg';
import twitch from '../../../../public/assets/twitch.svg';
import youtube from '../../../../public/assets/youtube.svg';
export default function Footer(){
    const logos = [facebook,instagram,twitter,twitch,youtube]
    const footerContent = ['Privacy Policy','Contact Us','Cookie preferences','Corporate Information','Privacy Policy','Contact Us','Cookie preferences','Corporate Information']
    return(
        <div className="text-white px-56 py-8">
            <div className='flex'>
                {logos.map(logo => (
                    <img className='h-8 w-8 mr-8' src={logo} />
                ))}
            </div>
            <div className="grid grid-cols-4 my-4">
            {footerContent.map(content => (
                <div>{content}</div>
            ))}
            </div>
            <p className='mt-4'> Alkye Test</p>
        </div>
    )
}