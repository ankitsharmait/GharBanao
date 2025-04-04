import logo from './logo.png'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand_img.png'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
  {
    title: "Shanti Villa",
    price: "₹2,50,000",
    location: "Patna",
    image: project_img_1
  },
  {
    title: "Ananda Residency",
    price: "₹2,50,000",
    location: "Gaya",
    image: project_img_2
  },
  {
    title: "Sundaram Heights",
    price: "₹2,50,000",
    location: "Jehanabad",
    image: project_img_3
  },
  {
    title: "Krishna Enclave",
    price: "₹2,50,000",
    location: "Makhdumpur",
    image: project_img_4
  },
  {
    title: "Ananda Residency",
    price: "₹2,50,000",
    location: "Muzzafarpur",
    image: project_img_5
  },
  {
    title: "Sundaram Heights",
    price: "₹2,50,000",
    location: "Bela",
    image: project_img_6
  }
]; // <-- This was missing!


export const testimonialsData = [
  {
    name: "Ankit Sharma",
    title: "Software Engineer",
    image: profile_img_1,
    alt: "Portrait of Rohit Sharma",
    rating: 5,
    text: "The team was extremely professional and helped me find the perfect home in no time. Their service and support made the whole experience smooth and satisfying."
  },
  {
    name: "Amit Verma",
    title: "Graphic Designer",
    image: profile_img_2,
    alt: "Portrait of Priya Verma",
    rating: 4,
    text: "I was impressed by the variety of properties they had. They patiently understood my requirements and guided me to make the best choice for my budget."
  },
  {
    name: "Amitabh Mehta",
    title: "Farmer",
    image: profile_img_3,
    alt: "Portrait of Amitabh Mehta",
    rating: 5,
    text: "Excellent service! They truly care about finding what’s right for you. I couldn’t be happier with the property I found through them."
  }
];
